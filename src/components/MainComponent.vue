<template>
    <main class="pb-3">
        <SearchComponent />
        <CardList />
    </main>
</template>

<script>
import SearchComponent from './SearchComponent.vue';
import CardList from './CardList.vue';
export default {
    name: 'MainComponent',
    components: {
        SearchComponent,
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