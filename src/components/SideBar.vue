<script setup lang="ts">
import { computed, ref } from 'vue';

// eslint-disable-next-line no-shadow
enum OptionValues {
  Months = 'months',
  Years = 'years',
  Percentage = 'percentage',
  Dollars = 'dollars',
}

const yearsOrMonthsOptions = [
  { label: 'Months', value: OptionValues.Months },
  { label: 'Years', value: OptionValues.Years },
];

const downPaymentTypeOptions = [
  { label: 'Percent', value: OptionValues.Percentage },
  { label: 'Dollars', value: OptionValues.Dollars },
];

const emits = defineEmits(['submit']);

const purchasePrice = ref(null);
const interestRate = ref(null);
const downPayment = ref(null);
const mortgageTerm = ref(null);
const yearsOrMonths = ref(OptionValues.Months);
const downPaymentType = ref(OptionValues.Percentage);

const isValuePercentage = computed(() => downPaymentType.value === OptionValues.Percentage);
const isValueMonths = computed(() => yearsOrMonths.value === OptionValues.Months);

const handleSubmit = () => {
  if (!purchasePrice.value || !interestRate.value || !mortgageTerm.value || !downPayment.value) return;
  const principal =
    purchasePrice.value -
    (isValuePercentage.value ? purchasePrice.value * (downPayment.value / 100) : downPayment.value);
  const monthlyInterestRate = interestRate.value / 1200;
  const numberOfPayments = mortgageTerm.value * (isValueMonths.value ? 1 : 12);

  const numerator = monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments;
  const denominator = (1 + monthlyInterestRate) ** numberOfPayments - 1;
  const monthlyMortgagePayment = principal * (numerator / denominator);

  const totalAmount = monthlyMortgagePayment * numberOfPayments;

  emits('submit', {
    purchasePrice: purchasePrice.value,
    interestRate: interestRate.value,
    mortgageTerm: mortgageTerm.value,
    paymentAmount: monthlyMortgagePayment.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
    downPayment: downPayment.value,
    isValuePercentage: isValuePercentage.value,
    isValueMonths: isValueMonths.value,
  });
};
</script>

<template>
  <aside class="side-bar">
    <form class="flex flex-wrap side-bar-form" @submit.prevent="handleSubmit">
      <label>
        Purchase Price *
        <input
          v-model="purchasePrice"
          type="number"
          placeholder="E.g. $100,000,000"
          required
          data-test-id="purchase-price"
        />
      </label>
      <label>
        Interest Rate *
        <input v-model="interestRate" type="number" placeholder="E.g. 20%" required data-test-id="interest-rate" />
      </label>
      <fieldset class="flex flex-wrap">
        <label>
          Down Payment
          <input
            v-model="downPayment"
            :placeholder="`E.g. ${isValuePercentage ? '20%' : '$15,000,000'}`"
            type="number"
            required
            data-test-id="down-payment"
          />
        </label>
        <label>
          <select v-model="downPaymentType" data-test-id="down-payment-type">
            <option
              v-for="option in downPaymentTypeOptions"
              :key="option.value"
              :value="option.value"
              v-text="option.label"
            />
          </select>
        </label>
      </fieldset>
      <fieldset class="flex flex-wrap">
        Mortage Term ({{ isValueMonths ? 'Months' : 'Years' }}) *
        <label>
          <input
            v-model="mortgageTerm"
            type="number"
            :placeholder="`E.g. ${isValueMonths ? '90' : '2'} `"
            required
            data-test-id="mortgage-term"
          />
        </label>
        <label>
          <select v-model="yearsOrMonths" data-test-id="year-month-select">
            <option
              v-for="option in yearsOrMonthsOptions"
              :key="option.value"
              :value="option.value"
              v-text="option.label"
            />
          </select>
        </label>
      </fieldset>
      <button type="submit" class="generate button">Generate Rates</button>
    </form>
  </aside>
</template>

<style scoped lang="scss">
fieldset {
  align-items: flex-end;
  label {
    width: 50%;
  }
}
input {
  margin-bottom: spacing(base);
}

select {
  width: 100%;
  margin-bottom: spacing(base);
}

.generate {
  width: 100%;
}

.side-bar {
  background-color: $white;
  border-radius: rem(10);
  padding: spacing(base);
}
</style>
