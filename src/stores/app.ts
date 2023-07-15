import { defineStore } from 'pinia';
import { ref } from 'vue';

import Stores from '@/enums/Stores.ts';

export default defineStore(Stores.App, () => {
  const app = ref(false);

  return {
    app,
  };
});

// This is just an example that I know how to setup a Pinia Store
// I believe that this application is very low level that there is no need for this
// Unless we plan on persisting data this data in local storage or accessing across the application

// This would also be a good spot for the mortgage calculator logic
