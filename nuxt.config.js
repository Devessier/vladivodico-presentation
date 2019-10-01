const title =
    'Vladivodico est votre nouveau compagnon de lecture. Son application web fonctionnant même sans connexion vous aide à retenir les mots nouveaux que vous découvrez au fil de vos lectures.'

module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Votre compagon de lecture',
        titleTemplate: 'Vladivodico - %s',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: title
            },
            {
                hid: 'theme-color',
                name: 'theme-color',
                content: '#FEEBC8'
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: title
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Cousine:700|Lato:400,700|Mansalva&display=swap'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
