<template>
  <HeaderComponent />
  <MainComponent />
  <CardList />
</template>

<script>
import { store } from './store';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import CardList from './components/CardList.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    CardList
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get(this.store.apiUrl).then((res) => {
      console.log(res.data.data);
      this.store.cards = res.data.data;
    })
  },

}
</script>

<style lang="scss" scoped></style>