<script setup lang="ts">
import Calculator from './components/Calculator.vue';
</script>

<template>
  <div class="app flex center-center">
    <header></header>
    <main>
      <Calculator />
    </main>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
.app {
  height: 100vh;
}
</style>
