# FOTOS POR DEFECTO Y NOMBRES RECONOCIDOS - JC STUDIOS

## Cómo funciona la detección

### En el servidor (api/galeria.php)
Al cargar la página, la web pide `/api/galeria.php`, que lista **todas** las fotos que hay en
`img/gallery/` en ese momento, con su fecha de modificación. Con eso arma las URLs como
`foto.webp?v=<fecha>`:
- Foto nueva o reemplazada (aunque tenga el mismo nombre) → cambia la fecha → cambia la URL → se ve al instante.
- Foto sin cambios → misma URL → el navegador la reutiliza de caché (carga rápida).
- Foto borrada → deja de aparecer.

Se acepta **cualquier nombre** y los formatos `.webp .jpg .jpeg .png .avif .gif`.
`api/galeria.php` está fuera de `img/`, así que el acceso FTP del cliente no lo toca.

### En desarrollo (npm run dev)
Vite no ejecuta PHP: usa el manifiesto que genera al escanear `public/img/gallery/`.

---

## FOTOS POR DEFECTO (build-time) POR CARPETA

### HERO (`img/gallery/hero/`)
| Archivo | Detectado |
|---|---|
| `Principal.webp` | ✅ |
| `Principal-2.webp` | ✅ |
| `Principal-3.webp` | ✅ |
| `Principal-4.webp` | ✅ |

**Máximo: 5 fotos**

### EVENTOS

#### Aniversarios (`img/gallery/eventos/aniversarios/`)
| Archivo | Detectado |
|---|---|
| `aniversarios-min.jpg` | ✅ (miniatura) |
| `bodas-min.jpg` | ✅ (miniatura) |
| `img-4231.jpg` | ✅ |

#### Bautizos (`img/gallery/eventos/bautizos/`)
| Archivo | Detectado |
|---|---|
| `Bautizo.jpg` | ✅ |
| `portada3.jpg` | ✅ |
| `trabajo12-min.jpg` | ✅ (miniatura) |
| `trabajo12.jpg` | ✅ |
| `trabajo9-min.jpg` | ✅ (miniatura) |
| `trabajo9.jpg` | ✅ |

#### Bodas (`img/gallery/eventos/bodas/`)
| Archivo | Detectado |
|---|---|
| `BODAS.jpg` | ✅ |
| `principal.jpg` | ✅ |
| `trabajo5-min.jpg` | ✅ (miniatura) |
| `trabajo5.jpg` | ✅ |

#### Corporativos (`img/gallery/eventos/corporativos/`)
| Archivo | Detectado |
|---|---|
| `corporativos-min.jpg` | ✅ (miniatura) |
| `corporativos.jpg` | ✅ |
| `sesion-artistica-min.jpg` | ✅ (miniatura) |
| `trabajo2-min.jpg` | ✅ (miniatura) |
| `trabajo2.jpg` | ✅ |

#### Graduaciones (`img/gallery/eventos/graduaciones/`)
| Archivo | Detectado |
|---|---|
| `corporativos.jpg` | ✅ |
| `graduaciones-min.jpg` | ✅ (miniatura) |
| `trabajo2.jpg` | ✅ |

#### Quinceañeros (`img/gallery/eventos/quinceaneros/`)
| Archivo | Detectado |
|---|---|
| `GRADUACIONES.jpg` | ✅ |
| `quinceaneros.jpg` | ✅ |
| `trabajo6-min.jpg` | ✅ (miniatura) |
| `trabajo6.jpg` | ✅ |

### SESIONES

#### Artística (`img/gallery/sesiones/artistica/`)
| Archivo | Detectado |
|---|---|
| `principal.jpg` | ✅ |
| `quinceaneros-min.jpg` | ✅ (miniatura) |
| `trabajo5-min.jpg` | ✅ (miniatura) |
| `trabajo5.jpg` | ✅ |

