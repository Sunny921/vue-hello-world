<template>
  <div id="app">
    <MyComponent1></MyComponent1>
  </div>
</template>

<script>
    import MyComponent1 from './components/mixins/MyComponent1'
    import MyComponent2 from './components/mixins/MyComponent1'

export default {
  name: 'App',
  components: {
      MyComponent1,
      MyComponent2,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
