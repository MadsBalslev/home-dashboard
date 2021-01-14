<template>
  <div class="container">
    <div class="top">
      <Weather />
      <div class="top-right">
        <Clock />
        <Stores />
      </div>
    </div>
    <div class="middle">
      <Spotify />
    </div>
    <div class="bottom">
      <News />
      <Transport />
    </div>
  </div>
</template>

<script>
import Weather from '@/components/Weather.vue';
import Clock from '@/components/Clock.vue';
import News from '@/components/News.vue'
import Transport from '@/components/Transport.vue'
import Spotify from '@/components/Spotify.vue';
import Stores from '@/components/Stores.vue';

export default {
  components: {
    Weather,
    Clock,
    News,
    Transport,
    Spotify,
    Stores
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: #000;
}

#app {
  height: calc(100vh - 50px);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFF;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: calc(100% - 50px);
  margin: 50px;
}

.content {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.break {
  flex-basis: 100%;
  height: 0;
}

.top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.top-right {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.middle {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
