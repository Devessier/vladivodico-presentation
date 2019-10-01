<template>
    <section class="sign-on__container">
        <h1>
            <slot name="header" />
        </h1>

        <formulary
            :fields="fields"
            class="sign-on__formulary"
            v-on="$listeners"
        >
            <template #submit>
                <slot name="submit" />
            </template>
        </formulary>
    </section>
</template>

<script>
import Formulary from '~/components/Formulary.vue'

export default {
    name: 'SignOn',
    components: {
        Formulary
    },
    props: {
        fields: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
section.sign-on__container {
    @apply w-full flex flex-col items-center my-3 mx-auto;

    @screen sm {
        @apply my-4 w-4/5;
    }

    @screen md {
        @apply my-6 w-2/5;
    }

    > h1 {
        @apply text-3xl mb-6;

        font-family: 'Mansalva', cursive;
    }

    .sign-on__formulary {
        @apply px-4;

        @screen md {
            @apply px-0;
        }
    }
}
</style>
