<script>
export default {
    name: 'Btn',
    functional: true,
    props: {
        to: {
            type: [Object, String],
            default() {
                return undefined
            }
        },
        primary: {
            type: Boolean,
            default: false
        }
    },
    render(h, { scopedSlots, props, data }) {
        const tag = props.to === undefined ? 'button' : 'nuxt-link'

        return h(
            tag,
            {
                props,
                staticClass: `btn ${data.staticClass || ''}`,
                class: {
                    btn__primary: props.primary,
                    ...data.class
                }
            },
            scopedSlots.default()
        )
    }
}
</script>

<style scoped>
.btn {
    @apply px-2 py-1 font-semibold;

    font-family: 'Cousine', serif;
}
</style>
