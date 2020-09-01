<template>
  <div>
    <h1>I'm Home Component : {{ count }}</h1>
    <button @click="addHomeCount()"> add home count </button>
  </div>
</template>
<script>
    export default {
        name: 'Home',
        created() {
            console.log('Home component')
        },
        data() {
            return {
                count : 0
            }
        },
        methods: {
            addHomeCount: function () {
                this.count++
            }
        }
    }
</script>
