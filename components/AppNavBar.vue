<template>
    <header class="app-navbar">
        <btn to="/">
            <h1>Vladivodico</h1>
        </btn>

        <button
            class="app-navigation__mobile__toggle"
            @click="active = !active"
        >
            <x-icon v-if="active" />
            <menu-icon v-else />
        </button>

        <div class="screen-background__mobile" :class="{ active }"></div>

        <nav class="app-navigation" :class="{ mobile__active: active }">
            <btn to="/sign-up" class="uppercase" @click="close"
                >Inscription</btn
            >
            <btn to="/sign-in" class="uppercase" @click="close">Connexion</btn>
        </nav>
    </header>
</template>

<script>
import { XIcon, MenuIcon } from 'vue-feather-icons'

import Btn from './Btn'

export default {
    name: 'AppNavBar',
    components: {
        Btn,
        XIcon,
        MenuIcon
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        close() {
            this.active = false
        }
    }
}
</script>

<style lang="scss" scoped>
header.app-navbar {
    @apply flex justify-between items-center sticky top-0 px-3 py-2 shadow-md z-50 relative;

    h1 {
        @apply text-3xl;

        font-family: 'Mansalva', cursive;
    }

    button.app-navigation__mobile__toggle {
        @apply block z-30 outline-none cursor-pointer;

        @screen md {
            @apply hidden;
        }
    }

    .screen-background__mobile {
        @apply absolute right-0 w-16 h-16 rounded-full bg-red-500 opacity-0 z-20;

        transition: all 300ms ease;

        &.active {
            @apply opacity-100;

            transform: scale(40);
        }

        @screen md {
            @apply hidden;
        }
    }

    .app-navigation {
        @apply absolute w-full inset-x-0 flex flex-col items-center opacity-0 z-30 text-xl;

        top: 70px;

        transition: all 300ms ease;

        transform: translateY(-20px) scale(0.9);

        &.mobile__active {
            @apply opacity-100;

            transform: translateY(0);
        }

        @screen md {
            @apply static w-auto block opacity-100 text-lg;

            transform: translateY(0) scale(1);
        }

        & > a.nuxt-link-active {
            @apply underline;
        }

        &:nth-child(2) {
            @screen md {
                @apply ml-2;
            }
        }
    }
}
</style>
