<template>
  <div class="content">
    <p v-for="afgang in afgange" :key="afgang.id"><b>{{afgang.time}}</b> {{afgang.name}} {{afgang.stop}} - {{afgang.direction}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      afgange: [],
    }
  },
  methods: {
    getDepartures() {
      this.afgange = [];
      axios
        .get('http://localhost:3000/transport')
        .then(response => {
          this.afgange = response.data.MultiDepartureBoard.Departure.slice(0,10);
        })
      
    }
  },
  created() {
    this.getDepartures();
    this.interval = setInterval(() => this.getDepartures(), 60000)
  }
}
</script>

<style scoped>
.content {
  width: 30%;
  align-items: flex-start;
}

p {
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;
}
</style>