import { getEventosImages, getSesionesImages } from './galleryLoader.js'

const eventosGallery = {
  bodas: getEventosImages('bodas'),
  bautizos: getEventosImages('bautizos'),
  quinceaneros: getEventosImages('quinceaneros'),
  aniversarios: getEventosImages('aniversarios'),
  graduaciones: getEventosImages('graduaciones'),
  corporativos: getEventosImages('corporativos'),
}

const sesionesGallery = {
  individual: getSesionesImages('individual'),
  grupal: getSesionesImages('grupal'),
  maternidad: getSesionesImages('maternidad'),
  artistica: getSesionesImages('artistica'),
  cumpleanos: getSesionesImages('cumpleanos'),
}

function getGallery(key, category, defaults) {
  const gallery = category === 'evento' ? eventosGallery[key] : sesionesGallery[key]
  return gallery && gallery.length > 0 ? gallery : defaults
}

export const serviceData = {
  bodas: {
    name: 'Bodas',
    icon: 'fas fa-ring',
    category: 'evento',
    cover: '/img/BODAS_min.jpg',
    description:
      'Capturamos la magia de tu día más especial con elegancia y romanticismo. Desde la preparación de la novia hasta el último baile, documentamos cada emoción y momento único de vuestra celebración de amor.',
    gallery: getGallery('bodas', 'evento', [
      '/img/BODAS.jpg',
      '/img/BODAS_min.jpg',
      '/img/trabajo1.jpg',
      '/img/trabajo2.jpg',
      '/img/trabajo3.jpg',
      '/img/portada.jpg',
    ]),
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: 'Básico',
        price: 150,
        duration: '1 hora',
        photos: 'Fotos sin editar',
        features: ['Fotografía de evento sin edición.', 'Video de evento 1 hora en Full HD'],
      },
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '2 horas',
        photos: '15 fotos editadas',
        features: [
          'Sesión Pre - Boda, 15 fotografías con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento - 1 hora y 30 minutos en Full HD.',
          'Cuadro Foto Firma',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: '25 fotos retoque Profesional',
        features: [
          'Sesión Pre - Boda, 15 fotografías con retoque profesional.',
          'Fotografía Makeup',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento editado - 1 hora y 30 minutos en 4K.',
          'Video highlight de 3 a 5 minutos en 4K.',
          'Cuadro Foto Firma',
          '100 Fotos Impresas 10x15',
        ],
      },
    },
  },
  bautizos: {
    name: 'Bautizos',
    icon: 'fas fa-cross',
    category: 'evento',
    cover: '/img/Bautizo.jpg',
    description:
      'Momentos sagrados y emotivos capturados con delicadeza y respeto. Documentamos este día tan especial para toda la familia con sensibilidad y profesionalismo.',
    gallery: getGallery('bautizos', 'evento', [
      '/img/Bautizo.jpg',
      '/img/trabajo4.jpg',
      '/img/trabajo5.jpg',
      '/img/trabajo6.jpg',
      '/img/portada1.jpg',
    ]),
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: 'Básico',
        price: 250,
        duration: '2 horas',
        photos: 'Fotos sin editar',
        features: ['Fotografía de evento sin edición', 'Video de evento - 1 hora Full HD.'],
      },
      standard: {
        namePaquete: 'Estándar',
        price: 400,
        duration: '4 horas',
        photos: '15 fotos editadas',
        features: [
          'Sesión Pre - Bautizo, 15 fotografías con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento - 1 hora y 30 minutos en Full HD.',
          'Cuadro Foto Firma',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 600,
        duration: '6 horas',
        photos: '20 fotos editadas',
        features: [
          'Sesión Pre - Bautizo, 20 fotos con retoque profesional.',
          'Fotografía Makeup',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento editado de 1 hora y 30 minutos en 4K.',
          'Video highlights de 3 a 5 minutos en 4K.',
          'Cuadro Foto Firma',
          '100 fotos impresas 10x15.',
        ],
      },
    },
  },
  quinceaneros: {
    name: 'Quinceañeros',
    icon: 'fas fa-crown',
    category: 'evento',
    cover: '/img/QUINCEAÑEROS_min.jpg',
    description:
      'Capturamos la esencia de tu celebración con un enfoque fresco y vibrante. Desde la sesión previa hasta el baile, documentamos cada detalle de tu transición a la adultez.',
    gallery: getGallery('quinceaneros', 'evento', [
      '/img/QUINCEAÑEROS.jpg',
      '/img/QUINCEAÑEROS_min.jpg',
      '/img/trabajo7.jpg',
      '/img/trabajo8.jpg',
      '/img/portada2.jpg',
    ]),
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: 'Básico',
        price: 150,
        duration: '1 hora',
        photos: 'Fotos sin editar',
        features: ['Fotografía de evento sin edición.', 'Video de evento - 1 hora en Full HD.'],
      },
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '2 horas',
        photos: '15 fotos editadas',
        features: [
          'Sesión Pre - 15 años, 15 fotografías con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento - 1 hora y 30 minutos en Full HD.',
          'Cuadro Foto Firma',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: '20 fotos editadas',
        features: [
          'Sesión Pre - 15 años, 20 fotografías con retoque profesional.',
          'Fotografía Makeup',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento editado - 1 hora y 30 minutos en 4K.',
          'Video highlight - 3 a 5 minutos en 4K.',
          'Cuadro Foto Firma',
          '100 Fotos Impresas 10x15',
        ],
      },
    },
  },
  graduaciones: {
    name: 'Graduaciones',
    icon: 'fas fa-graduation-cap',
    category: 'evento',
    cover: '/img/GRADUACIONES_min.jpg',
    description:
      'Capturamos el orgullo y la alegría de tu graduación con un estilo profesional y dinámico. Desde la ceremonia hasta la celebración, documentamos cada logro y emoción.',
    gallery: getGallery('graduaciones', 'evento', [
      '/img/GRADUACIONES.jpg',
      '/img/GRADUACIONES_min.jpg',
      '/img/trabajo9.jpg',
      '/img/trabajo10.jpg',
      '/img/portada3.jpg',
    ]),
    hasPackages: true,
    packages: {
      basico: {
        namePaquete: 'Básico',
        price: 150,
        duration: '1 hora',
        photos: 'Fotos editadas',
        features: ['Fotografía de evento con retoque profesional.', 'Video de evento.'],
      },
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '2 horas',
        photos: 'Fotos editadas',
        features: [
          'Sesión fotográfica con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento Full HD.',
          'USB + 15 fotos impresas 10x15',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: 'Fotos editadas',
        features: [
          'Sesión fotográfica con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento Full HD',
          'USB + 15 fotos impresas 10x15',
          'Cuadro',
        ],
      },
    },
  },
  aniversarios: {
    name: 'Aniversarios',
    icon: 'fas fa-heart',
    category: 'evento',
    cover: '/img/Aniversarios_min.jpg',
    description:
      'Capturamos la esencia de vuestro amor con un enfoque romántico y personalizado. Desde una cena íntima hasta una celebración grandiosa, documentamos cada momento especial.',
    gallery: getGallery('aniversarios', 'evento', [
      '/img/Aniversarios_min.jpg',
      '/img/trabajo11.jpg',
      '/img/trabajo12.jpg',
      '/img/portada.jpg',
      '/img/principal.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '2 horas',
        photos: '15 fotos editadas',
        features: [
          'Sesión Cumpleaños, 15 fotografías con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video evento - 1 hora y 30 minutos en Full HD.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: '20 fotos editadas',
        features: [
          'Sesión Cumpleaños, 20 fotografías con retoque profesional.',
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video editado de 1 hora y 30 minutos en Full HD.',
          'Video highlights - 3 a 5 minutos en Full HD.',
          'Cuadro Foto Firma',
        ],
      },
    },
  },
  corporativos: {
    name: 'Eventos Corporativos',
    icon: 'fas fa-building',
    category: 'evento',
    cover: '/img/CORPORATIVOS_min.jpg',
    description:
      'Capturamos la profesionalidad y el dinamismo de vuestros eventos empresariales. Desde conferencias hasta lanzamientos de productos, documentamos cada aspecto con elegancia.',
    gallery: getGallery('corporativos', 'evento', [
      '/img/CORPORATIVOS.jpg',
      '/img/CORPORATIVOS_min.jpg',
      '/img/trabajo1.jpg',
      '/img/trabajo5.jpg',
      '/img/trabajo9.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '2 horas',
        photos: 'Fotos con retoque profesional',
        features: [
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video de evento - 30 minutos en Full HD.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: 'Fotos con retoque profesional',
        features: [
          'Fotografía de evento con retoque de color, luces y sombras.',
          'Video editado - 1 hora en Full HD.',
          'Video highlights - 3 a 5 minutos en Full HD.',
        ],
      },
    },
  },
  cumpleanos: {
    name: 'Cumpleaños',
    icon: 'fas fa-birthday-cake',
    category: 'sesion',
    cover: '/img/SESIÓN CUMPLEAÑOS_min.jpg',
    description:
      'Capturamos la alegría y la diversión de tu celebración con un enfoque fresco y vibrante. Desde la decoración hasta los momentos más emotivos, documentamos cada detalle.',
    gallery: getGallery('cumpleanos', 'sesion', [
      '/img/SESIÓN CUMPLEAÑOS_.jpg',
      '/img/SESIÓN CUMPLEAÑOS_min.jpg',
      '/img/trabajo2.jpg',
      '/img/trabajo6.jpg',
      '/img/trabajo10.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '1 hora',
        photos: '15 fotos editadas',
        features: [
          '45 minutos de sesión',
          '1 outfit',
          '15 fotos con edición + originales.',
          'En exteriores o estudio.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: '20 fotos editadas',
        features: [
          '1 hora de sesión.',
          'Hasta 3 outfits',
          '20 fotos con edición + originales.',
          '20 fotos impresas 10x15 cm',
          'En exteriores o estudio.',
        ],
      },
    },
  },
  grupales: {
    name: 'Sesiones Grupales',
    icon: 'fas fa-users',
    category: 'sesion',
    cover: '/img/SESIÓN GRUPAL_min.jpg',
    description:
      'Capturamos la esencia de tu grupo con un enfoque dinámico y divertido. Desde amigos hasta familias, documentamos cada interacción y emoción en un ambiente relajado.',
    gallery: getGallery('grupal', 'sesion', [
      '/img/SESIÓN GRUPAL.jpg',
      '/img/SESIÓN GRUPAL_min.jpg',
      '/img/trabajo3.jpg',
      '/img/trabajo7.jpg',
      '/img/trabajo11.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '2 horas',
        photos: '15 fotos editadas',
        features: [
          '2 a 5 personas',
          '1 hora de sesión',
          '1 outfit',
          '15 fotos con edición + originales.',
          'En exteriores o estudio.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '3 horas',
        photos: '20 fotos editadas',
        features: [
          '6 a 12 personas',
          '1 hora y 30 minutos de sesión.',
          'Hasta 2 outfit',
          '20 fotos con edición + originales.',
          '20 fotos impresas 10x15 cm',
          'En exteriores o estudio.',
        ],
      },
    },
  },
  individuales: {
    name: 'Retratos Individuales',
    icon: 'fas fa-user-tie',
    category: 'sesion',
    cover: '/img/SESIÓN INDIVIDUAL_min.jpg',
    description:
      'Capturamos tu imagen con un enfoque profesional y elegante. Desde retratos corporativos hasta sesiones de marca personal, documentamos tu esencia con estilo y sofisticación.',
    gallery: getGallery('individual', 'sesion', [
      '/img/SESIÓN INDIVIDUAL.jpg',
      '/img/SESIÓN INDIVIDUAL_min.jpg',
      '/img/trabajo4.jpg',
      '/img/trabajo8.jpg',
      '/img/trabajo12.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '45 minutos',
        photos: '15 fotos editadas',
        features: [
          'Sesión de 45 minutos.',
          '1 Outfit',
          '15 fotos con edición + originales',
          'En exteriores o estudio.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '1 hora',
        photos: '20 fotos editadas',
        features: [
          '1 hora de sesión.',
          'Hasta 3 Oufits',
          '20 fotos con edición + originales',
          '20 fotos impresas de 10x15',
          'En exteriores o estudio.',
        ],
      },
    },
  },
  artisticos: {
    name: 'Retratos Artísticos',
    icon: 'fas fa-palette',
    category: 'sesion',
    cover: '/img/SESIÓN ARTÍSTICA_min.jpg',
    description:
      'Capturamos tu esencia con un enfoque creativo y único. Desde retratos conceptuales hasta sesiones de moda, documentamos tu personalidad con un estilo artístico y distintivo.',
    gallery: getGallery('artistica', 'sesion', [
      '/img/SESIÓN ARTÍSTICA.jpg',
      '/img/SESIÓN ARTÍSTICA_min.jpg',
      '/img/trabajo1.jpg',
      '/img/trabajo5.jpg',
      '/img/trabajo9.jpg',
      '/img/portada3.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '45 minutos',
        photos: '15 fotos editadas',
        features: [
          'Sesión de 45 minutos',
          '1 Outfit',
          '15 fotos con edición + originales',
          'En exteriores o estudio.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '1 hora',
        photos: '20 fotos editadas',
        features: [
          'Sesión de 1 hora',
          'Hasta 3 Oufit',
          '20 fotos con edición + originales',
          '1 fotografía de 30x45 cm.',
          'En exteriores o estudio.',
        ],
      },
    },
  },
  maternidad: {
    name: 'Maternidad',
    icon: 'fas fa-baby',
    category: 'sesion',
    cover: '/img/SESIÓN MATERNIDAD_min.jpg',
    description:
      'Capturamos la belleza y la emoción de la espera con un enfoque cálido y acogedor. Desde sesiones íntimas hasta retratos familiares, documentamos cada momento especial.',
    gallery: getGallery('maternidad', 'sesion', [
      '/img/SESIÓN MATERNIDAD.jpg',
      '/img/SESIÓN MATERNIDAD_min.jpg',
      '/img/trabajo2.jpg',
      '/img/trabajo6.jpg',
      '/img/trabajo10.jpg',
    ]),
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '45 minutos',
        photos: '15 fotos editadas',
        features: [
          'Sesión de 45 minutos.',
          '15 fotos con edición + originales',
          'En exteriores o estudio.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '1 hora',
        photos: '20 fotos editadas',
        features: [
          'Sesión de 1 hora',
          '1 vestido',
          '20 fotos con edición + originales',
          '1 fotografía 30x45 cm',
          'En exteriores o estudio.',
        ],
      },
    },
  },
  mascotas: {
    name: 'Fotografía de Mascotas',
    icon: 'fas fa-paw',
    category: 'sesion',
    cover: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    description:
      'Capturamos la esencia y personalidad de tus animales con un enfoque divertido y creativo. Desde sesiones en estudio hasta aventuras al aire libre, documentamos cada momento especial.',
    gallery: [
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    hasPackages: true,
    packages: {
      standard: {
        namePaquete: 'Estándar',
        price: 250,
        duration: '45 minutos',
        photos: '15 fotos editadas',
        features: [
          'Sesión de 45 minutos.',
          '15 fotos con edición + originales.',
          'En exteriores.',
        ],
      },
      premium: {
        namePaquete: 'Premium',
        price: 400,
        duration: '1 hora',
        photos: '20 fotos editadas',
        features: [
          'Sesión de 1 hora.',
          '20 fotos con edición + originales.',
          '1 fotografía de 30x45 cm.',
          'En exteriores o estudio.',
        ],
      },
    },
  },
}
