<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <section>
    <h1>Loan Payment Calculator</h1>
    <aside>
      <form>
        <label for="amount">Loan Amount</label>
        <input id="amount" type="number" />
        <label for="term">Loan Term</label>
        <select id="term">
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
        </select>
        <label for="rate">Interest Rate</label>
        <input id="rate" type="number" />
        <button type="submit">Calculate</button>
      </form>
    </aside>
  </section>
</template>

<style scoped>
</style>
