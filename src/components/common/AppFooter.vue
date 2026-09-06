<template>
  <footer class="site-footer">
    <div class="container">
      <p>&copy; {{ currentYear }} JC STUDIOS. Todos los derechos reservados.</p>
      <p>Creando recuerdos únicos desde 2019</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  padding: 2rem 0;
  background: #111;
  color: white;
  text-align: center;
  transition: background 0.3s ease;
}
</style>
