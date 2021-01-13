<template>
  <div class="container">
    <Weather />
    <Clock />
  </div>
</template>

<script>
import Weather from '@/components/Weather.vue';
import Clock from '@/components/Clock.vue';

export default {
  components: {
    Weather,
    Clock
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
  background-color: #0E131F;
}

#app {
  height: calc(100vh - 50px);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FDFFF7;
}

.container {
  display: flex;
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
</style>
