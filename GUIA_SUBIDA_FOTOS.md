# GUÍA DE SUBIDA DE FOTOS - JC STUDIOS

Esta guía explica cómo nombrar y subir fotos a las carpetas de galería para que se muestren automáticamente en la página web (sin necesidad de recompilar).

---

## LOGOS
**Carpeta**: `img/gallery/logos/`

Los logos se buscan por nombre. Nombres reconocidos actualmente:
- `jcstudios` → logo principal
- `jcstudiosblanco` → logo blanco
- `jc-studios-blanco` → logo blanco (variante)
- `jc-studios-png-dorado` → logo dorado

**Para agregar un nuevo logo**, nómbralo de forma descriptiva:
```
jcstudios.png
jcstudiosblanco.png
jcstudios-dorado.png
jcstudios-negro.png
```

**Patrón alternativo** (números secuenciales):
```
1.png
2.png
3.png
... (hasta 30)
```

Extensiones: `.webp`, `.jpg`, `.jpeg`, `.png`

**Nota**: Los logos NO se detectan automáticamente por nombre arbitrario en runtime. Si agregas un logo con un nombre nuevo, necesitas rebuild + redeploy para que se registre. Los números secuenciales sí se detectan automáticamente.

---

## ESTRUCTURA DE CARPETAS EN EL SERVIDOR

```
public_html/
└── img/
    └── gallery/
        ├── hero/                          ← Portadas del carrusel principal
        ├── eventos/
        │   ├── aniversarios/
        │   ├── bautizos/
        │   ├── bodas/
        │   ├── corporativos/
        │   ├── graduaciones/
        │   └── quinceaneros/
        └── sesiones/
            ├── artistica/
            ├── cumpleanos/
            ├── grupal/
            ├── individual/
            ├── mascotas/
            └── maternidad/
```

---

## FORMATO DE NOMBRES POR CARPETA

### HERO (Portadas del carrusel)
**Carpeta**: `img/gallery/hero/`

```
Principal.webp
Principal-2.webp
Principal-3.webp
Principal-4.webp
Principal-5.webp          ← máximo 5 fotos
```
Extensiones: `.webp`, `.jpg`, `.jpeg`, `.png`

---

### EVENTOS

#### Aniversarios
**Carpeta**: `img/gallery/eventos/aniversarios/`

```
aniversarios.webp
aniversarios-2.webp
aniversarios-3.webp
... (hasta aniversarios-30)
```
**O también** (números secuenciales):
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Bautizos
**Carpeta**: `img/gallery/eventos/bautizos/`

```
bautizos.webp
bautizos-2.webp
bautizos-3.webp
... (hasta bautizos-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Bodas
**Carpeta**: `img/gallery/eventos/bodas/`

```
bodas.webp
bodas-2.webp
bodas-3.webp
... (hasta bodas-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Corporativos
**Carpeta**: `img/gallery/eventos/corporativos/`

```
corporativos.webp
corporativos-2.webp
corporativos-3.webp
... (hasta corporativos-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Graduaciones
**Carpeta**: `img/gallery/eventos/graduaciones/`

```
graduaciones.webp
graduaciones-2.webp
graduaciones-3.webp
... (hasta graduaciones-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Quinceañeros
**Carpeta**: `img/gallery/eventos/quinceaneros/`

```
quinceaneros.webp
quinceaneros-2.webp
quinceaneros-3.webp
... (hasta quinceaneros-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

---

### SESIONES

#### Artística
**Carpeta**: `img/gallery/sesiones/artistica/`

```
artistica.webp
artistica-2.webp
artistica-3.webp
... (hasta artistica-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Cumpleaños
**Carpeta**: `img/gallery/sesiones/cumpleanos/`

```
cumpleanos.webp
cumpleanos-2.webp
cumpleanos-3.webp
... (hasta cumpleanos-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Grupal
**Carpeta**: `img/gallery/sesiones/grupal/`

```
grupal.webp
grupal-2.webp
grupal-3.webp
... (hasta grupal-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Individual
**Carpeta**: `img/gallery/sesiones/individual/`

```
individual.webp
individual-2.webp
individual-3.webp
... (hasta individual-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Mascotas
**Carpeta**: `img/gallery/sesiones/mascotas/`

```
mascotas.webp
mascotas-2.webp
mascotas-3.webp
... (hasta mascotas-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

#### Maternidad
**Carpeta**: `img/gallery/sesiones/maternidad/`

```
maternidad.webp
maternidad-2.webp
maternidad-3.webp
... (hasta maternidad-30)
```
**O también**:
```
1.webp
2.webp
3.webp
... (hasta 30)
```

---

## REGLAS GENERALES

1. **Extensiones aceptadas**: `.webp`, `.jpg`, `.jpeg`, `.png`
2. **Límite**: Hasta 30 fotos por carpeta (excepto hero: máximo 5)
3. **Sin espacios**: No uses espacios en los nombres. Usa guiones (`-`).
4. **Minúsculas**: Usa nombres en minúsculas para mayor compatibilidad.
5. **Sin acentos**: Evita acentos (á, é, í, ó, ú, ñ). Ej: `quinceaneros` (sin ñ), `cumpleanos` (sin ñ).
6. **Sin rebuild**: Las fotos con estos nombres se detectan automáticamente al cargar la página. No necesitas recompilar ni redesplegar.
7. **Caché**: Si no ves la foto nueva, limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R).

---

## EJEMPLO PRÁCTICO

Si quieres agregar 3 fotos nuevas de una boda:

1. Nombra los archivos:
   - `bodas-6.webp`
   - `bodas-7.webp`
   - `bodas-8.webp`

2. Súbelos por WinSCP a: `img/gallery/eventos/bodas/`

3. Recarga la página → las fotos aparecen automáticamente.

---

## NOTA SOBRE NOMBRES ARBITRARIOS

Si subes una foto con un nombre que **no** sigue estos patrones (ej: `foto-boda-ana.jpg`), **no** se detectará automáticamente. En ese caso, necesitas:
1. Renombrar el archivo siguiendo el patrón, **o**
2. Hacer rebuild + redeploy del proyecto.
