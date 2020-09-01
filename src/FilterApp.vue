<template>
  <div id="app">
    <TextFilterTest></TextFilterTest>
  </div>
</template>

<script>
    import TextFilterTest from './components/filter/TextFilterTest'

export default {
  name: 'App',
  components: {
      TextFilterTest,
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
