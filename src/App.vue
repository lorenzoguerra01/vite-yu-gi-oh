<template>
  <HeaderComponent />
  <MainComponent @searchArchetype="getCards" />
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {
      this.store.isLoading = true;
      axios.get(this.store.apiUrl + this.store.endPoint.all, this.store.options)
        .then((res) => {
          this.store.cards = res.data.data.map((card) => {
            return {
              title: card.name,
              image: card.card_images[0].image_url_small,
              archetype: card.archetype
            }
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.store.isLoading = false;
        });
    },
    getArchetype() {
      this.store.isLoading = true;
      axios.get(this.store.apiUrl + this.store.endPoint.archetype)
        .then((res) => {
          this.store.archetypes = res.data
          console.log(this.store.archetypes);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.store.isLoading = false;
        });
    }
  },
  created() {
    this.getCards();
    this.getArchetype();
  },

}
</script>

<style lang="scss" scoped></style>