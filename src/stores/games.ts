import { defineStore } from 'pinia';
import { hydra, ref, computed } from '#imports';
import { IGame } from '~/interfaces/Hydra/Game';
import Game from '~/models/Game'
import Stores from '~/enums/Stores';

export default defineStore(
  Stores.Games,
  () => {
    // use a ref to create a reactive value (state)

    const loading = ref(false);
    const gamesData = ref<IGame[] | null>([]);

    const games = computed(() => gamesData.value?.map((game) => new Game(game)) || []);

    const getFeaturedGames = computed(() => games.value?.filter((game) => game.featured === true) || []);

    const getGameById = computed(() => (id: string) => games.value?.find((game) => game.id === id) || null);

    // use a function to create an action (actions)
    async function fetchGames() {
      loading.value = true;
      try {
        const { data } = await hydra<IGame[]>('games');
        gamesData.value = data.value || [];
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    }

    // return everything that should be exposed to the store
    return {
      loading,
      games,
      gamesData,
      fetchGames,
      getFeaturedGames,
      getGameById,
    };
  },
  {
    persist: {
      paths: ['gamesData'],
    },
  },
);
