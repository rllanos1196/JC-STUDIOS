// Service data with detailed information
const serviceData = {
  // Eventos
  bodas: {
    name: "Bodas",
    icon: "fas fa-rings-wedding",
    description:
      "Bodas: Capturamos la magia de tu día más especial con elegancia y romanticismo. Desde la preparación de la novia hasta el último baile, documentamos cada emoción y momento único de vuestra celebración de amor.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "fotos sin editar",
        features: [
          "Fotos del evento sin EDITAR",
          "Video editado 1 HORA Full HD",
          // "Entrega digital en alta resolución",
          // "1 ubicación",
          // "Galería online por 30 días",
          // "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "15 fotos editadas",
        features: [
          "Sesión pre boda, 15 fotos con retoque PROFESIONAL",
          "Fotos del evento con retoque",
          "Video de 1 hora y 30 min. Full HD",
          "Cuadro para firmas",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "25 fotos retoque Profesional",
        features: [
          "Sesión pre boda, 15 fotos con retoque PROFESIONAL",
          "Fotos del evento con retoque",
          "Video de 1 hora y 30 minutos en 4K",
          "Video highlight de 3 a 5 minutos en 4K",
          "Cuadro para firmas",
          "100 Fotos Impresas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },
  bautizos: {
    name: "Bautizos",
    icon: "fas fa-cross",
    description:
      "Momentos sagrados y emotivos capturados con delicadeza y respeto. Documentamos este día tan especial para toda la familia con sensibilidad y profesionalismo.",
    hasPackages: true,
    packages: {
      basico: {
        name: "Básico - Ceremonia",
        price: 250,
        duration: "2 horas",
        photos: "15 fotos editadas",
        features: [
          "Sesión Pre Bautizo, 15 fotos con retoque profesional.",
          "Fotos del evento sin editar",
          "Video editado 1 hora Full HD",
          // "Galería online por 60 días",
          // "Entrega digital en alta resolución",
        ],
      },
      standard: {
        name: "Estándar - Ceremonia + Celebración",
        price: 400,
        duration: "4 horas",
        photos: "20 fotos editadas",
        features: [
          "Sesión Pre Bautizo, 20 fotos con retoque profesional.",
          "Fotos del evento con retoque",
          "Video editado de 1 hora y 30 minutos Full HD",
          "Cuadro para firmas",
          // "Galería online por 90 días",
          // "Álbum digital de 30 páginas",
          // "10 fotos impresas 15x20cm",
        ],
      },
      premium: {
        name: "Premium - Día Completo",
        price: 600,
        duration: "6 horas",
        photos: "25 fotos editadas",
        features: [
          "Sesión Pre Bautizo, 25 fotos con retoque profesional.",
          "Fotos del evento con retoque",
          "Video editado de 1 hora y 30 minutos en 4K",
          "Video highlights de 3 a 5 minutos en 4K",
          "Cuadro para firmas",
          "100 Fotos Impresas",
          // "Álbum físico de 40 páginas",
          // "20 fotos impresas premium",
          // "Video resumen de 5 minutos",
        ],
      },
    },
  },
  quinceaneros: {
    name: "Quinceañeros",
    icon: "fas fa-crown",
    description:
      "Quinceañeros: Capturamos la esencia de tu celebración con un enfoque fresco y vibrante. Desde la sesión previa hasta el baile, documentamos cada detalle de tu transición a la adultez.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "15 fotos editadas",
        features: [
          "Sesión Pre 15 años, 15 fotos con retoque profesional.",
          "Fotos de evento con retoque",
          "Video editado de 1 hora Full HD",
          // "1 ubicación",
          // "Galería online por 30 días",
          // "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "20 fotos editadas",
        features: [
          "Sesión Pre 15 años, 20 fotos con retoque profesional.",
          "Fotos de evento con retoque",
          "Video editado de 1 hora y 30 minutos Full HD",
          "Cuadro para firmas",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "25 fotos editadas",
        features: [
          "Sesión Pre 15 años, 25 fotos con retoque profesional.",
          "Fotos de evento con retoque",
          "Video editado de 1 hora y 30 minutos en 4K",
          "Video highlight de 3 a 5 minutos en 4K",
          "Cuadro para firmas",
          "100 Fotos Impresas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },
  graduaciones: {
    name: "Graduaciones",
    icon: "fas fa-graduation-cap",
    description:
      "Graduaciones: Capturamos el orgullo y la alegría de tu graduación con un estilo profesional y dinámico. Desde la ceremonia hasta la celebración, documentamos cada logro y emoción de este día tan especial.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "fotos editadas",
        features: [
          "Sesión de fotos (pre evento)",
          "Fotos de evento",
          "Video",
          // "1 ubicación",
          // "Galería online por 30 días",
          // "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "fotos editadas",
        features: [
          "Sesión de fotos (pre evento)",
          "Fotos de evento",
          "Video",
          "USB + 15 fotos impresas",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "fotos editadas",
        features: [
          "Sesión de fotos (pre evento)",
          "Fotos de evento",
          "Video",
          "USB + 15 fotos impresas + Cuadro",
          // "Galería online por 90 días",
          // "Álbum físico de 20 páginas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },

  aniversarios: {
    name: "Aniversarios",
    icon: "fas fa-heart",
    description:
      "Aniversarios: Capturamos la esencia de vuestro amor con un enfoque romántico y personalizado. Desde una cena íntima hasta una celebración grandiosa, documentamos cada momento especial de vuestro viaje juntos.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "20 fotos editadas",
          "Entrega digital en alta resolución",
          "1 ubicación",
          "Galería online por 30 días",
          "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "50 fotos editadas",
        features: [
          "Sesión de 2 horas",
          "50 fotos editadas",
          "Entrega digital en alta resolución",
          "2 ubicaciones diferentes",
          "Galería online por 60 días",
          "5 fotos impresas 10x15cm",
          "Retoque avanzado incluido",
          "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "100+ fotos editadas",
        features: [
          "Sesión de 3 horas",
          "100+ fotos editadas",
          "Entrega digital en alta resolución",
          "3 ubicaciones diferentes",
          "Galería online por 90 días",
          "Álbum físico de 20 páginas",
          "15 fotos impresas tamaño profesional",
          "Retoque artístico personalizado",
          "Video behind the scenes",
          "Consulta previa gratuita",
        ],
      },
    },
  },
  corporativos: {
    name: "Eventos Corporativos",
    icon: "fas fa-building",
    description:
      "Eventos Corporativos: Capturamos la profesionalidad y el dinamismo de vuestros eventos empresariales. Desde conferencias hasta lanzamientos de productos, documentamos cada aspecto con un enfoque profesional y elegante.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "20 fotos editadas",
          "Entrega digital en alta resolución",
          "1 ubicación",
          "Galería online por 30 días",
          "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "50 fotos editadas",
        features: [
          "Sesión de 2 horas",
          "50 fotos editadas",
          "Entrega digital en alta resolución",
          "2 ubicaciones diferentes",
          "Galería online por 60 días",
          "5 fotos impresas 10x15cm",
          "Retoque avanzado incluido",
          "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "100+ fotos editadas",
        features: [
          "Sesión de 3 horas",
          "100+ fotos editadas",
          "Entrega digital en alta resolución",
          "3 ubicaciones diferentes",
          "Galería online por 90 días",
          "Álbum físico de 20 páginas",
          "15 fotos impresas tamaño profesional",
          "Retoque artístico personalizado",
          "Video behind the scenes",
          "Consulta previa gratuita",
        ],
      },
    },
  },
  // Sesiones
  cumpleanos: {
    name: "Cumpleaños",
    icon: "fas fa-birthday-cake",
    description:
      "Cumpleaños: Capturamos la alegría y la diversión de tu celebración con un enfoque fresco y vibrante. Desde la decoración hasta los momentos más emotivos, documentamos cada detalle de tu día especial.",
    hasPackages: true,
    packages: {
      // basico: {
      //   namePaquete: "Básico",
      //   price: 150,
      //   duration: "1 hora",
      //   photos: "15 fotos editadas",
      //   features: [
      //     "Sesión de 15 fotos con retoque profesional",
      //     "Fotos de eventos con retoque",
      //     "Video editado de 1 hora y 30 minutos Full HD",
      //     // "1 ubicación",
      //     // "Galería online por 30 días",
      //     // "Soporte por email",
      //   ],
      // },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "15 fotos editadas",
        features: [
          "Sesión de 15 fotos con retoque profesional",
          "Fotos del evento con retoque",
          "Video editado de 1 hora y 30 minutos Full HD",
          // "2 ubicaciones diferentes",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "15 fotos editadas",
        features: [
          "Sesión de 15 fotos con retoque profesional",
          "Fotos del evento con retoque",
          "Video editado de 1 hora y 30 minutos Full HD",
          // "3 ubicaciones diferentes",
          // "Galería online por 90 días",
          // "Álbum físico de 20 páginas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },
  grupales: {
    name: "Sesiones Grupales",
    icon: "fas fa-users",
    description:
      "Sesiones Grupales: Capturamos la esencia de tu grupo con un enfoque dinámico y divertido. Desde amigos hasta familias, documentamos cada interacción y emoción en un ambiente relajado y natural.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "20 fotos editadas",
          "Entrega digital en alta resolución",
          "1 ubicación",
          "Galería online por 30 días",
          "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "50 fotos editadas",
        features: [
          "Sesión de 2 horas",
          "50 fotos editadas",
          "Entrega digital en alta resolución",
          "2 ubicaciones diferentes",
          "Galería online por 60 días",
          "5 fotos impresas 10x15cm",
          "Retoque avanzado incluido",
          "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "100+ fotos editadas",
        features: [
          "Sesión de 3 horas",
          "100+ fotos editadas",
          "Entrega digital en alta resolución",
          "3 ubicaciones diferentes",
          "Galería online por 90 días",
          "Álbum físico de 20 páginas",
          "15 fotos impresas tamaño profesional",
          "Retoque artístico personalizado",
          "Video behind the scenes",
          "Consulta previa gratuita",
        ],
      },
    },
  },
  profesionales: {
    name: "Retratos Profesionales",
    icon: "fas fa-user-tie",
    description:
      "Retratos Profesionales: Capturamos tu imagen con un enfoque profesional y elegante. Desde retratos corporativos hasta sesiones de marca personal, documentamos tu esencia con estilo y sofisticación.",
    hasPackages: true,
    packages: {
      // basico: {
      //   namePaquete: "Básico",
      //   price: 150,
      //   duration: "1 hora",
      //   photos: "20 fotos editadas",
      //   features: [
      //     "Sesión de 1 hora",
      //     "20 fotos editadas",
      //     "Entrega digital en alta resolución",
      //     "1 ubicación",
      //     "Galería online por 30 días",
      //     "Soporte por email",
      //   ],
      // },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "1 hora",
        photos: "15 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "1 solo Outfit",
          "15 fotos con edición + originales",
          "Pago 100% el día de la sesión",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "1 hora y 30 minutos",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora y 30 minutos",
          "Hasta 3 Oufit",
          "20 fotos con edición + originales",
          "20 fotos impresas",
          "Pago 100% el día de la sesión",
          // "Álbum físico de 20 páginas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },
  artisticos: {
    name: "Retratos Artísticos",
    icon: "fas fa-palette",
    description:
      "Retratos Artísticos: Capturamos tu esencia con un enfoque creativo y único. Desde retratos conceptuales hasta sesiones de moda, documentamos tu personalidad con un estilo artístico y distintivo.",
    hasPackages: true,
    packages: {
      // basico: {
      //   namePaquete: "Básico",
      //   price: 150,
      //   duration: "1 hora",
      //   photos: "20 fotos editadas",
      //   features: [
      //     "Sesión de 1 hora",
      //     "20 fotos editadas",
      //     "Entrega digital en alta resolución",
      //     "1 ubicación",
      //     "Galería online por 30 días",
      //     "Soporte por email",
      //   ],
      // },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "1 hora",
        photos: "15 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "1 solo Outfit",
          "15 fotos con edición + originales",
          "Pago 100% el día de la sesión",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "1 hora y 30 minutos",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora y 30 minutos",
          "Hasta 3 Oufit",
          "20 fotos con edición + originales",
          "20 fotos impresas",
          "Pago 100% el día de la sesión",
          // "Álbum físico de 20 páginas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },
  maternidad: {
    name: "Maternidad",
    icon: "fas fa-baby",
    description:
      "Maternidad: Capturamos la belleza y la emoción de la espera con un enfoque cálido y acogedor. Desde sesiones íntimas hasta retratos familiares, documentamos cada momento especial de tu viaje hacia la maternidad.",
    hasPackages: true,
    packages: {
      // basico: {
      //   namePaquete: "Básico",
      //   price: 150,
      //   duration: "1 hora",
      //   photos: "20 fotos editadas",
      //   features: [
      //     "Sesión de 1 hora",
      //     "20 fotos editadas",
      //     "Entrega digital en alta resolución",
      //     "1 ubicación",
      //     "Galería online por 30 días",
      //     "Soporte por email",
      //   ],
      // },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "45 minutos",
        photos: "15 fotos editadas",
        features: [
          "Sesión de 45 minutos",
          "15 fotos con edición + originales",
          "Pago 100% el día de la sesión",
          // "2 ubicaciones diferentes",
          // "Galería online por 60 días",
          // "5 fotos impresas 10x15cm",
          // "Retoque avanzado incluido",
          // "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "1 hora",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "1 vestido",
          "20 fotos con edición + originales",
          "20 fotos impresas",
          "Pago el 100% el día de la sesión",
          // "Álbum físico de 20 páginas",
          // "15 fotos impresas tamaño profesional",
          // "Retoque artístico personalizado",
          // "Video behind the scenes",
          // "Consulta previa gratuita",
        ],
      },
    },
  },
  mascotas: {
    name: "Fotografía de Mascotas",
    icon: "fas fa-paw",
    description:
      "Fotografía de Mascotas: Capturamos la esencia y personalidad de tus animales con un enfoque divertido y creativo. Desde sesiones en estudio hasta aventuras al aire libre, documentamos cada momento especial de tu peludo amigo.",
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: "Básico",
        price: 150,
        duration: "1 hora",
        photos: "20 fotos editadas",
        features: [
          "Sesión de 1 hora",
          "20 fotos editadas",
          "Entrega digital en alta resolución",
          "1 ubicación",
          "Galería online por 30 días",
          "Soporte por email",
        ],
      },
      standard: {
        namePaquete: "Estándar",
        namePaquete: "Estándar",
        price: 250,
        duration: "2 horas",
        photos: "50 fotos editadas",
        features: [
          "Sesión de 2 horas",
          "50 fotos editadas",
          "Entrega digital en alta resolución",
          "2 ubicaciones diferentes",
          "Galería online por 60 días",
          "5 fotos impresas 10x15cm",
          "Retoque avanzado incluido",
          "Soporte telefónico",
        ],
      },
      premium: {
        namePaquete: "Premium",
        price: 400,
        duration: "3 horas",
        photos: "100+ fotos editadas",
        features: [
          "Sesión de 3 horas",
          "100+ fotos editadas",
          "Entrega digital en alta resolución",
          "3 ubicaciones diferentes",
          "Galería online por 90 días",
          "Álbum físico de 20 páginas",
          "15 fotos impresas tamaño profesional",
          "Retoque artístico personalizado",
          "Video behind the scenes",
          "Consulta previa gratuita",
        ],
      },
    },
  },
};

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Configuración de colores e íconos por tipo de paquete
const packageColors = {
  basico: "success",
  standard: "warning",
  premium: "danger",
  deluxe: "info",
};

const packageIcons = {
  basico: "fas fa-camera",
  standard: "fas fa-star",
  premium: "fas fa-crown",
  deluxe: "fas fa-gem",
};

// Función para generar el HTML de cada paquete
function createPackageHTML(packageData, packageType, index = 0) {
  // Si el nombre del paquete está en el objeto de datos, úsalo. Si no, usa el tipo.
  const packageName = packageData.namePaquete || packageData.name;

  // Asigna el color y el ícono basado en el tipo de paquete (basico, standard, premium)
  const color = packageColors[packageType] || "primary";
  const icon = packageIcons[packageType] || "fas fa-camera";

  // ID único para evitar conflictos
  const uniqueId = `package-${packageType}-${index}`;

  return `
        <div class="package-card">
            <button class="package-btn btn btn-outline-${color} w-100 d-flex justify-content-between align-items-center collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#${uniqueId}"
                    aria-expanded="false"
                    aria-controls="${uniqueId}">
                <div class="d-flex align-items-center">
                    <i class="${icon} me-3 fs-4"></i>
                    <div class="text-start">
                        <div class="fw-bold fs-5">${packageName}</div>
                        <small class="text-muted">${packageData.duration} • ${
    packageData.photos
  }</small>
                    </div>
                </div>
                <div class="text-end">
                    <div class="fs-4 fw-bold text-${color}"></div>
                    <i class="fas fa-chevron-down chevron-icon"></i>
                </div>
            </button>

            <div class="collapse"
                 id="${uniqueId}"
                 data-bs-parent="#packages-container">
                <div class="package-details bg-light p-4 border-top">
                    <div class="row">
                        <div class="col-md-8">
                            <h6 class="mb-3">
                                <i class="fas fa-list-check me-2 text-${color}"></i>
                                Incluye:
                            </h6>
                            <ul class="package-features list-unstyled">
                                ${packageData.features
                                  .map(
                                    (feature) => `
                                    <li class="mb-2">
                                        <i class="fas fa-check text-success me-2"></i>
                                        ${feature}
                                    </li>
                                `
                                  )
                                  .join("")}
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="package-price-box text-center p-4 bg-white rounded shadow-sm">
                                <button class="btn btn-${color} w-100 btn-lg mb-2"
                                        onclick="selectCustomPackage('${packageType}', '${packageName}')">
                                    <i class="fab fa-whatsapp me-2"></i>
                                    Seleccionar
                                </button>
                                <small class="text-muted d-block">
                                    <i class="fas fa-info-circle me-1"></i>
                                    Consulta disponibilidad
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para renderizar todos los paquetes
function renderPackages(service) {
  const container = document.getElementById("packages-container");
  let packagesHTML = "";
  let index = 0;

  if (service.hasPackages && service.packages) {
    Object.keys(service.packages).forEach((packageKey) => {
      const packageData = service.packages[packageKey];
      packagesHTML += createPackageHTML(packageData, packageKey, index);
      index++;
    });
  }

  container.innerHTML = packagesHTML;

  // Inicializar eventos de chevron después de renderizar
  initializeChevronEvents();
}

// Función para inicializar los eventos del chevron
function initializeChevronEvents() {
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((button) => {
    button.addEventListener("shown.bs.collapse", function () {
      const chevron = this.querySelector(".chevron-icon");
      if (chevron) {
        chevron.style.transform = "rotate(180deg)";
      }
    });

    button.addEventListener("hidden.bs.collapse", function () {
      const chevron = this.querySelector(".chevron-icon");
      if (chevron) {
        chevron.style.transform = "rotate(0deg)";
      }
    });
  });
}

// Función para manejar la selección de paquete
function selectCustomPackage(packageType, packageName) {
  let price = "";
  let serviceName = "";

  // Buscar el precio y el nombre del servicio en la estructura de datos
  Object.keys(serviceData).forEach((serviceKey) => {
    const service = serviceData[serviceKey];
    if (service.packages && service.packages[packageType]) {
      const packageData = service.packages[packageType];
      if (
        packageData.namePaquete === packageName ||
        packageData.name === packageName
      ) {
        price = packageData.price;
        serviceName = service.name;
      }
    }
  });

  const message = `¡Hola! Me interesa el paquete de ${serviceName}, ${packageName} . ¿Podrían darme más información?`;
  const whatsappURL = `https://wa.me/51978147539?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  const whatsappLink = document.getElementById("whatsapp-link");
  const serviceModal = document.getElementById("serviceModal");
  //renderPackages();
  if (whatsappLink && serviceModal) {
    whatsappLink.addEventListener("click", function (event) {
      // Evita que el navegador navegue de inmediato
      event.preventDefault();

      // Crea una instancia del modal para poder cerrarlo programáticamente
      const modalInstance = bootstrap.Modal.getInstance(serviceModal);
      if (modalInstance) {
        modalInstance.hide();
      }

      // Almacena el destino del enlace
      const targetSectionId = this.getAttribute("href");

      // Espera a que el modal esté completamente oculto antes de navegar
      serviceModal.addEventListener(
        "hidden.bs.modal",
        function () {
          window.location.href = targetSectionId;
        },
        { once: true }
      );
    });
  }
});

//empieza el cambio

// Gallery hover effects and click handlers
const galleryContainers = document.querySelectorAll(".gallery-container");

galleryContainers.forEach((container) => {
  const galleryItems = container.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      container.classList.add("paused");
      this.style.zIndex = "100";
    });

    item.addEventListener("mouseleave", function () {
      container.classList.remove("paused");
      this.style.zIndex = "1";
    });

    // Click handler for service modal
    item.addEventListener("click", function () {
      const serviceName = this.getAttribute("data-service");
      const service = serviceData[serviceName];

      if (service) {
        // Update modal content
        document.getElementById("serviceModalIcon").className = service.icon;
        document.getElementById("serviceModalName").textContent = service.name;
        document.getElementById("serviceModalDescription").textContent =
          service.description;
        renderPackages(service);
        // document.getElementById("serviceModalImage").src = service.image;
        //document.getElementById("serviceModalImage").alt = service.name;

        // Show modal
        const modal = new bootstrap.Modal(
          document.getElementById("serviceModal")
        );
        modal.show();
      }
    });
  });
});

// Tab switching animation
const tabTriggers = document.querySelectorAll("#serviceTabs button");

tabTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    // Reset any paused animations
    galleryContainers.forEach((container) => {
      container.classList.remove("paused");
    });
  });
});

// Auto-close navbar on mobile when clicking a link
const navLinks = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

// Portfolio modal
const portfolioItems = document.querySelectorAll(".portfolio-item");
const modalImage = document.getElementById("modalImage");

portfolioItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imageSrc = this.getAttribute("data-image");
    modalImage.src = imageSrc;
  });
});

// Initialize tooltips and popovers
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

//Add loading animation to images
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("load", function () {
    this.style.opacity = "1";
    this.style.transform = "scale(1)";
  });
});

//Pakage
