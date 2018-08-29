<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p>哈哈<a href="https://www.baidu.com">百度</a>搜索</p>
    <ul>
       <li v-for="article in articles">
          {{article.title}}
       </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'app',
  data () {
    return {
      author: 'by',
      articles: []
    }
  },
  mounted: function() {
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {
          },
          emulateJSON: true
      }).then(function(response) {
           this.articles = response.data.subjects
      }, function(response) {
           console.log(response)
      });
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
