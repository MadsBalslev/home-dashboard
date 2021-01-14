<template>
  <div class="content">
    <h1>{{hour}}:{{minute}}</h1>
    <p>{{weekDay}} {{dateStr}}</p>
  </div>
</template>

<script>
import getWeekDay from '@/utils/getWeekDay.js'

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
      const options = { year: 'numeric', month: 'short', day: 'numeric'};

      const weekDay = getWeekDay(today, 'long');
      this.weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);

      let hour = today.getHours();
      hour = ("0" + hour).slice(-2);

      let minute = today.getMinutes();
      minute = ("0" + minute).slice(-2);

      this.hour = hour;
      this.minute = minute;

      this.dateStr = today.toLocaleDateString('da-DK', options)
    }
  },
  created() {
    this.interval = setInterval(() => this.getCurrentTime(), 1000)
  }
}
</script>

<style scoped>
.content {
  width: 100%;
}

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