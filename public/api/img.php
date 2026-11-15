<?php
/**
 * Redimensionador de imagenes de la galeria.
 * ----------------------------------------------------------------------------
 *   api/img.php?f=eventos/bodas/1.webp&w=600&v=<mtime>
 *
 * - Genera una version WebP de ancho maximo `w` (solo 600 o 2000) la primera
 *   vez que se pide y la guarda en public_html/cache/. Las siguientes visitas
 *   reciben el archivo ya generado.
 * - Si el cliente reemplaza la foto, cambia su fecha (`v`) y se genera de nuevo;
 *   la version anterior se borra.
 * - Si la foto ya es mas chica que `w`, o GD no puede procesarla, se entrega
 *   el original: nunca se rompe la imagen.
 *
 * Vive fuera de img/: el acceso FTP del cliente no lo alcanza.
 */

const WIDTHS  = [600, 2000];
const QUALITY = 80;

$root     = realpath(__DIR__ . '/../img/gallery');
$cacheDir = __DIR__ . '/../cache';

function fail($code) {
    http_response_code($code);
    header('Cache-Control: no-store');
    exit;
}

/** Envia un archivo; si la URL viene versionada se puede cachear para siempre. */
function send($path, $type, $versioned) {
    header('Content-Type: ' . $type);
    header('Content-Length: ' . filesize($path));
    header($versioned
        ? 'Cache-Control: public, max-age=31536000, immutable'
        : 'Cache-Control: no-cache, must-revalidate');
    header_remove('Pragma');
    header_remove('Expires');
    readfile($path);
    exit;
}

// --- Validacion de parametros ------------------------------------------------
$rel = isset($_GET['f']) ? str_replace('\\', '/', (string) $_GET['f']) : '';
$w   = isset($_GET['w']) ? (int) $_GET['w'] : 0;
$versioned = isset($_GET['v']) && $_GET['v'] !== '';

if ($root === false || $rel === '' || !in_array($w, WIDTHS, true)) fail(400);
if (!preg_match('/\.(jpe?g|png|webp|gif)$/i', $rel, $m)) fail(400);

$src = realpath($root . '/' . $rel);
// Evita salir de img/gallery (../../ etc.)
if ($src === false || strpos($src, $root . DIRECTORY_SEPARATOR) !== 0 || !is_file($src)) fail(404);

$ext   = strtolower($m[1]);
$types = ['jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'png' => 'image/png', 'webp' => 'image/webp', 'gif' => 'image/gif'];
$mtime = filemtime($src);

// --- Cache -------------------------------------------------------------------
$hash   = md5($rel);
$dir    = "$cacheDir/$w";
$cached = "$dir/$hash-$mtime.webp";

if (is_file($cached)) send($cached, 'image/webp', $versioned);

// --- Generacion --------------------------------------------------------------
$info = @getimagesize($src);
$canResize = $info && function_exists('imagewebp') && function_exists('imagescale');

// Ya es chica o no hay GD: original tal cual.
if (!$canResize || $info[0] <= $w) send($src, $types[$ext], $versioned);

@ini_set('memory_limit', '512M');
@set_time_limit(60);

switch ($info[2]) {
    case IMAGETYPE_JPEG: $img = @imagecreatefromjpeg($src); break;
    case IMAGETYPE_PNG:  $img = @imagecreatefrompng($src);  break;
    case IMAGETYPE_WEBP: $img = function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($src) : false; break;
    case IMAGETYPE_GIF:  $img = @imagecreatefromgif($src);  break;
    default: $img = false;
}
if (!$img) send($src, $types[$ext], $versioned);

// Fotos de celular en JPEG: respetar la orientacion EXIF.
if ($info[2] === IMAGETYPE_JPEG && function_exists('exif_read_data')) {
    $exif = @exif_read_data($src);
    $rot  = [3 => 180, 6 => -90, 8 => 90];
    if (!empty($exif['Orientation']) && isset($rot[$exif['Orientation']])) {
        $r = imagerotate($img, $rot[$exif['Orientation']], 0);
        if ($r) { imagedestroy($img); $img = $r; }
    }
}

if (!imageistruecolor($img)) imagepalettetotruecolor($img);
imagealphablending($img, false);
imagesavealpha($img, true);

if (imagesx($img) > $w) {
    $scaled = imagescale($img, $w, -1, IMG_BICUBIC);
    if ($scaled) { imagedestroy($img); $img = $scaled; }
}
imagealphablending($img, false);
imagesavealpha($img, true);

if (!is_dir($dir)) @mkdir($dir, 0755, true);

// Escritura atomica: tmp + rename (dos visitas simultaneas no se pisan).
$tmp = "$cached." . getmypid() . '.tmp';
$ok  = is_dir($dir) && @imagewebp($img, $tmp, QUALITY);
imagedestroy($img);

if (!$ok || !@rename($tmp, $cached)) {
    @unlink($tmp);
    send($src, $types[$ext], $versioned);
}

// Borra versiones viejas de esta misma foto.
foreach (glob("$dir/$hash-*.webp") ?: [] as $old) {
    if ($old !== $cached) @unlink($old);
}

send($cached, 'image/webp', $versioned);
