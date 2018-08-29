import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element)

const First = { template: '<div><h2>第一个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
