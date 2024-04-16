<template>
    <main class="pb-3">
        <div class="p-3 ms-5 d-inline-block ">
            <select class="form-select" aria-label="Default select example" @change="$emit('searchArchetype')"
                v-model="store.options.params.archetype">
                <option selected :value="null">Select Archetype</option>
                <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype.archetype_name">{{archetype.archetype_name}}</option>
            </select>
        </div>
        <CardList />
    </main>
</template>

<script>
import { store } from '../store.js';
import CardList from './CardList.vue';
export default {
    name: 'MainComponent',
    data() {
        return {
            store
        }
    },
    components: {
        CardList
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables.scss';

main {
    background-color: $bg-color;
}
</style>