# FOTOS POR DEFECTO Y NOMBRES RECONOCIDOS - JC STUDIOS

## Cómo funciona la detección

### En tiempo de build (npm run build)
Vite escanea `public/img/gallery/` y genera un manifest con TODOS los archivos que existen en ese momento. Esas fotos son las "por defecto".

### En tiempo de ejecución (runtime)
Al abrir un modal o cargar la página, el sistema:
1. Verifica que cada foto del manifest siga existiendo (con cache-busting para evitar caché del navegador)
2. Sondea nombres adicionales siguiendo los patrones reconocidos
3. Muestra solo las fotos que realmente existen en el servidor

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

## NOMBRES RECONOCIDOS POR RUNTIME (para fotos nuevas subidas por WinSCP)

Además de las fotos por defecto, el sistema detecta automáticamente fotos con estos nombres:

### HERO
- `Principal.webp`, `Principal-2.webp`, `Principal-3.webp`, `Principal-4.webp`, `Principal-5.webp`
- (solo `.webp` para detección automática)

### EVENTOS y SESIONES (cualquier subcarpeta)
**Opción A** - Nombre de la carpeta + número:
- `bodas.webp`, `bodas-2.webp`, `bodas-3.webp`... (hasta 30)
- `cumpleanos.webp`, `cumpleanos-2.webp`... (hasta 30)
- (sustituir por el nombre de la subcarpeta)

**Opción B** - Números secuenciales:
- `1.webp`, `2.webp`, `3.webp`... (hasta 30)
- (solo `.webp` para detección automática)

### LOGOS
- Nombres descriptivos: `jcstudios.png`, `jcstudiosblanco.png`, `jcstudios-dorado.png`, etc.
- Números secuenciales: `1.png`, `2.png`, `3.png`... (hasta 30)

---

## RESUMEN: QUÉ PASA CUANDO BORRAS UNA FOTO

1. El sistema verifica al cargar la página si cada foto del manifest sigue existiendo
2. Si una foto fue borrada, el servidor devuelve 404 y la foto se **filtra automáticamente**
3. Las fotos nuevas que siguen los patrones de nombres se **detectan automáticamente**
4. No necesitas rebuild ni redeploy

## SI UNA FOTO BORRADA SIGUE MOSTRÁNDOSE

- Limpia la caché del navegador (Ctrl+Shift+R o ventana incógnita)
- Verifica que el archivo realmente no exista en el File Manager de Hostinger
- Si el `.htaccess` tiene caché agresivo, el navegador puede servir la imagen vieja desde caché
