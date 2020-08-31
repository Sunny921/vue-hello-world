<template>
  <div>
    <span v-text="this.name"></span> <br/>
    <span v-text="this.firstName"></span> <br/>
    <span v-text="this.lastName"></span> <br/>
    <button @click="sayHello()">hello</button>
  </div>
</template>
<script>
    import {myMixin} from "./myMixin";

    export default {
        mixins: [myMixin],
        data() {
            return {
                name: 'misun',
                firstName: 'Sunny',
                lastName: 'Kim',
            }
        },
        methods: {
            sayHello: function() {
                console.log('I am component hello')
            }
        }
    }
</script>
