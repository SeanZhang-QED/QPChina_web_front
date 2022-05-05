<template>
  <div id="app">
    <header>
      <Navbar />
    </header>

    <body>
      <Home :style="{display: $route.name == 'home' ? 'initial' : 'none'}" />
      <AllEvent :style="{display: $route.name == 'all-event' ? 'initial' : 'none'}" />
      <LiveEvent :style="{display: $route.name == 'live-event' ? 'initial' : 'none'}" />
    </body>
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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "monterrat", sans-serif;
  position: absolute;
  top: 50%;
  left: 45%;
}

header {
  width: 100vw;
  background-color: black;
  padding: 3px;
}
</style>
