<template>
    <form class="formulary" @submit.prevent="submit">
        <text-field
            v-for="(field, i) in fields"
            :key="i"
            v-bind="field"
            @input="$emit('input', i, $event)"
            class="formulary__text-field"
        />

        <footer class="formulary__footer">
            <button
                type="submit"
                class="formulary__submit-button"
                :class="{ rounded }"
            >
                <slot name="submit">
                    <check-icon size="2x" />
                </slot>
            </button>
        </footer>
    </form>
</template>

<script>
import { CheckIcon } from 'vue-feather-icons'

import TextField from './TextField.vue'

export default {
    name: 'Formulary',
    components: {
        TextField,
        CheckIcon
    },
    props: {
        fields: {
            type: Array,
            required: true
        },
        rounded: {
            type: Boolean,
            default: true
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

    > .formulary__text-field:not(:last-child) {
        @apply mb-4;
    }

    footer.formulary__footer {
        @apply w-full flex justify-center items-center pt-2;

        .formulary__submit-button {
            @apply bg-red-500 text-white px-2 py-1 rounded outline-none;

            &.rounded {
                @apply p-3 rounded-full;
            }
        }
    }
}
</style>
