<template>

  <div class="background">
    <div class="box">
      <h1 style="font-size:56px; padding-top:50px">All Events</h1>
      <h1 style="font-size:17px; padding-top:20px ">with Thanks and Love</h1>
      <div class="card" v-for="item in events" :key="item.id">
        <img :src="`${item.image}`">
        <div class="text">
          <!-- can use momentjs to convert date format -->
          <!-- https://stackoverflow.com/questions/28949911/what-does-this-format-means-t000000-000z -->
          <h2 style="font-size:16px;">{{item.Event_Date}}</h2>
          <h2 style="font-size:25px;">{{item.Event_Title}}</h2>
          <p style="font-size: 18px; text-align: left; width:315px;">{{item.Event_Summary}}</p>
          <button>RSVP</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "all-event",
  data() {
    return {
      events: []
    }
  },
  mounted() {
    axios({
      method: 'get',
      url: '/event.json'
    }).then(res => {
      if (res.status === 200) {
        // console.log(res)
        this.events = res.data
        // console.log(this.events[0].image)
      }
    }).catch(() =>
    // console.log(err),
    this.$notify.error({
      title: 'Error',
      message: 'Failed to fetch event data',
      position: 'bottom-left'
      })
      );
  },
  methods: {

  }
};

</script>

<style scoped>
.background {
  height: auto;
  background-color: white;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  margin: 50px;
  width: 804px;
  height: 570px;
  border: 1px solid;
  border-color: rgba(232, 230, 230, 1);
  box-shadow: 0px 1px 4px 0px black;
  /* 当hover离开时，续上断掉的transition动画 */
  transition: all 0.4s ease-in-out 0s;
}

.card:hover {
  transform: scale(1.1);
  /* 只要元素本身带有transitioin，该动画便会从当前动画执行到的地方，
     以相同的时间返回原样。所以只用留元素本身的transition，comment了下面的代码 */
  /* transition: all 0.4s linear 0s; */
}

img {
  width: 50%;
  height: 100%;
  float: left;
}

.text {
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

button {
  width: 109px;
  height: 30px;
  background-color: #C84869;
  font-size: 20px;
  color: white;
  border: none;
}
</style>