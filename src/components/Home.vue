<template>
  <div class="home-page">
    <div class="home-title-section">
      <div class="home-title-section-wrapper">
        <h1>QUANTUM PHOTONICS</h1>
        <hr>
        <h3>Empower Human Intelligence Worldwide <br> through STEMM</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
};
</script>

<style scoped>
.home-page {
  height: 100vh;
}

h1 {
  width: 1000px;
  font-size: 78px;
  font-family: "monterrat", sans-serif;
  color: white;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 6px;
}

h3 {
  width: 950px;
  font-size: 25px;
  font-weight: bold;
  line-height: 1.5em;
  color: white;
  text-align: right;
  margin: 0 auto;
  padding-top: 24px;
}

hr {
  border: 1px solid white;
  width: 950px;
  margin: 0 auto;
}

.home-title-section {
  height: 835px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>