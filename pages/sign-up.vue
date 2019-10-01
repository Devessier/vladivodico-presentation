<template>
    <section class="page__sign-up">
        <h1>Inscription</h1>

        <formulary :fields="fields" @input="input" />
    </section>
</template>

<script>
import Formulary from '~/components/Formulary.vue'

export default {
    name: 'SignUpPage',
    components: {
        Formulary
    },
    data() {
        return {
            fields: [
                {
                    label: "Nom d'utilisateur",
                    value: '',
                    placeholder: 'Vladivo',
                    name: 'username',
                    autocomplete: 'username'
                },
                {
                    label: 'Adresse mail',
                    value: '',
                    placeholder: 'me@vladivodico.app',
                    name: 'email',
                    autocomplete: 'email',
                    type: 'email'
                },
                {
                    label: 'Mot de passe',
                    value: '',
                    name: 'new-password',
                    autocomplete: 'new-password',
                    type: 'password'
                }
            ]
        }
    },
    methods: {
        input(i, value) {
            console.log('input =', i, value)
            this.fields[i].value = value
        }
    }
}
</script>

<style lang="scss" scoped>
section.page__sign-up {
    @apply w-full flex flex-col items-center mt-2 mx-auto;

    @screen sm {
        @apply mt-4 w-4/5;
    }

    @screen md {
        @apply mt-6 w-1/2;
    }

    > h1 {
        @apply text-3xl mb-6;

        font-family: 'Mansalva', cursive;
    }

    form.page__sign-up__form {
    }
}
</style>
