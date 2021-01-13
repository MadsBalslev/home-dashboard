<template>
  <div class="content">
    <div class="weather">
      <span class="title"><h1>{{Math.round(temp)}}°<img :src="`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`" alt=""></h1></span>
      <p>{{city}}, {{country}}</p>
    </div>
    <div class="forecast">
      <div class="forecast-day" v-for="forecast in forecast" :key="forecast.dt">
        <p>{{getDay(forecast.dt)}}</p>
        <img class="icon-small" :src="`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`" alt="">
        <p>{{Math.round(forecast.temp.max)}}°</p>
        <p>{{Math.round(forecast.temp.min)}}°</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import isToday from '@/utils/isToday.js'
import getWeekDay from '@/utils/getWeekDay.js'

export default {
  name: 'Weater',
  data() {
    return {
      temp: '-',
      city: '',
      country: '',
      weatherIcon: '01d',
      forecast: [],
      interval: null
    }
  },
  methods: {
    getDay(unix) {
      const date = new Date(unix * 1000);
      const day = getWeekDay(date, 'short');
      return day.charAt(0).toUpperCase() + day.slice(1);
    },
    getLocation() {
      axios
        .get('http://localhost:3000/weather/location')
        .then(response => {
          const location = response.data.results[0].components;
          this.city = location.city;
          this.country = location.country;
        })
    },
    getForecast() {
      axios
        .get('http://localhost:3000/weather')
        .then(response => {
          const forecast = response.data.daily;
          this.forecast = forecast;
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
      this.getForecast();
    },
  },
  created() {
    this.getWeather();
    this.getLocation();
    this.interval = setInterval(() => this.getWeather(), 900000);
  }
}
</script>

<style scoped>
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

.content {
  align-items: flex-start;
}

.weather {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.forecast {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.forecast-day {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.forecast-day p {
  flex: 1;
}

.icon-small {
  margin-right: 20px;
  height: 40px;
  width: auto;
}
</style>