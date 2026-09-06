<template>
  <div class="admin-layout">
    <AdminSidebar />
    <div class="admin-content">
      <AdminHeader />
      <main class="admin-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
import AdminHeader from '@/components/admin/AdminHeader.vue'
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: var(--bg-secondary);
  transition: background 0.3s ease;
}

.admin-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.admin-main {
  flex: 1;
  padding: 2rem;
}
</style>
