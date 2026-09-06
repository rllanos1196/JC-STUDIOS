<template>
  <div class="services-admin">
    <h1 class="mb-4 page-title">Gestión de Servicios y Paquetes</h1>

    <div class="card mb-4 admin-card">
      <div class="card-body">
        <p class="info-text">
          Los servicios y paquetes se gestionan desde el archivo de datos.
          Para conectar con una base de datos, edita <code>src/services/serviceData.js</code> y los stores correspondientes.
        </p>
      </div>
    </div>

    <div v-for="(service, key) in servicesStore.services" :key="key" class="card mb-3 admin-card">
      <div class="card-header d-flex justify-content-between align-items-center">
        <div>
          <i :class="service.icon" class="me-2"></i>
          <strong>{{ service.name }}</strong>
          <span class="badge bg-secondary ms-2">{{ service.category }}</span>
        </div>
        <span class="badge bg-info">{{ Object.keys(service.packages).length }} paquetes</span>
      </div>
      <div class="card-body">
        <p class="info-text small">{{ service.description }}</p>
        <div class="table-responsive">
          <table class="table table-sm admin-table">
            <thead>
              <tr>
                <th>Paquete</th>
                <th>Precio</th>
                <th>Duración</th>
                <th>Fotos</th>
                <th>Features</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pkg, pkgKey) in service.packages" :key="pkgKey">
                <td><strong>{{ pkg.namePaquete }}</strong></td>
                <td>S/. {{ pkg.price }}</td>
                <td>{{ pkg.duration }}</td>
                <td>{{ pkg.photos }}</td>
                <td>{{ pkg.features.length }} items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useServicesStore } from '@/stores/services.js'
const servicesStore = useServicesStore()
</script>

<style scoped>
.page-title {
  color: var(--text-primary);
}

.admin-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.card-header {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.card-title {
  color: var(--text-primary);
}

.info-text {
  color: var(--text-muted);
}

.admin-card code {
  background: var(--input-bg);
  color: var(--primary-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.85rem;
}

.admin-table th {
  color: var(--text-secondary);
  border-color: var(--border-color);
}

.admin-table td {
  color: var(--text-primary);
  border-color: var(--border-color);
}
</style>
