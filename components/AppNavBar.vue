<template>
    <header class="app-navbar">
        <btn to="/">
            <h1>Vladivodico</h1>
        </btn>

        <nav class="app-navigation">
            <btn to="/signup" class="uppercase">Inscription</btn>
            <btn to="/signin" class="uppercase ml-2">Connexion</btn>
        </nav>
    </header>
</template>

<script>
import Btn from './Btn'

export default {
    name: 'AppNavBar',
    components: {
        Btn
    }
}
</script>

<style lang="scss" scoped>
.app-navbar {
    @apply flex justify-between items-center sticky top-0 px-3 py-2 shadow-md z-50;

    h1 {
        @apply text-3xl;

        font-family: 'Mansalva', cursive;
    }
}

.app-navigation {
    & > a.nuxt-link-active {
        @apply underline;
    }
}
</style>
