<template>
    <div class="vladivodico__input">
        <label :for="id" class="vladivodico__input__label">
            <p>{{ label }}</p>
        </label>

        <div class="vladivodico__input__main" :class="{ focus: hasFocus }">
            <input
                :id="id"
                :value="value"
                :name="name"
                :autocomplete="autocomplete"
                :type="inputType"
                @input="$emit('input', $event.target.value)"
                @keydown.enter.prevent
                @focus="hasFocus = true"
                @blur="hasFocus = false"
            />

            <aside class="vladivodico__input__buttons-container">
                <button
                    v-if="type === 'password' && seeable === true"
                    @click="showPassword = !showPassword"
                >
                    <eye-icon v-if="!showPassword" />
                    <eye-off-icon v-else />
                </button>

                <button v-if="closable" @click="$emit('input', '')">
                    <x-icon />
                </button>
            </aside>
        </div>

        <footer
            v-if="placeholder !== ''"
            class="vladivodico__input__placeholder"
        >
            <p>
                Exemple:
                <span class="vladivodico__input__placeholder__text">
                    {{ placeholder }}
                </span>
            </p>
        </footer>
    </div>
</template>

<script>
import { XIcon, EyeIcon, EyeOffIcon } from 'vue-feather-icons'

export default {
    name: 'TextField',
    components: {
        XIcon,
        EyeIcon,
        EyeOffIcon
    },
    props: {
        closable: {
            type: Boolean,
            default: true
        },
        value: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        seeable: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hasFocus: false,
            showPassword: false
        }
    },
    computed: {
        id() {
            return `${this.name}-input`
        },
        inputType() {
            if (this.type !== 'password') return this.type

            return this.showPassword ? 'text' : 'password'
        }
    }
}
</script>

<style lang="scss" scoped>
.vladivodico__input {
    @apply flex flex-col items-stretch;

    > .vladivodico__input__label {
        @apply w-full text-2xl mb-1 font-bold;
    }

    .vladivodico__input__main {
        @apply flex justify-end items-center border-b-2 border-gray-600 py-2;

        transition: border-color 200ms;

        > input,
        button {
            @apply outline-none;
        }

        &.focus {
            @apply border-gray-800;
        }

        > input {
            @apply flex-grow bg-transparent mr-1;
        }

        .vladivodico__input__buttons-container {
            @apply flex items-center;

            & > *:not(:first-child) {
                @apply ml-2;
            }
        }
    }

    .vladivodico__input__placeholder {
        @apply w-full flex justify-start items-center mt-1;

        .vladivodico__input__placeholder__text {
            @apply font-bold;
        }
    }
}
</style>
