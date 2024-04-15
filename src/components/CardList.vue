<template>
    <div class="container">
        <div class="row gy-5 text-center">
            <div class="col-12 col-md-6 col-lg-3" v-for="card in store.cards" :key="card.id">
                <CardComponent :title="card.name" :image="card.card_images[0].image_url_small" :archetype="card.archetype" />
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
</style>