<template>
    <sign-on :fields="fields" @input="input" @submit="submit">
        <template #header>
            Connexion
        </template>

        <template #submit>
            <chevron-right-icon size="2x" />
        </template>
    </sign-on>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons'

import SignOn from '~/components/SignOn.vue'

export default {
    name: 'SignInPage',
    components: {
        SignOn,
        ChevronRightIcon
    },
    head: {
        title: 'Connexion'
    },
    data() {
        return {
            fields: [
                {
                    label: "Nom d'utilisateur",
                    value: '',
                    name: 'username',
                    autocomplete: 'username'
                },
                {
                    label: 'Mot de passe',
                    value: '',
                    name: 'current-password',
                    autocomplete: 'current-password',
                    type: 'password'
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
