<template>
  <HeaderComponent />
  <MainComponent />
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
      axios.get(this.store.apiUrl).then((res) => {
        this.store.cards = res.data.data;
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        this.store.isLoading = false;
      }); 

    }
  },
  created() {
    this.getCards();
  },

}
</script>

<style lang="scss" scoped></style>