<template>
  <section id="contacto" class="section contact">
    <div class="container">
      <h2 class="section-title reveal">Contáctanos</h2>

      <div class="contact-grid">
        <div
          v-for="(card, index) in contactCards"
          :key="card.title"
          class="contact-card reveal"
          :class="'reveal-delay-' + (index + 1)"
        >
          <div class="contact-card-icon">
            <i :class="card.icon"></i>
          </div>
          <h4 class="contact-card-title">{{ card.title }}</h4>
          <p class="contact-card-text" v-html="card.text"></p>

          <a
            v-if="card.btnText === 'WhatsApp'"
            :href="card.link"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card-btn btn-whatsapp"
          >
            <i class="fab fa-whatsapp"></i>
            WhatsApp
          </a>

          <a
            v-if="card.btnText === 'Escribir'"
            href="mailto:jcstudios28@gmail.com?subject=Consulta%20JC%20Studios"
            class="contact-card-btn btn-email"
          >
            <i class="fas fa-paper-plane"></i>
            Escribir
          </a>
        </div>
      </div>

      <div class="social-section reveal reveal-delay-2">
        <p class="social-label">Síguenos en Redes Sociales</p>
        <div class="social-links">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="social-link"
            :class="'social-' + social.name"
            :title="social.name"
          >
            <i :class="social.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactCards = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Dirección',
    text: 'Jr. Ponciano Vigil 830<br/>Chota - Cajamarca<br/>Código Postal: 06121',
    link: null,
    btnClass: '',
    btnIcon: '',
    btnText: '',
    isExternal: false,
    isEmail: false,
  },
  {
    icon: 'fas fa-phone-alt',
    title: 'Teléfono',
    text: '+51 978 147 539',
    link: 'https://wa.me/51978147539',
    btnClass: 'btn-whatsapp',
    btnIcon: 'fab fa-whatsapp',
    btnText: 'WhatsApp',
    isExternal: true,
    isEmail: false,
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    text: 'jcstudios28@gmail.com<br/>jhonatancabreraphotography@gmail.com',
    link: null,
    btnClass: '',
    btnIcon: '',
    btnText: '',
    isExternal: false,
    isEmail: false,
  },
]

const socials = [
  { name: 'facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/Jhonatancabreraphotography' },
  { name: 'instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/jhonatancabrera_photography' },
  { name: 'youtube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@jcstudiosperu' },
  { name: 'tiktok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@jhonatancabrerafotografo' },
]
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto 3rem;
}

.contact-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  transform: scaleX(0);
  transition: transform 0.35s ease;
  transform-origin: left;
  z-index: -1;
  pointer-events: none;
}

.contact-card:hover::before {
  transform: scaleX(1);
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(227, 5, 18, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
  border-color: rgba(227, 5, 18, 0.15);
}

.contact-card-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(227, 5, 18, 0.1), rgba(35, 53, 89, 0.08));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem;
  transition: all 0.35s ease;
}

.contact-card:hover .contact-card-icon {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  transform: scale(1.1) rotate(5deg);
}

.contact-card-icon i {
  font-size: 1.5rem;
  color: var(--primary-color);
  transition: color 0.35s ease;
}

.contact-card:hover .contact-card-icon i {
  color: white;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.2));
}

.contact-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.7rem;
}

.contact-card-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.contact-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.3rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-whatsapp {
  background: #25d366;
  color: white;
}

.btn-whatsapp:hover {
  background: #1da851;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.35);
  color: white;
}

.btn-email {
  background: var(--secondary-color);
  color: white;
}

.btn-email:hover {
  background: #1a2744;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(35, 53, 89, 0.35);
  color: white;
}

/* Social */
.social-section {
  text-align: center;
}

.social-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  letter-spacing: 0.5px;
}

.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-link {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.social-link:hover::before {
  opacity: 1;
}

.social-link:hover {
  transform: translateY(-5px) scale(1.08);
}

.social-facebook { background: linear-gradient(135deg, #1877f2, #0d65d9); }
.social-facebook:hover { box-shadow: 0 8px 24px rgba(24, 119, 242, 0.4); }

.social-instagram { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.social-instagram:hover { box-shadow: 0 8px 24px rgba(220, 39, 67, 0.4); }

.social-youtube { background: linear-gradient(135deg, #ff0000, #cc0000); }
.social-youtube:hover { box-shadow: 0 8px 24px rgba(255, 0, 0, 0.4); }

.social-tiktok { background: linear-gradient(135deg, #010101, #333); }
.social-tiktok:hover { box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4); }

@keyframes contactFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991.98px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  .contact-card:nth-child(3) {
    grid-column: span 2;
    max-width: 400px;
    justify-self: center;
  }
}

@media (max-width: 576px) {
  .contact-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 1rem;
  }

  .contact-card:nth-child(3) {
    grid-column: span 1;
    max-width: none;
  }

  .contact-card {
    padding: 1.5rem 1.2rem;
  }

  .contact-card-icon {
    width: 56px;
    height: 56px;
  }

  .contact-card-icon i {
    font-size: 1.3rem;
  }

  .social-link {
    width: 46px;
    height: 46px;
    font-size: 1.1rem;
    border-radius: 12px;
  }
}
</style>
