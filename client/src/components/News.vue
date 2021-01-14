<template>
  <div class="content">
    <div class="article" v-for="article in articles.slice(0, 10)" :key="article.title">
      <p>
        {{ article.title }}
        <span class="time">{{getTimeAgo(article.pubDate)}}</span>
      </p>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getNews() {
      axios.get("http://localhost:3000/news").then((response) => {
        this.articles = response.data.items;
      });
    },
    getTimeAgo(pubDate) {
      const time = Date.parse(pubDate);
      const now = Date.now();

      let secAgo = (now - time) / 1000;
      const hourAgo = Math.floor(secAgo / 3600);

      secAgo = secAgo % 3600;
      const minAgo = Math.floor(secAgo / 60);

      secAgo = secAgo % 60;

      if (hourAgo >= 1) {
        return `${hourAgo}t siden`
      } else if (minAgo >= 1) {
        return `${minAgo}m siden`
      } else {
        return '< 1m siden'
      }
    }
  },
  created() {
    this.getNews();
    this.interval = setInterval(() => this.getNews(), 60000);
  },
};
</script>

<style scoped>
.content {
  width: 65%;
  align-items: flex-start;
}
p {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 300;
}

.time {
  margin-top: 0px;
  font-size: 12px;
}
</style>