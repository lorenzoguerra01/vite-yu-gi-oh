<template>
    <div class="bg-card h-100">
        <img :src="image" :alt="title">
        <div class="py-3 fw-semibold text-white ">{{ title }}</div>
        <div>{{ archetype }}</div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['title', 'image', 'archetype']
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables.scss';

img {
    width: 100%;
    aspect-ratio: 2 / 3;
}

.bg-card {
    background-color: $bg-color;
}
</style>