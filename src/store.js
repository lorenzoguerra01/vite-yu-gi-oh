import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    endPoint: {
        "characters": "character",
        "locations": "location",
        "episodes": "episode"
      },
      characters: [],
      total: 0,
      loading: false,
      error:{
        message: null
      }
});