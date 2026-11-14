# PALETA DE COLORES Y TIPOGRAFÍA - JC STUDIOS

---

## Tipografía

### Fuente Principal
- **Familia**: Poppins (Google Fonts)
- **Pesos**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **URL**: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap`
- **CSS**: `font-family: 'Poppins', sans-serif;`

### Tamaños de Texto
| Elemento | Tamaño | Peso |
|---|---|---|
| Título Hero | 3.5rem | 700 |
| Título Sección | 2.5rem | 700 |
| Título Card | 1.2-1.3rem | 600 |
| Texto Body | 1rem | 400 |
| Texto Secundario | 0.9-0.95rem | 400 |
| Texto Pequeño | 0.8-0.85rem | 400 |
| Navbar Links | 0.85rem | 600 (uppercase) |

---

## Paleta de Colores

### Colores de Marca
| Color | Hex | Uso |
|---|---|---|
| **Rojo Principal** | `#e30512` | Botones, acentos, hover, badges premium |
| **Azul Oscuro** | `#233559` | Navbar, títulos, gradientes |
| **Azul Medio** | `#1d71b8` | Links, acento secundario |

### Light Mode (Claro)
| Variable CSS | Hex | Descripción |
|---|---|---|
| `--bg-primary` | `#ffffff` | Fondo general |
| `--bg-secondary` | `#f4f6f9` | Fondo alternativo |
| `--bg-tertiary` | `#f8f9fa` | Headers de cards, inputs |
| `--bg-card` | `#ffffff` | Fondo de cards |
| `--bg-card-hover` | `#ffffff` | Fondo de cards hover |
| `--text-primary` | `#1a1a2e` | Títulos principales |
| `--text-secondary` | `#555555` | Texto descriptivo |
| `--text-muted` | `#888888` | Texto secundario |
| `--border-color` | `#e9ecef` | Bordes generales |
| `--input-bg` | `#f8f9fa` | Fondos de inputs |

### Dark Mode (Oscuro)
| Variable CSS | Hex | Descripción |
|---|---|---|
| `--bg-primary` | `#0f0f1a` | Fondo general |
| `--bg-secondary` | `#161625` | Fondo alternativo |
| `--bg-tertiary` | `#1c1c2e` | Headers de cards |
| `--bg-card` | `#1a1a2e` | Fondo de cards |
| `--bg-card-hover` | `#22223a` | Fondo de cards hover |
| `--text-primary` | `#ffffff` | Títulos principales |
| `--text-secondary` | `#d0d0e0` | Texto descriptivo |
| `--text-muted` | `#9999b0` | Texto secundario |
| `--border-color` | `#2a2a40` | Bordes generales |
| `--input-bg` | `#22223a` | Fondos de inputs |

### Colores de Planes (Servicios)
| Plan | Color Precio | Color Icono |
|---|---|---|
| **Básico** | `#28a745` (verde) | `#28a745` |
| **Estándar** | `#e6a800` (dorado) | `#ffc107` |
| **Premium** | `#e30512` (rojo) | `#e30512` |

### Colores de Estados
| Estado | Hex | Uso |
|---|---|---|
| Éxito | `#28a745` | Confirmaciones |
| Advertencia | `#ffc107` | Alertas |
| Error | `#dc3545` | Errores |
| Info | `#17a2b8` | Información |

### Navbar (Glass Effect)
- **Light**: `linear-gradient(135deg, rgba(35,53,89,0.85), rgba(227,5,18,0.75))`
- **Dark**: `linear-gradient(135deg, rgba(35,53,89,0.55), rgba(227,5,18,0.45))`
- `backdrop-filter: blur(20px) saturate(1.8)`

### Gradientes Principales
- **Botones/CTA**: `linear-gradient(135deg, #e30512, #233559)`
- **Hero overlay**: `linear-gradient(45deg, rgba(220,61,72,0.235), rgba(69,90,132,0.358))`

### Sombras (Shadows)
| Variable | Valor |
|---|---|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.12)` |
| `--shadow-card` | `0 8px 24px rgba(0,0,0,0.08)` |
| `--shadow-card-hover` | `0 16px 40px rgba(0,0,0,0.12)` |
| `--shadow-red` | `0 6px 20px rgba(227,5,18,0.35)` |

### Glass Effect (Liquid Glass)
- Navbar: `blur(20px) saturate(1.8)`
- Modal/Lightbox: `blur(30px) saturate(1.5)`
- Dropdown: `blur(20px) saturate(1.8)`
- Hover items: `blur(8px)`

### Border Radius
| Elemento | Valor |
|---|---|
| Navbar | `16px` (12px mobile, 10px small) |
| Cards | `12px` |
| Botones | `50px` (pill) |
| Inputs | `8px` |
| Imágenes galería | `6px` |
| Lightbox | `0` (pantalla completa) |
