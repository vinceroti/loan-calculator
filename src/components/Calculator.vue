<script setup lang="ts">
import { ref } from 'vue';

import SideBar from './SideBar.vue';
import Table from './Table.vue';

const mortgageData = ref();

const handleSubmit = (value: number) => {
  mortgageData.value = value;
};
</script>

<template>
  <section>
    <h1>Loan Payment Calculator</h1>
    <div class="flex calculator-container">
      <SideBar @submit="handleSubmit" />
      <Table :mortgage-data="mortgageData" />
    </div>
  </section>
</template>

<style scoped lang="scss">
input {
  margin-bottom: spacing(base);
}

.calculator-container {
  align-items: flex-start;
}

:deep(.side-bar) {
  width: rem(350);
}

:deep(.calculator-table) {
  flex: 1;
  min-width: rem(600);
  margin-left: spacing(double);
}
</style>
