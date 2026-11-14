# FORMATO DE NOMBRES PARA IMÁGENES - JC STUDIOS

Para que el sistema detecte automáticamente las fotos subidas por WinSCP/FTP a las carpetas de galería, los archivos deben seguir estos patrones de nombre.

---

## HERO (Portadas del carrusel principal)
**Carpeta**: `public/img/gallery/hero/` (o `img/gallery/hero/` en el servidor)

**Patrón aceptado**:
```
Principal.webp
Principal-2.webp
Principal-3.webp
Principal-4.webp
Principal-5.webp
... (hasta Principal-30)
```

También acepta: `Principal.jpg`, `Principal.jpeg`, `Principal.png` y las variantes con sufijo (`Principal-2.jpg`, etc.).

---

## EVENTOS
**Carpeta base**: `public/img/gallery/eventos/<subcarpeta>/`

Subcarpetas disponibles:
- `bodas`
- `bautizos`
- `quinceaneros`
- `aniversarios`
- `graduaciones`
- `corporativos`

**Patrón aceptado** (2 opciones):

### Opción A: Nombre de la subcarpeta + número
```
bodas.webp
bodas-2.webp
bodas-3.webp
bodas-4.webp
... (hasta bodas-30)
```
(Sustituir "bodas" por el nombre de la subcarpeta correspondiente)

### Opción B: Números secuenciales
```
1.webp
2.webp
3.webp
4.webp
... (hasta 30)
```

Extensiones aceptadas: `.webp`, `.jpg`, `.jpeg`, `.png`

---

## SESIONES
**Carpeta base**: `public/img/gallery/sesiones/<subcarpeta>/`

Subcarpetas disponibles:
- `individual`
- `grupal`
- `maternidad`
- `artistica`
- `cumpleanos`

**Patrón aceptado** (mismo que eventos):

### Opción A: Nombre de la subcarpeta + número
```
individual.webp
individual-2.webp
individual-3.webp
... (hasta individual-30)
```

### Opción B: Números secuenciales
```
1.webp
2.webp
3.webp
... (hasta 30)
```

Extensiones aceptadas: `.webp`, `.jpg`, `.jpeg`, `.png`

---

## RESUMEN RÁPIDO

| Carpeta | Patrón principal | Patrón alternativo |
|---|---|---|
| `hero/` | `Principal.webp`, `Principal-2.webp`, `Principal-3.webp`... | (ninguno) |
| `eventos/bodas/` | `bodas.webp`, `bodas-2.webp`... | `1.webp`, `2.webp`... |
| `eventos/bautizos/` | `bautizos.webp`, `bautizos-2.webp`... | `1.webp`, `2.webp`... |
| `eventos/quinceaneros/` | `quinceaneros.webp`, `quinceaneros-2.webp`... | `1.webp`, `2.webp`... |
| `eventos/aniversarios/` | `aniversarios.webp`, `aniversarios-2.webp`... | `1.webp`, `2.webp`... |
| `eventos/graduaciones/` | `graduaciones.webp`, `graduaciones-2.webp`... | `1.webp`, `2.webp`... |
| `eventos/corporativos/` | `corporativos.webp`, `corporativos-2.webp`... | `1.webp`, `2.webp`... |
| `sesiones/individual/` | `individual.webp`, `individual-2.webp`... | `1.webp`, `2.webp`... |
| `sesiones/grupal/` | `grupal.webp`, `grupal-2.webp`... | `1.webp`, `2.webp`... |
| `sesiones/maternidad/` | `maternidad.webp`, `maternidad-2.webp`... | `1.webp`, `2.webp`... |
| `sesiones/artistica/` | `artistica.webp`, `artistica-2.webp`... | `1.webp`, `2.webp`... |
| `sesiones/cumpleanos/` | `cumpleanos.webp`, `cumpleanos-2.webp`... | `1.webp`, `2.webp`... |

---

## NOTAS IMPORTANTES

1. **Límite**: Se sondean hasta 30 archivos por carpeta.
2. **Extensiones**: `.webp`, `.jpg`, `.jpeg`, `.png` (en ese orden de prioridad).
3. **Sin rebuild**: Las fotos con estos nombres se detectan automáticamente al cargar la página, sin necesidad de recompilar ni redesplegar.
4. **Nombres arbitrarios**: Si subes una foto con un nombre que no sigue estos patrones (ej: `foto-boda-ana.jpg`), NO se detectará automáticamente. En ese caso, necesitas hacer rebuild + redeploy.
5. **Case sensitive**: Los nombres son sensibles a mayúsculas/minúsculas en algunos servidores. Usa minúsculas para mayor compatibilidad.
6. **Sin espacios**: Evita espacios en los nombres de archivo. Usa guiones (`-`) en su lugar.
