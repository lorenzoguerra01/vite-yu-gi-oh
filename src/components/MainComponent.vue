<template>
    <main class="pb-3">
        <div class="p-3 ms-5 d-inline-block ">
            <select class="form-select" aria-label="Default select example"
                @change="offsetZero(); $emit('searchArchetype');" v-model="store.options.params.archetype">
                <option selected :value="null">Select Archetype</option>
                <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype.archetype_name">
                    {{ archetype.archetype_name }}</option>
            </select>
        </div>

        <button type="button" class="btn btn-dark ms-5 " :class="store.options.params.offset === 0 ? 'disabled' : ''" @click="previous()">Previous</button>
        <button type="button" class="btn btn-dark ms-3 " :class="store.cards.length < 20 ? 'disabled' : ''" @click="next()">Next</button>

        <CardList class="mb-5" />
        <div class=" text-end pe-5">
            <button type="button" class="btn btn-dark ms-5 " :class="store.options.params.offset === 0 ? 'disabled' : ''" @click="previous()">Previous</button>
            <button type="button" class="btn btn-dark ms-3 " :class="store.cards.length < 20 ? 'disabled' : ''" @click="next()">Next</button>
        </div>

    </main>
</template>

<script>
import { store } from '../store.js';
import CardList from './CardList.vue';
import App from '../App.vue';
export default {
    name: 'MainComponent',
    data() {
        return {
            store
        }
    },
    components: {
        CardList
    },
    methods: {
        next() {
            if (this.store.cards.length === 20) {
                this.store.options.params.offset = this.store.options.params.offset + 20;
                this.$parent.getCards()
                console.log(this.store.options.params.offset);
            }
        },
        previous() {
            if (this.store.options.params.offset !== 0) {
                this.store.options.params.offset = this.store.options.params.offset - 20;
                this.$parent.getCards()
                console.log(this.store.options.params.offset);

            }
        },
        offsetZero() {
            this.store.options.params.offset = 0
            console.log(this.store.options.params.offset);
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables.scss';

main {
    background-color: $bg-color;
}
</style>