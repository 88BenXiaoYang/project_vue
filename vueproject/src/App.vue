<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent>
    <ul>
       <li><router-link to="/first">到第一页</router-link></li>
       <li><router-link to="/second">到第二页</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
