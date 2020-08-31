<template>
  <div> </div>
</template>
<script>
    import {myMixin} from "./myMixin";

    export default {
        mixins: [myMixin],
        created() {
            console.log('MyComponent2')
        }
    }
</script>
