<template>
  <div class="background">
    <button id="back" @click="jump('')"> &lt; Back </button>

    <div class="directive">
      <button @click="jump(id - 1)" :disabled="id === '2'">Previous</button>
      <button @click="jump(Number(id) + 1)" :disabled="id === length">Next</button>
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
      length: '416',
      entry: {},
      demo: {
        title: "Space Medicine & Astronautics w Dr Shawna Pandya",
        about: "Space medicine is the practice of medicine on astronauts in outer space whereas astronautical hygiene is the application of science and technology to the prevention or control of exposure to the hazards that may cause astronaut ill health.",
        speaker: "Shawna Pandya, MD has recently been named as one of The 50 Explorers Changing the World 2022 for her work in Space Medicine & Astronautics. She is a physician, aquanaut, skydiver, pilot in training, VP of Immersive Medicine, Director of Medical Research, a podcast host in World Extreme Medicine, Director of the Space Medicine Group. She was on the first crew to test a commercial spaceport in zero gravity in 2015. She earned her aquanaut designation during the 2018 nautical experiments in physiology technology and underwater exploration (Neptune) mission.",
        event_link: "https://www.clubhouse.com/room/PYLponnO?utm_medium=ch_room_xerc&utm_campaign=ZfS41K_ikwwI2wLk-gY1Yw-138856",
        video_link: "https://static.wixstatic.com/media/f42798_b84ce5b377e14e8e8a2a7ed9b524e2a5f000.jpg/v1/fill/w_1526,h_2035,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f42798_b84ce5b377e14e8e8a2a7ed9b524e2a5f000.jpg",
      },
      isDisabled: false
    }
  },
  watch:{
    $route: {
      handler(){
        this.id = this.$route.params.id;
        console.log(typeof this.id)
        this.getData(this.id)
      },
      immediate: true
    },
  },

  methods: {
    jump(id) {
      this.$router.push({path:`/all-event/${id}`})
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
  }
};
</script>

<style scoped>
.background {
  background-color: #F7cBD8
}

div {
  height: 100vh
}

h1 {
  color: black;
}

button{
  border: none;
  cursor: pointer;
}

#back {
  background-color: transparent;
  font-size: 16px;
  font: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496, avenir-lt-w05_35-light, sans-serif;
  padding: 50px;
}

.directive > button{
  color: #ffffff;
  background-color: #323232;
  padding: 20px;
  margin: 50px;
}



</style>