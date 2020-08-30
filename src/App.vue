<template>
  <div id="app">
<!--    <child-slot-component>
      <template v-slot:header>
        <h1>여기에 Header의 내용을 넣을거에요 👶🏻</h1>
      </template>
      <h3>이부분은 어디에 들어갈까요?</h3>
      <template v-slot:footer>
        <h1>Footer 를 정의합니다. 🦶🏻</h1>
      </template>
    </child-slot-component>-->
    <scope-slot-component>
      <template v-slot:myName="slotProps">
        <h1>{{ slotProps.user.firstName }}</h1>
      </template>
    </scope-slot-component>
  </div>
</template>

<script>
// import ChildSlotComponent from './components/slots/ChildSlotComponent.vue'
import ScopeSlotComponent from './components/slots/ScopeSlotComponent.vue'

export default {
  name: 'App',
  components: {
    /*ChildSlotComponent, */ScopeSlotComponent,
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
