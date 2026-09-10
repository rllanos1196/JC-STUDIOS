import { getServicePhotos, getServiceCover } from './galleryLoader.js'

/**
 * Catalogo de servicios.
 *
 * Las imagenes NO se declaran aqui: cada servicio apunta a su carpeta con
 * `folder` y galleryLoader resuelve portada y galeria leyendo
 * public/img/gallery/<categoria>/<folder>/. Para cambiar las fotos de un
 * servicio se agregan o quitan archivos de esa carpeta, nada mas.
 */
const CATEGORY_DIRS = { evento: 'eventos', sesion: 'sesiones' }

const serviceDefinitions = {
  bodas: {
    name: 'Bodas',
    icon: 'fas fa-ring',
    category: 'evento',
    description:
      'Capturamos la magia de tu día más especial con elegancia y romanticismo. Desde la preparación de la novia hasta el último baile, documentamos cada emoción y momento único de vuestra celebración de amor.',
    folder: 'bodas',
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
    description:
      'Momentos sagrados y emotivos capturados con delicadeza y respeto. Documentamos este día tan especial para toda la familia con sensibilidad y profesionalismo.',
    folder: 'bautizos',
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
    description:
      'Capturamos la esencia de tu celebración con un enfoque fresco y vibrante. Desde la sesión previa hasta el baile, documentamos cada detalle de tu transición a la adultez.',
    folder: 'quinceaneros',
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
    description:
      'Capturamos el orgullo y la alegría de tu graduación con un estilo profesional y dinámico. Desde la ceremonia hasta la celebración, documentamos cada logro y emoción.',
    folder: 'graduaciones',
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
    description:
      'Capturamos la esencia de vuestro amor con un enfoque romántico y personalizado. Desde una cena íntima hasta una celebración grandiosa, documentamos cada momento especial.',
    folder: 'aniversarios',
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
    description:
      'Capturamos la profesionalidad y el dinamismo de vuestros eventos empresariales. Desde conferencias hasta lanzamientos de productos, documentamos cada aspecto con elegancia.',
    folder: 'corporativos',
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
    description:
      'Capturamos la alegría y la diversión de tu celebración con un enfoque fresco y vibrante. Desde la decoración hasta los momentos más emotivos, documentamos cada detalle.',
    folder: 'cumpleanos',
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
    description:
      'Capturamos la esencia de tu grupo con un enfoque dinámico y divertido. Desde amigos hasta familias, documentamos cada interacción y emoción en un ambiente relajado.',
    folder: 'grupal',
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
    description:
      'Capturamos tu imagen con un enfoque profesional y elegante. Desde retratos corporativos hasta sesiones de marca personal, documentamos tu esencia con estilo y sofisticación.',
    folder: 'individual',
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
    description:
      'Capturamos tu esencia con un enfoque creativo y único. Desde retratos conceptuales hasta sesiones de moda, documentamos tu personalidad con un estilo artístico y distintivo.',
    folder: 'artistica',
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
    description:
      'Capturamos la belleza y la emoción de la espera con un enfoque cálido y acogedor. Desde sesiones íntimas hasta retratos familiares, documentamos cada momento especial.',
    folder: 'maternidad',
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
    description:
      'Capturamos la esencia y personalidad de tus animales con un enfoque divertido y creativo. Desde sesiones en estudio hasta aventuras al aire libre, documentamos cada momento especial.',
    folder: 'mascotas',
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

/**
 * Resuelve cada definicion a un servicio listo para la UI:
 *   cover   -> miniatura para la tarjeta de la grilla
 *   gallery -> fotos { full, thumb } para el modal y el lightbox
 */
function resolveService(key, def) {
  const dir = CATEGORY_DIRS[def.category]
  const folder = def.folder || key
  const photos = dir ? getServicePhotos(dir, folder) : []
  const cover = dir ? getServiceCover(dir, folder) : null

  return {
    ...def,
    folder,
    photos,
    gallery: photos,
    cover: cover ? cover.thumb : '',
    coverFull: cover ? cover.full : '',
    hasGallery: photos.length > 0,
  }
}

export const serviceData = Object.fromEntries(
  Object.entries(serviceDefinitions).map(([key, def]) => [key, resolveService(key, def)])
)

export { serviceDefinitions }
export default serviceData
