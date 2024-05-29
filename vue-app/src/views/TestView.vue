<template>
  <div>
    <NavBar />
    <div class="content">
      <h1>Conteúdo de Teste</h1>
      <p>Esta é uma página de teste para verificar a NavBar.</p>
      <div class="centered-text">Test</div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';

</script>

<style scoped>
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.centered-text {
  font-size: 24px;
  color: #333;
  margin-top: 20px;
}
</style>