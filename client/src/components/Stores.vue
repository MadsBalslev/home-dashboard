<template>
  <div class="content">
    <h2>Butikker</h2>
    <div class="store" v-for="store in sortedArray.slice(0,6)" :key="store.id">
      <div class="name">
        <p>{{ store.name }}</p>
      </div>
      <div class="status">
        <p>
          {{ closingTime(store.closingTime) }} {{ store.closed ? "⛔" : "✅" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      stores: [],
    }
  },
  methods: {
    isClosed(openingTime, closingTime) {
      const open = Date.parse(openingTime);
      const close = Date.parse(closingTime);
      const now = Date.now();

      return now > close || now < open ? true : false;
    },
    getDSGStores() {
      axios
        .get('http://localhost:3000/stores/dsg')
        .then(response => {
          response.data.map(store => {
            if (store.brand != 'br') {
              const newStore = {
                id: store.id,
                name: store.name,
                closed: store.hours[0].closed,
                closingTime: store.hours[0].close,
                distance: this.distanceFromMe(store.coordinates[1], store.coordinates[0]),
              }

              this.stores.push(newStore);
            }
          })
        })
    },
    getCOOPStores() {
      axios
        .get('http://localhost:3000/stores/coop')
        .then(response => {
          response.data.Data.map(store => {
            const newStore = {
              id: store.StoreId,
              name: store.Name,
              closed: this.isClosed(store.OpeningHours[0].FromDate, store.OpeningHours[0].ToDate),
              closingTime: store.OpeningHours[0].ToDate,
              distance: this.distanceFromMe(store.Location.coordinates[1], store.Location.coordinates[0])
            }

            this.stores.push(newStore);
          })
        })
    },
    async getStores() {
      this.stores = [];
      await this.getDSGStores();
      await this.getCOOPStores();
    },
    closingTime(t) {
      if (t) {
        const ms = Date.parse(t);
        const time = new Date(ms);
        return time.toLocaleString("da-DK", {hour: "numeric", minute: "numeric"})
      }
    },
    distanceFromMe(x1, x2) {
      const meLat = 57.052631;
      const meLon = 9.902810;

      const distance = Math.sqrt(((meLon - meLat) ** 2) + ((x2 - x1) ** 2));

      return distance;
    }
  },
  computed: {
    sortedArray: function() {
      return this.stores.sort((a,b) => (a.closed && !b.closed) ? 1 : ((b.closed && !a.closed) ? -1 : 0));
    }
  },
  created() {
    this.getStores();
    this.interval = setInterval(() => this.getStores(), 300000)
  }
}
</script>

<style scoped>
.content {
  margin-top: 25px;
  width: 100%;
}

.store {
  display: flex;
  width: 100%;
  text-align: left;
  margin-top: 20px;
}

.store p {
  font-size: 20px;
  font-weight: 300;
}

.name {
  flex: 1;
}

.status {
  flex: 1;
  text-align: right;
}
</style>