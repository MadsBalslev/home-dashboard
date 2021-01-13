<template>
  <div class="content">
    <h1>{{hour}}:{{minute}}</h1>
    <p>{{weekDay}} {{dateStr}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hour: '',
      minute: '',
      weekDay: '',
      dateStr: ''
    }
  },
  methods: {
    getCurrentTime() {
      const today = new Date();
      const options = { year: 'numeric', month: 'short', day: 'numeric' };

      const weekDay = today.toLocaleString('da-DK', {weekday: 'long'})
      this.weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

      this.hour = today.getHours();
      this.minute = today.getMinutes();

      this.dateStr = today.toLocaleDateString('da-DK', options)
    }
  },
  created() {
    this.interval = setInterval(() => this.getCurrentTime(), 1000)
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
</style>