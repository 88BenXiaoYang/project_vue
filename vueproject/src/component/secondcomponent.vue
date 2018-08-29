<template>
<el-card class="box-card">
  <div id="secondcomponent" slot="header" class="clearfix">
    <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
    <div v-for="article in articles" class="text item">
       {{article.title}}
    </div>
  </div>
</el-card>
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
