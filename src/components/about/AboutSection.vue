<template>
  <section id="nosotros" class="section">
    <div class="container">
      <h2 class="section-title reveal">Nosotros</h2>
      <div class="about-grid">
        <div
          v-for="(card, index) in aboutCards"
          :key="card.title"
          class="about-card reveal"
          :class="['about-card--' + card.color, 'reveal-delay-' + (index + 1)]"
        >
          <div class="about-card-glow"></div>
          <div class="about-card-content">
            <div class="about-icon-wrapper">
              <i :class="card.icon" class="about-icon"></i>
            </div>
            <h3 class="about-title">{{ card.title }}</h3>
            <p class="about-text">{{ card.text }}</p>
            <p v-if="card.author" class="about-author">{{ card.author }}</p>
          </div>
          <div class="about-card-border"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const yearsExperience = new Date().getFullYear() - 2019

const aboutCards = [
  {
    icon: 'fas fa-users',
    title: 'Quiénes Somos',
    text: `Somos un equipo de fotógrafos profesionales apasionados por capturar la esencia de cada momento especial. Con más de ${yearsExperience} años de experiencia, hemos desarrollado un estilo único que combina técnica profesional con creatividad artística.`,
    author: '- Jhonatan Cabrera Fotógrafo -',
    color: 'red',
  },
  {
    icon: 'fas fa-eye',
    title: 'Nuestra Visión',
    text: 'Ser reconocidos como el estudio fotográfico líder en el norte del Perú, creando imágenes que trasciendan el tiempo y se conviertan en tesoros familiares que pasen de generación en generación.',
    author: null,
    color: 'blue',
  },
  {
    icon: 'fas fa-heart',
    title: 'Nuestra Misión',
    text: 'Brindar servicios fotográficos de la más alta calidad, capturando emociones auténticas y creando recuerdos inolvidables que nuestros clientes atesorarán para toda la vida.',
    author: null,
    color: 'gold',
  },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.about-card {
  position: relative;
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  overflow: hidden;
  cursor: default;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, background 0.3s ease;
  box-shadow: var(--shadow-md);
}

.about-card:hover {
  transform: translateY(-12px);
  box-shadow: var(--shadow-lg);
}

.about-card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.about-card:hover .about-card-glow {
  opacity: 1;
}

.about-card--red .about-card-glow {
  background: radial-gradient(circle, rgba(227, 5, 18, 0.06) 0%, transparent 60%);
}

.about-card--blue .about-card-glow {
  background: radial-gradient(circle, rgba(29, 113, 184, 0.06) 0%, transparent 60%);
}

.about-card--gold .about-card-glow {
  background: radial-gradient(circle, rgba(218, 165, 32, 0.06) 0%, transparent 60%);
}

.about-card-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 0 0 20px 20px;
  transition: height 0.4s ease;
}

.about-card:hover .about-card-border {
  height: 6px;
}

.about-card--red .about-card-border {
  background: linear-gradient(90deg, #e30512, #ff4757);
}

.about-card--blue .about-card-border {
  background: linear-gradient(90deg, #233559, #1d71b8);
}

.about-card--gold .about-card-border {
  background: linear-gradient(90deg, #daa520, #f0c040);
}

.about-card-content {
  position: relative;
  z-index: 1;
}

.about-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-card:hover .about-icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.about-card--red .about-icon-wrapper {
  background: linear-gradient(135deg, rgba(227, 5, 18, 0.1), rgba(227, 5, 18, 0.05));
}

.about-card--blue .about-icon-wrapper {
  background: linear-gradient(135deg, rgba(35, 53, 89, 0.1), rgba(35, 53, 89, 0.05));
}

.about-card--gold .about-icon-wrapper {
  background: linear-gradient(135deg, rgba(218, 165, 32, 0.1), rgba(218, 165, 32, 0.05));
}

.about-card:hover .about-icon-wrapper {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.about-icon {
  font-size: 2rem;
  transition: transform 0.4s ease;
}

.about-card--red .about-icon { color: #e30512; }
.about-card--blue .about-icon { color: #233559; }
.about-card--gold .about-icon { color: #daa520; }

[data-theme="dark"] .about-card--red .about-icon { color: #ff4d5a; }
[data-theme="dark"] .about-card--blue .about-icon { color: #6da5e0; }
[data-theme="dark"] .about-card--gold .about-icon { color: #f0c040; }

[data-theme="dark"] .about-card--red .about-icon-wrapper {
  background: linear-gradient(135deg, rgba(227, 5, 18, 0.2), rgba(227, 5, 18, 0.08));
}
[data-theme="dark"] .about-card--blue .about-icon-wrapper {
  background: linear-gradient(135deg, rgba(109, 165, 224, 0.2), rgba(109, 165, 224, 0.08));
}
[data-theme="dark"] .about-card--gold .about-icon-wrapper {
  background: linear-gradient(135deg, rgba(240, 192, 64, 0.2), rgba(240, 192, 64, 0.08));
}

[data-theme="dark"] .about-text {
  color: #c8c8da;
}

[data-theme="dark"] .about-author {
  color: #8888a0;
}

.about-card:hover .about-icon {
  transform: scale(1.15);
}

.about-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.06);
}

.about-card--red .about-title { color: #d10410; }
.about-card--blue .about-title { color: #4a7ab5; }
.about-card--gold .about-title { color: #c9940a; }

[data-theme="dark"] .about-card--blue .about-title { color: #6da5e0; }

.about-text {
  font-size: 0.95rem;
  color: #444444;
  line-height: 1.7;
  margin-bottom: 1rem;
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.03);
}

.about-author {
  font-size: 0.85rem;
  color: #777777;
  text-align: right;
  font-style: italic;
  margin: 0;
}

@keyframes cardSlideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 991.98px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .about-card:nth-child(3) {
    grid-column: span 2;
    max-width: 500px;
    justify-self: center;
  }
}

@media (max-width: 576px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 400px;
  }

  .about-card {
    padding: 2rem 1.5rem;
  }

  .about-card:nth-child(3) {
    grid-column: span 1;
    max-width: none;
  }

  .about-icon-wrapper {
    width: 65px;
    height: 65px;
  }

  .about-icon {
    font-size: 1.6rem;
  }

  .about-title {
    font-size: 1.1rem;
  }

  .about-text {
    font-size: 0.88rem;
  }
}
</style>
