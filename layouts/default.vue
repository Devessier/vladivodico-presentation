<template>
    <div class="app-container">
        <app-nav-bar />

        <main class="z-10">
            <nuxt />
        </main>
    </div>
</template>

<script>
import AppNavBar from '~/components/AppNavBar'

export default {
    name: 'DefaultLayout',
    components: {
        AppNavBar
    }
}
</script>

<style>
body {
    @apply bg-orange-200 text-gray-900;

    font-family: 'Lato', sans-serif;
}
</style>

<style scoped>
.app-container {
    @apply bg-orange-200;
}
</style>
