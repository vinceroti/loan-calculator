import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Table from '@/components/Table.vue';

describe('Table', () => {
  it('displays all submitted mortgage data', async () => {
    const wrapper = shallowMount(Table);

    // Simulate submitting some mortgage data
    await wrapper.setProps({
      mortgageData: {
        purchasePrice: 100000,
        interestRate: 5,
        mortgageTerm: 30,
        paymentAmount: '429.46',
        totalAmount: '154605.60',
        downPayment: 20000,
        isValuePercentage: true,
        isValueMonths: true,
      },
    });

    // Check that the mortgage data is displayed in the table
    expect(wrapper.find('tbody tr:first-child td:nth-child(1)').text()).toBe('30 Years');
    expect(wrapper.find('tbody tr:first-child td:nth-child(2)').text()).toBe('$429.46');
    expect(wrapper.find('tbody tr:first-child td:nth-child(3)').text()).toBe('5%');
    expect(wrapper.find('tbody tr:first-child td:nth-child(4)').text()).toBe('20%');
    expect(wrapper.find('tbody tr:first-child td:nth-child(5)').text()).toBe('$100000');
    expect(wrapper.find('tbody tr:first-child td:nth-child(6)').text()).toBe('$154605.60');
  });

  it('sorts mortgage data by mortgage term in ascending order', async () => {
    const wrapper = shallowMount(Table);

    // Simulate submitting some mortgage data
    await wrapper.setProps({
      mortgageData: [
        {
          purchasePrice: 100000,
          interestRate: 5,
          mortgageTerm: 30,
          paymentAmount: '429.46',
          totalAmount: '154605.60',
          downPayment: 20000,
          isValuePercentage: true,
          isValueMonths: true,
        },
        {
          purchasePrice: 200000,
          interestRate: 4,
          mortgageTerm: 15,
          paymentAmount: '1480.46',
          totalAmount: '266482.80',
          downPayment: 40000,
          isValuePercentage: false,
          isValueMonths: true,
        },
      ],
    });

    // Click the "Mortgage Term" ascending arrow
    await wrapper.find('thead th:nth-child(1) button.arrow.up').trigger('click');

    // Check that the mortgage data is sorted by mortgage term in ascending order
    expect(wrapper.find('tbody tr:first-child td:nth-child(1)').text()).toBe('15 Years');
    expect(wrapper.find('tbody tr:last-child td:nth-child(1)').text()).toBe('30 Years');
  });

  it('sorts mortgage data by payment amount in descending order', async () => {
    const wrapper = shallowMount(Table);

    // Simulate submitting some mortgage data
    await wrapper.setProps({
      mortgageData: [
        {
          purchasePrice: 100000,
          interestRate: 5,
          mortgageTerm: 30,
          paymentAmount: '429.46',
          totalAmount: '154605.60',
          downPayment: 20000,
          isValuePercentage: true,
          isValueMonths: true,
        },
        {
          purchasePrice: 200000,
          interestRate: 4,
          mortgageTerm: 15,
          paymentAmount: '1480.46',
          totalAmount: '266482.80',
          downPayment: 40000,
          isValuePercentage: false,
          isValueMonths: true,
        },
      ],
    });

    // Click the "Monthly Payment" descending arrow
    await wrapper.find('thead th:nth-child(2) button.arrow').trigger('click');

    // Check that the mortgage data is sorted by payment amount in descending order
    expect(wrapper.find('tbody tr:first-child td:nth-child(2)').text()).toBe('$1480.46');
    expect(wrapper.find('tbody tr:last-child td:nth-child(2)').text()).toBe('$429.46');
  });
});
