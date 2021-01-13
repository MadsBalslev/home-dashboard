<template>
  <div class="content">
    <span class="title"><h1>{{temp}}°<img :src="`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`" alt=""></h1></span>
    <p>{{city}}, {{country}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Weater',
  data() {
    return {
      temp: '-',
      city: '',
      country: '',
      weatherIcon: '01d',
      interval: null
    }
  },
  methods: {
    getLocation() {
      axios
        .get('http://localhost:3000/weather/location')
        .then(response => {
          const location = response.data.results[0].components;
          this.city = location.city;
          this.country = location.country;
        })
    },
    getWeather() {
      console.log('Getting Weather');
      axios
        .get('http://localhost:3000/weather')
        .then(response => {
          const weather = response.data;
          this.weatherIcon = weather.current.weather[0].icon;
          this.temp = weather.current.temp;
        })
    },
  },
  created() {
    this.getWeather();
    this.getLocation();
    this.interval = setInterval(() => this.getWeather(), 900000);
  }
}
</script>

<style>
.title {
  height: 100%;
  display: flex;
  align-items: center;
}

h1 {
  padding: 0;
  font-size: 90px;
  font-weight: 900;
}

p {
  font-size: 25px;
  font-weight: 500;
}

img {
  height: 80px;
  width: 80px;
}
</style>