<template>
  <div>
    <slot name="myName" v-bind:user="user"><h1> {{ user.lastName }} </h1></slot>
  </div>
</template>
<script>
  export default {
      name: 'ScopeSlotComponent',
      data() {
          return {
              user: {
                  firstName: 'sunny',
                  lastName: 'Lets'
              },
          }
      }
  }
</script>
