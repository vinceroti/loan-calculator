/* eslint-disable import/no-extraneous-dependencies */
import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Table from '@/components/Table.vue';

const firstPropData = {
  mortgageData: {
    purchasePrice: 500000,
    interestRate: 6,
    mortgageTerm: 30,
    paymentAmount: '3375.43',
    totalAmount: '607576.92',
    downPayment: 20,
    isValuePercentage: true,
    isValueMonths: false,
  },
};

const secondPropData = {
  mortgageData: {
    purchasePrice: 250000,
    interestRate: 4,
    mortgageTerm: 15,
    paymentAmount: '1855.28',
    totalAmount: '333550.4',
    downPayment: 10,
    isValuePercentage: true,
    isValueMonths: true,
  },
};

describe('Table', () => {
  it('displays all submitted mortgage data', async () => {
    const wrapper = shallowMount(Table);

    // Simulate submitting some mortgage data
    await wrapper.setProps(firstPropData);

    // Check that the mortgage data is displayed in the table
    expect(wrapper.find('td[data-test-id="mortgage-term"]').text()).toBe('30 Years');
    expect(wrapper.find('td[data-test-id="payment-amount"]').text()).toBe('$3375.43');
    expect(wrapper.find('td[data-test-id="interest-rate"]').text()).toBe('6%');
    expect(wrapper.find('td[data-test-id="down-payment"]').text()).toBe('20%');
    expect(wrapper.find('td[data-test-id="purchase-price"]').text()).toBe('$500000');
    expect(wrapper.find('td[data-test-id="total-amount"]').text()).toBe('$607576.92');
  });

  it('sorts mortgage data by mortgage term in ascending order', async () => {
    const wrapper = shallowMount(Table);

    // Simulate submitting some mortgage data
    await wrapper.setProps(firstPropData);

    await wrapper.setProps(secondPropData);

    // Click the "Mortgage Term" ascending arrow
    await wrapper.find('thead th:nth-child(1) button[data-test-id="ascending-arrow"]').trigger('click');

    // Check that the mortgage data is sorted by payment amount in ascending order
    expect(wrapper.find('tbody tr:first-child td[data-test-id="payment-amount"]').text()).toBe('$1855.28');
    expect(wrapper.find('tbody tr:last-child td[data-test-id="payment-amount"]').text()).toBe('$3375.43');
  });

  it('sorts mortgage data by payment amount in descending order', async () => {
    const wrapper = shallowMount(Table);

    // Simulate submitting some mortgage data
    await wrapper.setProps(firstPropData);

    await wrapper.setProps(secondPropData);

    // Click the "Monthly Payment" descending arrow
    await wrapper.find('thead th:nth-child(2) button[data-test-id="descending-arrow"]').trigger('click');

    // Check that the mortgage data is sorted by payment amount in descending order
    expect(wrapper.find('tbody tr:first-child td[data-test-id="payment-amount"]').text()).toBe('$3375.43');
    expect(wrapper.find('tbody tr:last-child td[data-test-id="payment-amount"]').text()).toBe('$1855.28');
  });
});
