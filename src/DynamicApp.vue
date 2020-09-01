<template>
  <div id="app">
    <a href="#" @click="changeComponent('Home')">Home &nbsp;</a>
    <a href="#"  @click="changeComponent('About')">About &nbsp;</a>
    <keep-alive>
      <component v-bind:is="comp"></component>
    </keep-alive>
  </div>
</template>
<script>
  import Home from './components/keepAlive/Home'
  import About from './components/keepAlive/About'

  export default {
      data() {
          return {
              comp: 'Home'
          },
      },
      components: {
          Home,
          About,
      },
      methods: {
          changeComponent: function(componentName) {
              this.comp = componentName
          }
      }
  }
</script>
