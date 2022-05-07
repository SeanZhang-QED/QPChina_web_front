<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <div class="body">
      <div class="router-view">
        <!-- <router-view></router-view> -->
        <h1> {{ $route.path }} </h1>
        <Home v-if="$route.name == 'home'"/>
        <AllEvent v-if="$route.name == 'all-event'" />
        <LiveEvent v-if="$route.name == 'live-event'" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import AllEvent from "./components/AllEvent.vue";
import LiveEvent from "./components/LiveEvent.vue";

export default {
  name: "App",
  components: {
    Navbar, Home, AllEvent, LiveEvent
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  /* subtract the size of scrollbar: for window, it may be 12px - 20px, for chrome 16px*/
  width: 100vw - 20px;
  
  box-sizing: border-box;
}

body {
  /* to avoid the overflow of navbar */
  min-width: 1024px; 
}

.body {
  height: 100vh;
  font-family: "monterrat", sans-serif;
  background-image: url('assets/background_galaxy.jpg');
  background-size:cover;
  background-position-x: center;
  background-repeat:no-repeat;
  background-attachment:fixed;
}

.router-view {
  position: absolute;
  top: 50%;
  left: 45%;
}

header {
  padding: 3px;
  background-color: black;
}
</style>
