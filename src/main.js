import Vue from 'vue'
// import App from './MixinApp.vue'
// import App from './MixinApp.vue'
// import App from './DynamicApp.vue'
import App from './FilterApp.vue'

Vue.config.productionTip = false

Vue.filter('won', function (value) {
  return `${value} 원`;
});
new Vue({
  render: h => h(App),
}).$mount('#app')
