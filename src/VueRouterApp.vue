<template>
  <div id="app">
    <header>
      <h1>Vue Router App</h1>
    </header>
    <ul>
      <li><router-link to="/home">home</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
    <router-view></router-view>
    <footer>
      <small>Tel. 02-0000-0000, address: xxxx</small>
    </footer>
  </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        console.log(this.$router)
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
</style>
