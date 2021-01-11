<template>
  <Weather />
</template>

<script>
import Weather from '@/components/weather.vue';

export default {
  components: {
    Weather,
  }
}
</script>

<style lang="scss">
html {
  background-color: #0E131F;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FDFFF7;
}
</style>
