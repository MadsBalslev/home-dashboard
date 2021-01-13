<template>
  <div class="content">
    <p v-for="article in articles.slice(0,10)" :key="article.title">{{article.title}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    getNews() {
      axios
        .get('http://localhost:3000/news')
        .then(response => {
          this.articles = response.data.items;
        })
    }
  },
  created() {
    this.getNews();
    this.interval = setInterval(() => this.getNews(), 900000)
  }
}
</script>

<style scoped>
.content {
  width: 70%;
  align-items: flex-start;
}
p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300;
}
</style>