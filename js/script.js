// Service data with detailed information
const serviceData = {
  // Eventos
  bodas: {
    name: "Bodas",
    icon: "fas fa-rings-wedding",
    description:
      "Capturamos la magia de tu día más especial con elegancia y romanticismo. Desde la preparación de la novia hasta el último baile, documentamos cada emoción y momento único de vuestra celebración de amor.",
    features: [
      "Cobertura completa del evento (8-12 horas)",
      "Sesión de compromiso incluida",
      "Fotografía de preparativos",
      "Ceremonia y recepción",
      "Galería online privada",
      "Entrega de fotos en alta resolución",
      "Album de boda personalizado",
    ],
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  bautizos: {
    name: "Bautizos",
    icon: "fas fa-cross",
    description:
      "Momentos sagrados llenos de amor familiar. Registramos con delicadeza y respeto cada detalle de esta celebración espiritual, creando recuerdos que perduren para toda la vida.",
    features: [
      "Cobertura de la ceremonia religiosa",
      "Fotografías familiares grupales",
      "Retratos del bebé/niño",
      "Detalles decorativos y religiosos",
      "Celebración posterior",
      "Galería digital completa",
      "Impresiones de regalo",
    ],
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  quinceaneros: {
    name: "Quinceañeros",
    icon: "fas fa-crown",
    description:
      "La transición a la adultez merece ser celebrada con glamour. Creamos imágenes dignas de una princesa en su gran día, capturando la elegancia y emoción de este momento único.",
    features: [
      "Sesión pre-quinceañero",
      "Cobertura de la ceremonia religiosa",
      "Fotografía del vals y tradiciones",
      "Retratos con vestido de gala",
      "Celebración y fiesta",
      "Video highlights opcional",
      "Album de recuerdos premium",
    ],
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  graduaciones: {
    name: "Graduaciones",
    icon: "fas fa-graduation-cap",
    description:
      "El logro académico merece ser inmortalizado. Capturamos el orgullo y la alegría de este momento único, documentando el final de una etapa y el comienzo de nuevas oportunidades.",
    features: [
      "Ceremonia de graduación",
      "Retratos con toga y birrete",
      "Fotografías familiares",
      "Momentos emotivos",
      "Celebración posterior",
      "Fotos individuales y grupales",
      "Entrega rápida de fotos",
    ],
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  aniversarios: {
    name: "Aniversarios",
    icon: "fas fa-heart",
    description:
      "Celebramos el amor duradero y los años compartidos con fotografías llenas de emotividad y nostalgia. Capturamos la complicidad y cariño que solo el tiempo puede crear.",
    features: [
      "Sesión de pareja romántica",
      "Recreación de momentos especiales",
      "Fotografías familiares multigeneracionales",
      "Detalles significativos",
      "Celebración íntima",
      "Video mensaje de invitados",
      "Album de memorias personalizado",
    ],
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  corporativos: {
    name: "Eventos Corporativos",
    icon: "fas fa-building",
    description:
      "Eventos empresariales documentados con profesionalismo. Creamos contenido visual para tu marca, capturando la esencia de tu empresa y fortaleciendo su imagen corporativa.",
    features: [
      "Cobertura de conferencias y presentaciones",
      "Fotografía de networking",
      "Retratos ejecutivos",
      "Detalles de branding",
      "Entrega inmediata para redes sociales",
      "Galería corporativa",
      "Derechos comerciales incluidos",
    ],
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  // Sesiones
  cumpleanos: {
    name: "Cumpleaños",
    icon: "fas fa-birthday-cake",
    description:
      "Celebra otro año de vida con sesiones divertidas y llenas de personalidad para todas las edades. Desde fiestas infantiles hasta celebraciones de adultos, cada edad tiene su encanto especial.",
    features: [
      "Sesión temática personalizada",
      "Fotografía de la celebración",
      "Retratos del cumpleañero",
      "Momentos espontáneos y risas",
      "Detalles de decoración",
      "Fotos grupales con invitados",
      "Galería digital completa",
    ],
    image:
      "https://images.unsplash.com/photo-1530019403633-bd711b5f1ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  grupales: {
    name: "Sesiones Grupales",
    icon: "fas fa-users",
    description:
      "Amigos, familia o compañeros. Capturamos la química única entre las personas que más quieres, creando recuerdos grupales llenos de complicidad y diversión.",
    features: [
      "Sesión en locación de su elección",
      "Fotos espontáneas y posadas",
      "Retratos individuales de cada miembro",
      "Composiciones creativas grupales",
      "Ambiente relajado y divertido",
      "Múltiples cambios de vestuario",
      "Edición profesional personalizada",
    ],
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  profesionales: {
    name: "Retratos Profesionales",
    icon: "fas fa-user-tie",
    description:
      "Perfectos para LinkedIn, redes sociales o uso corporativo. Proyecta profesionalismo con imágenes de alta calidad que reflejen tu personalidad y competencia profesional.",
    features: [
      "Múltiples looks y outfits",
      "Fondos neutros y corporativos",
      "Iluminación profesional de estudio",
      "Retoque digital premium",
      "Formatos optimizados para redes",
      "Sesión de 1 hora",
      "Entrega en 48 horas",
    ],
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  artisticos: {
    name: "Retratos Artísticos",
    icon: "fas fa-palette",
    description:
      "Sesiones creativas que exploran tu personalidad única con conceptos artísticos innovadores. Fotografía que trasciende lo convencional para crear arte visual personalizado.",
    features: [
      "Concepto artístico personalizado",
      "Iluminación creativa y experimental",
      "Props y elementos conceptuales",
      "Edición artística avanzada",
      "Múltiples estilos y looks",
      "Sesión extendida de 2 horas",
      "Obra de arte impresa incluida",
    ],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  maternidad: {
    name: "Maternidad",
    icon: "fas fa-baby",
    description:
      "La dulce espera merece ser documentada. Capturamos la belleza y emoción del embarazo, creando recuerdos tiernos de este momento tan especial antes de la llegada del bebé.",
    features: [
      "Sesión en estudio o exterior",
      "Poses elegantes y naturales",
      "Incluye a la pareja",
      "Props temáticos de maternidad",
      "Iluminación suave y favorecedora",
      "Sesión de seguimiento newborn opcional",
      "Album de recuerdos premium",
    ],
    image:
      "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  mascotas: {
    name: "Fotografía de Mascotas",
    icon: "fas fa-paw",
    description:
      "Nuestros compañeros peludos también merecen ser inmortalizados con fotografías llenas de amor. Capturamos su personalidad única y la conexión especial que tienes con ellos.",
    features: [
      "Sesión adaptada al carácter de la mascota",
      "Locación familiar y cómoda",
      "Retratos individuales y con familia",
      "Juegos y momentos naturales",
      "Props y juguetes temáticos",
      "Paciencia y experiencia con animales",
      "Galería digital divertida",
    ],
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
        block: "nearest",
      });
    }
  });
});

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
        document.getElementById("serviceModalImage").src = service.image;
        document.getElementById("serviceModalImage").alt = service.name;

        // Update features list
        const featuresList = document.getElementById("serviceModalFeatures");
        featuresList.innerHTML = "";
        service.features.forEach((feature) => {
          const li = document.createElement("li");
          li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
          featuresList.appendChild(li);
        });

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


// Portfolio modal
const portfolioItems = document.querySelectorAll(".portfolio-item");
const modalImage = document.getElementById("modalImage");

portfolioItems.forEach((item) => {
  item.addEventListener("click", function () {
    const imageSrc = this.getAttribute("data-image");
    modalImage.src = imageSrc;
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease forwards";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".about-card, .service-card, .portfolio-item, .contact-card"
  )
  .forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    observer.observe(card);
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

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero-carousel");
  const speed = scrolled * 0.5;

  if (parallax) {
    parallax.style.transform = `translateY(${speed}px)`;
  }
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

document.addEventListener('DOMContentLoaded', function () {
  const whatsappLink = document.getElementById('whatsapp-link');
  const serviceModal = document.getElementById('serviceModal');

  whatsappLink.addEventListener('click', function(event) {
    // Evita que el navegador navegue de inmediato
    event.preventDefault();

    // Crea una instancia del modal para poder cerrarlo programáticamente
    const modalInstance = bootstrap.Modal.getInstance(serviceModal);
    if (modalInstance) {
      modalInstance.hide();
    }

    // Almacena el destino del enlace
    const targetSectionId = this.getAttribute('href');

    // Espera a que el modal esté completamente oculto antes de navegar
    serviceModal.addEventListener('hidden.bs.modal', function() {
      window.location.href = targetSectionId;
    }, { once: true });
  });
});