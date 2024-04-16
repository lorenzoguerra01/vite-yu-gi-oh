import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endPoint: {
        all: 'cardinfo.php',
        random: 'randomcard.php'
      },
      options: {
          params: {
            num: 20,
            offset: 0
          }
      },
      cards: [],
      archetypes: [],
      total: 0,
      isLoading: false,
      error:{
        message: null
      }
});