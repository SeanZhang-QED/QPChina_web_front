<template>

<div class="background">
  <h1 style="font-size:56px;">All Events</h1>
      <div class="card">
      <img src="https://static.wixstatic.com/media/b3b6b4_091e3905d60d403d9f92f06d8c21fc8f~mv2.png/v1/fill/w_775,h_1033,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/past%20event%20poster.png">
      <div class="text">
        <h2 style="font-size:16px;">4/6/22</h2>
        <h2 style="font-size:25px;">Space Medicine & Astronautics w Dr Shawna Pandya</h2>
        <p style="font-size: 18px; text-align: left; width:315px;">Space medicine is the practice of medicine on astronauts in outer space whereas astronautical hygiene is the application of science and technology to the prevention or control of exposure to the hazards that may cause astronaut ill health.</p>
        <button>RSVP</button>
      </div>
    </div>
</div>
    
</template>

<script>
export default {
  name: "all-event",
  data(){
    return{
      events:[]
    }
  },
  beforeMount(){
      fetch().then((res)=>{this.events = res})
  },
  methods: {
  }
};
</script>

<style scoped>
.background{
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}

.card{
  margin: 50px;
  width: 804px;
  height: 570px;
  border: 1px solid;
  border-color: rgba(232,230,230,1);
  box-shadow: 0px 1px 4px 0px black;
}


.card:hover {
  transform: scale(1.1);
  transition: all 0.6s;
}

img{
  width: 50%;
  height: 100%;
  float: left;
}
.text{
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  text-align: center;
}
button{
  width:109px;
  height: 30px;
  background-color: #C84869;
  font-size: 20px;
  color: white;
  border: none;
}
</style>