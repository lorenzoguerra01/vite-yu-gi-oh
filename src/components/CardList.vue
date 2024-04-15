<template>
    <div class="container bg-white p-5">
        <div class="bg-dark">
            <h5 class="fw-semibold text-white p-3 m-0 ">Found {{ store.cards.length }} cards</h5>
        </div>
        <div class="row gy-5 text-center" v-if="!store.isLoading">
            <div class="col-12 col-md-6 col-lg-3" v-for="card in store.cards" :key="card.id">
                <CardComponent :title="card.name" :image="card.card_images[0].image_url_small" :archetype="card.archetype" />
            </div>
        </div>
        <ApiLoader v-else />
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
import ApiLoader from './ApiLoader.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent,
        ApiLoader
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>