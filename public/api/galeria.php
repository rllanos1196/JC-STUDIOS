<?php
/**
 * Manifiesto de la galeria (runtime).
 * ----------------------------------------------------------------------------
 * Lista las fotos que hay en img/gallery con su fecha de modificacion.
 * La web lo pide una vez al cargar y arma las URLs como foto.webp?v=<fecha>,
 * asi que cuando el cliente reemplaza una foto por FTP la URL cambia y el
 * navegador descarga la nueva; las que no cambiaron siguen en cache.
 *
 * Vive fuera de img/ a proposito: el acceso FTP del cliente no lo alcanza.
 * Mismo formato que el plugin virtual:gallery de vite.config.js.
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, no-store, must-revalidate');
header('Pragma: no-cache');
header('Expires: 0');

$root = realpath(__DIR__ . '/../img/gallery');
$folders = new stdClass();

function walk($abs, $rel, $folders) {
    $entries = @scandir($abs);
    if ($entries === false) return;

    $files = [];
    $dirs = [];
    foreach ($entries as $name) {
        if ($name === '' || $name[0] === '.') continue;
        $path = $abs . DIRECTORY_SEPARATOR . $name;
        if (is_dir($path)) {
            $dirs[] = $name;
        } elseif (preg_match('/\.(jpe?g|png|webp|avif|gif)$/i', $name)) {
            $files[] = [$name, filemtime($path)];
        }
    }

    if ($files) {
        usort($files, function ($a, $b) { return strnatcasecmp($a[0], $b[0]); });
        $folders->{$rel} = $files;
    }
    foreach ($dirs as $d) {
        walk($abs . DIRECTORY_SEPARATOR . $d, $rel === '' ? $d : "$rel/$d", $folders);
    }
}

if ($root !== false) walk($root, '', $folders);

// resize: el front puede pedir versiones reducidas a api/img.php
echo json_encode(['base' => 'img/gallery/', 'resize' => true, 'folders' => $folders], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