#### Cumpleaños (`img/gallery/sesiones/cumpleanos/`)
| Archivo | Detectado |
|---|---|
| `sesion-cumpleanos-min.jpg` | ✅ (miniatura) |
| `sesion-cumpleanos.jpg` | ✅ |
| `trabajo1-min.jpg` | ✅ (miniatura) |
| `trabajo1.jpg` | ✅ |

#### Grupal (`img/gallery/sesiones/grupal/`)
| Archivo | Detectado |
|---|---|
| `1.jpg` | ✅ |
| `2.jpg` | ✅ |
| `3.jpg` | ✅ |
| `4.jpg` | ✅ |
| `5.jpg` | ✅ |
| `6.jpg` | ✅ |
| `7.jpg` | ✅ |
| `8.jpg` | ✅ |

#### Individual (`img/gallery/sesiones/individual/`)
| Archivo | Detectado |
|---|---|
| `sesion-individual-min.jpg` | ✅ (miniatura) |
| `sesion-individual.jpg` | ✅ |
| `trabajo10-min.jpg` | ✅ (miniatura) |
| `trabajo10.jpg` | ✅ |
| `trabajo11-min.jpg` | ✅ (miniatura) |
| `trabajo11.jpg` | ✅ |
| `trabajo8-min.jpg` | ✅ (miniatura) |
| `trabajo8.jpg` | ✅ |

#### Mascotas (`img/gallery/sesiones/mascotas/`)
| Archivo | Detectado |
|---|---|
| `sesion-artistica-min.jpg` | ✅ (miniatura) |
| `trabajo2-min.jpg` | ✅ (miniatura) |
| `trabajo2.jpg` | ✅ |

#### Maternidad (`img/gallery/sesiones/maternidad/`)
| Archivo | Detectado |
|---|---|
| `sesion-maternidad-min.jpg` | ✅ (miniatura) |
| `sesion-maternidad.jpg` | ✅ |
| `trabajo4-min.jpg` | ✅ (miniatura) |
| `trabajo4.jpg` | ✅ |
| `trabajo7-min.jpg` | ✅ (miniatura) |
| `trabajo7.jpg` | ✅ |

### LOGOS (`img/gallery/logos/`)
| Archivo | Detectado |
|---|---|
| `jc-studios-blanco.png` | ✅ |
| `jc-studios-png-dorado.png` | ✅ |
| `jcstudios.png` | ✅ |
| `jcstudiosblanco.png` | ✅ |

---

## ORDEN Y PORTADA

Las fotos de cada carpeta se ordenan así (la primera es la portada de la tarjeta):
1. La que se llama como la carpeta (`bodas/bodas.webp`)
2. Las que empiezan por `portada`, `principal`, `cover`, `hero` o `main`
3. El resto en orden alfanumérico (`1, 2, 3 … 10`)

### Tamaños automáticos (api/img.php)
El cliente sube **una sola foto** (puede ser la original de la cámara). El servidor genera solo:
- **Miniatura de 600 px** → tarjetas y grilla del modal.
- **Versión de 2000 px** → visor grande (lightbox) y hero.

Se generan la primera vez que alguien las ve y quedan guardadas en `public_html/cache/`
(se puede borrar sin problema: se vuelven a generar). Si se reemplaza la foto, se regeneran.
Los logos se sirven siempre en original.

Opcional: si existe `foto-min.webp` junto a `foto.webp`, se usa esa como miniatura
(con guion: `1-min.webp`, no `1min.webp`).

Recomendado igual: subir fotos de máximo ~3000 px para que el FTP sea más rápido.

El hero muestra como máximo 5 fotos de `img/gallery/hero/`.

## SI UNA FOTO NO SE ACTUALIZA

- Abre `https://jcstudiosperu.com/api/galeria.php` y verifica que la foto aparezca con su fecha nueva.
- Si no aparece: el archivo no quedó en la carpeta correcta (revisa la ruta en WinSCP).
- Si aparece pero la web no cambia: recarga la página (no hace falta borrar caché).
