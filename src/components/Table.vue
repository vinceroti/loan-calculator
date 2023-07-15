<script setup lang="ts">
import { ref, watch } from 'vue';

type MortgageData = {
  purchasePrice: number;
  interestRate: number;
  totalAmount: number;
  mortgageTerm: number;
  paymentAmount: number;
  isValueMonths: boolean;
  downPayment: number;
  isValuePercentage: boolean;
};

const props = withDefaults(
  defineProps<{
    mortgageData?: MortgageData;
  }>(),
  {
    mortgageData: () => ({
      purchasePrice: 0,
      interestRate: 0,
      totalAmount: 0,
      mortgageTerm: 0,
      paymentAmount: 0,
      isValueMonths: false,
      downPayment: 0,
      isValuePercentage: false,
    }),
  },
);

const headers = {
  mortgageTerm: 'Mortgage Term',
  paymentAmount: 'Monthly Payment',
  interestRate: 'Interest Rate',
  downPayment: 'Down Payment',
  purchasePrice: 'Total Amount',
  totalAmount: 'Total over Loan Term',
};

const allSubmittedMortgageData = ref<MortgageData[]>([]);

watch(
  () => props.mortgageData,
  (value: MortgageData) => {
    allSubmittedMortgageData.value.push(value);
  },
);

const handleUp = (value: keyof MortgageData) => {
  allSubmittedMortgageData.value.sort((a, b) => a[value] - b[value]);
};

const handleDown = (value: keyof MortgageData) => {
  allSubmittedMortgageData.value.sort((a, b) => b[value] - a[value]);
};
</script>

<template>
  <table class="calculator-table">
    <thead>
      <tr>
        <th v-for="(label, value) in headers" :key="value" class="flex left-center">
          {{ label }}
          <div class="arrows flex flex-wrap flex-column">
            <button class="arrow up button-link" type="button" @click="handleUp(value)" />
            <button class="arrow button-link" type="button" @click="handleDown(value)" />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in allSubmittedMortgageData" :key="index">
        <td>{{ data.mortgageTerm }} {{ data.isValueMonths ? 'Months' : 'Years' }}</td>
        <td>${{ data.paymentAmount }}</td>
        <td>{{ data.interestRate }}%</td>
        <td>{{ !data.isValuePercentage ? '$' : '' }}{{ data.downPayment }}{{ data.isValuePercentage ? '%' : '' }}</td>
        <td>${{ data.purchasePrice }}</td>
        <td>${{ data.totalAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.calculator-table {
  background-color: $white;
  border-radius: rem(10);
  padding: spacing(base);
}

th {
  width: rem(175);
  margin-left: spacing(base);
}

tr {
  display: flex;
  padding: spacing(half);
  border-bottom: 1px solid $medium-gray;
  &:last-child {
    border-bottom: none;
  }
}
td {
  width: rem(200);
  margin: spacing(element);
}

.arrows {
  margin-left: spacing(base);
}

.arrow {
  &:after {
    content: '\25BC';
  }
}

.up {
  transform: rotate(-180deg);
}
</style>