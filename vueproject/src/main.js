import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element)

import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
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
