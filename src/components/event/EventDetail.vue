<template>
  <div class="background">
      <div class="content">
      <button id="back" @click="jump('')"> &lt; Back </button>
      <h1 style="font-size:46px; text-align:center" class="text">{{ demo.event_title }}</h1>
      <h4 class="text">About</h4>
      <p class="text">{{ demo.event_summary }}</p>
      <h4 class="text">Speaker - {{demo.speaker_name}} </h4>
      <p class="text">{{ demo.speaker_bio }}</p>
      <div style="text-align:center">
      <button id="event-link" @click="goToEventLink">Event Link</button>
      </div>
      <div class="directive">
      <button @click="jump(id - 1)" :disabled="id === '1'">Previous</button>
      <button @click="jump(Number(id) + 1)" :disabled="id === length">Next</button>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "event-detail",
  data() {
    return {
      id: '',
      length: '403',
      entry: {},
      demo: {
        event_title: "Space Medicine & Astronautics w Dr Shawna Pandya",
        event_summary: "Space medicine is the practice of medicine on astronauts in outer space whereas astronautical hygiene is the application of science and technology to the prevention or control of exposure to the hazards that may cause astronaut ill health.",
        speaker_name: "Shawana Pandya",
        speaker_bio: "Shawna Pandya, MD has recently been named as one of The 50 Explorers Changing the World 2022 for her work in Space Medicine & Astronautics. She is a physician, aquanaut, skydiver, pilot in training, VP of Immersive Medicine, Director of Medical Research, a podcast host in World Extreme Medicine, Director of the Space Medicine Group. She was on the first crew to test a commercial spaceport in zero gravity in 2015. She earned her aquanaut designation during the 2018 nautical experiments in physiology technology and underwater exploration (Neptune) mission.",
        event_link: "https://www.clubhouse.com/room/PYLponnO?utm_medium=ch_room_xerc&utm_campaign=ZfS41K_ikwwI2wLk-gY1Yw-138856",
        video_link: "https://static.wixstatic.com/media/f42798_b84ce5b377e14e8e8a2a7ed9b524e2a5f000.jpg/v1/fill/w_1526,h_2035,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f42798_b84ce5b377e14e8e8a2a7ed9b524e2a5f000.jpg",
      },
    }
  },
  watch: {
    $route: {
      handler() {
        this.id = this.$route.params.id;
        // console.log(typeof this.id)
        this.getData(this.id)
      },
      immediate: true
    },
  },
  methods: {
    jump(id) {
      this.$router.push({ path: `/all-event/${id}` })
    },
    getData(id) {
      // console.log(id)
      axios({
        method: 'get',
        url: '/event.json',
        params: {
          id
        }
      }).then(
        res => console.log(res.data)
      ).catch(() =>
        this.$notify.error({
          title: 'Error',
          message: 'Failed to fetch event data',
          position: 'bottom-left'
        })
      )
    },
    goToEventLink(){
      window.open(this.demo.event_link,"_blank")
    },
  }
};
</script>

<style scoped>
body{
   height: auto;
}
.background {
  background-color: #F7cBD8;
  min-height: 100vh;
  height: auto;
}


button {
  border: none;
  cursor: pointer;
}

#back {
  background-color: transparent;
  font-size: 16px;
  font: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif;
  padding-top: 27px;
}

.directive{
  display: flex;
  justify-content: space-around;
}
.directive>button {
  color: #ffffff;
  background-color: #323232;
  padding: 10px;
  margin-bottom: 30px;
  
}

h4{
  font: italic normal normal 34px/1.4em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;
  font-style: normal;
}

p{
  font: normal normal normal 18px/1.4em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;
  /* font-size: 23px; */
}

.content{
  width: 100%;
  height: 100%;
  padding-left: 400px;
  padding-right: 400px;

}

.text {
  margin-top: 30px;
  margin-bottom: 30px;
}

#event-link{
  padding: 20px;
  background-color: #C84869;
  font-size: 20px;
  color: white;
  margin: 0 30px 30px 30px
}


</style>