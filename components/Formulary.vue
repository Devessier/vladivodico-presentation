<template>
    <form class="formulary" @submit.prevent="submit">
        <text-field
            v-for="(field, i) in fields"
            :key="i"
            v-bind="field"
            @input="$emit('input', i, $event)"
        />
    </form>
</template>

<script>
import TextField from './TextField.vue'

export default {
    name: 'Formulary',
    components: {
        TextField
    },
    props: {
        fields: {
            type: Array,
            required: true
        }
    },
    methods: {
        submit() {
            console.log('submit !')
        }
    }
}
</script>

<style lang="scss" scoped>
form.formulary {
    @apply w-full;

    > *:not(:last-child) {
        @apply mb-4;
    }
}
</style>
