<template>
    <sign-on :fields="fields" @input="input" @submit="submit">
        <template #header>
            Inscription
        </template>
    </sign-on>
</template>

<script>
import SignOn from '~/components/SignOn.vue'

export default {
    name: 'SignUpPage',
    components: {
        SignOn
    },
    head: {
        title: 'Inscription'
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
                    type: 'password',
                    seeable: true
                }
            ]
        }
    },
    methods: {
        input(i, value) {
            console.log('input =', i, value)
            this.fields[i].value = value
        },
        submit() {
            console.log('go ! submit !')
        }
    }
}
</script>
