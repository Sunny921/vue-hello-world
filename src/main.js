
// import App from './MixinApp.vue'
// import App from './MixinApp.vue'
// import App from './DynamicApp.vue'
// import App from './FilterApp.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './VueRouterApp.vue'
import Home from './components/route-page/Home'
import About from './components/route-page/About'
import Product from "./components/route-page/Product";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/product/:goodsId', component: Product,props: () => {
            return { dynamicContent: new Date() }
        } }
]
const router = new VueRouter({
    mode: 'history',
    routes,
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
