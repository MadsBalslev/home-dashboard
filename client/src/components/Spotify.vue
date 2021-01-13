<template>
  <div class="content">
    <img class="cover" :src="coverImg" alt="">
    <span class="toprow"><p><b>{{songName}}</b></p><p>{{isPlaying ? 'Playing' : 'Paused'}}</p></span>
    <p>{{artist}}</p>
    <p>{{albumName}}</p>
    <div class="playback">
      <p>{{playMin}}:{{playSec}} / {{durMin}}:{{durSec}}</p>
      <div class="playbar"> 
        <div class="progress" :style="{width: (playtime / duration) * 100 + '%'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import convertToMin from '@/utils/convertToMin.js'

export default {
  data() {
    return {
      isPlaying: false,
      songName: '',
      albumName: '',
      artist: '',
      coverImg: '',
      playtime: 0,
      duration: 0,
      playMin: 0,
      playSec: 0,
      durMin: 0,
      durSec: 0
    }
  },
  methods: {
    getTrackInfo () {
      axios
        .get('http://localhost:3000/spotify')
        .then(response => {
          const info = response.data;

          this.isPlaying = info.is_playing;
          this.songName = info.item.name;
          this.albumName = info.item.album.name;
          this.artist = info.item.artists[0].name;
          this.coverImg = info.item.album.images[0].url;
          this.playtime = Math.round(info.progress_ms / 1000);
          this.duration = Math.round(info.item.duration_ms / 1000);

          this.convertTime(Math.round(info.item.duration_ms / 1000));
        })
    },
    convertTime(time) {
      let sec = time % 60;
      let min = Math.floor(time / 60)

      if (min < 10) {
        min = `0${min}`
      }

      if (sec < 10) {
        sec = `0${sec}`
      }

      this.durSec = sec;
      this.durMin = min;
    }
  },
  watch: {
    playtime: function(time) {
      let sec = time % 60;
      let min = Math.floor(time / 60)

      if (min < 10) {
        min = `0${min}`
      }

      if (sec < 10) {
        sec = `0${sec}`
      }

      this.playSec = sec;
      this.playMin = min;
    }
  },
  created() {
    this.getTrackInfo();
    this.interval = setInterval(() => this.getTrackInfo(), 500)
  }
}
</script>

<style scoped>
p {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 300;
}

.content {
  width: 25%;
  align-items: flex-start;
}

.cover {
  height: auto;
  width: 100%;
}

.toprow {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.playback {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
}

.playbar {
  width: 100%;
  background: white;
}

.progress {
  height: 3px;
  background-color: red;
}
</style>