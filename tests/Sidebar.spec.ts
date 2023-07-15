import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import SideBar from '@/components/SideBar.vue';

describe('SideBar', () => {
  it('emits the submit event with the correct data', () => {
    const wrapper = shallowMount(SideBar);
    wrapper.find('[data-test-id="purchase-price"]').setValue('500000');
    wrapper.find('[data-test-id="interest-rate"]').setValue('6');
    wrapper.find('[data-test-id="down-payment"]').setValue('20');
    wrapper.find('[data-test-id="mortgage-term"]').setValue('15');
    wrapper.find('[data-test-id="year-month-select"]').setValue('years');
    wrapper.find('[data-test-id="down-payment-type"]').setValue('percentage');
    wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.emitted().submit).toBeTruthy();
    expect((wrapper.emitted().submit as Array<[unknown]>)[0][0]).toEqual({
      purchasePrice: 500000,
      interestRate: 6,
      mortgageTerm: 15,
      paymentAmount: '3375.43',
      totalAmount: '607576.92',
      downPayment: 20,
      isValuePercentage: true,
      isValueMonths: false,
    });
  });
});
