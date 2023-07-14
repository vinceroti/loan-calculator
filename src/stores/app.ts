import { defineStore } from 'pinia';
import { ref } from 'vue';

import Stores from '@/enums/Stores.ts';

export default defineStore(Stores.App, () => {
  // use a ref to create a reactive value (state)

  const app = ref(false);

  return {
    app,
  };
});
