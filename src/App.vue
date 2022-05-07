<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <div class="body">
      <div class="router-view">
        <!-- <router-view></router-view> -->
        <h1> {{ $route.path }} </h1>
        <Home :style="{display: $route.name == 'home' ? 'initial' : 'none'}" />
        <AllEvent :style="{display: $route.name == 'all-event' ? 'initial' : 'none'}" />
        <LiveEvent :style="{display: $route.name == 'live-event' ? 'initial' : 'none'}" />
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
  box-sizing: border-box;
}

.body {
  width: 100vw;
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
  width: 100vw;
  padding: 3px;
  background-color: black;
}
</style>
