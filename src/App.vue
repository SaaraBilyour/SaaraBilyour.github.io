<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Navbar -->
  <header class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand mx-auto" href="#">Contacts</a>
    </div>
  </header>

  <!-- Main Content -->
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #42b883;
}

main {
  padding-top: 2rem;
}
</style>
