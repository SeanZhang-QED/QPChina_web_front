<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <body>
    </body>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'monterrat', sans-serif;
}

header {
  width: 100vw;
  background-color: black;
  padding: 15px;
}
</style>
