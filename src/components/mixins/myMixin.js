export const myMixin = {
    data() {
        return { name: 'myMixin' }
    },
    created() {
        console.log(`created hook : ${this.name}`)
    }
}
