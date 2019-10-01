<template>
    <section class="page__presentation">
        <div class="icon__container">
            <book-icon />
        </div>

        <h1 class="page__presentation__title">Vladivodico</h1>

        <h2 class="page__presentation__subtitle">Votre compagnon de lecture</h2>
        <article class="page__presentation__description">
            <p>
                Vladivodico vous permet de garder note des locutions que vous
                découvrez au fil de vos lectures.
            </p>
            <p>
                Une fois connecté, vos notes seront automatiquement
                synchronisées entre vos différents appareils 🎉.
            </p>
        </article>

        <aside class="page__presentation__functionalities__container">
            <figure
                v-for="({ component, legend }, i) in functionalities"
                :key="i"
                class="page__presentation__functionality"
            >
                <header>
                    <div>
                        <component :is="component" size="20" />
                    </div>
                </header>

                <figcaption>{{ legend }}</figcaption>
            </figure>
        </aside>
    </section>
</template>

<script>
import { RefreshCcwIcon, WifiOffIcon, EditIcon } from 'vue-feather-icons'

import BookIcon from '~/components/BookIcon'

export default {
    name: 'IndexPage',
    components: {
        BookIcon,
        RefreshCcwIcon,
        WifiOffIcon,
        EditIcon
    },
    data() {
        return {
            functionalities: [
                {
                    component: 'RefreshCcwIcon',
                    legend: 'Synchronisation automatique'
                },
                {
                    component: 'WifiOffIcon',
                    legend: 'Support hors-ligne'
                },
                {
                    component: 'EditIcon',
                    legend: 'Editeur de texte adapté'
                }
            ]
        }
    },
    head: {
        title: 'Accueil'
    }
}
</script>

<style lang="scss" scoped>
.page__presentation {
    @apply mx-auto;

    width: 95vw;

    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr 1fr 1fr;

    @screen sm {
        width: 85vw;
    }

    @screen md {
        @apply mt-6;

        width: 70vw;

        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: 1fr auto auto;
    }

    .icon__container {
        @apply hidden relative justify-end items-end;

        grid-column: 1 / span 2;
        grid-row: 1 / span 3;

        @screen md {
            @apply flex;
        }

        svg {
            @apply w-full h-auto max-w-xs fill-current text-red-400;
        }
    }

    h1.page__presentation__title {
        @apply hidden relative text-2xl font-semibold text-right text-red-800;

        @screen md {
            @apply block;
        }

        font-family: 'Mansalva', cursive;

        grid-row: 1 / span 3;
        grid-column: 3;
        left: -8px;

        writing-mode: vertical-lr;
    }

    h2.page__presentation__subtitle {
        @apply flex items-center text-2xl;

        font-family: 'Cousine', serif;

        grid-column: 1 / span 3;
        grid-row: 1;

        @screen md {
            grid-column: 4 / span 3;
        }
    }

    article.page__presentation__description {
        grid-column: 1 / span 3;
        grid-row: 2;

        @screen md {
            grid-column: 4 / span 3;
        }
    }

    aside.page__presentation__functionalities__container {
        @apply pt-4;

        grid-column: 1 / span 3;
        grid-row: 3;

        @screen md {
            grid-column: 4 / span 3;
        }

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        .page__presentation__functionality {
            display: grid;

            grid-template-rows: repeat(2, 1fr);

            header {
                @apply flex justify-center items-center;

                & > div {
                    @apply p-3 rounded-full text-white bg-red-500;
                }
            }

            figcaption {
                @apply flex justify-center items-start text-center text-gray-700 text-sm pt-2;
            }
        }
    }
}
</style>
