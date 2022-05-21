<template>
  <div id="app">
    <div class="app-header">
      <Navbar 
        @handle-login-open="handleLoginOpen"
      />
    </div>

    <div class="app-body">
      <el-dialog
        class="app-dialog"
        fullscreen
        :visible.sync="isLoginClicked"
        :before-close="handleLoginClose"
        style="overflow: hidden"
      >
        <Forms />
      </el-dialog>

      <div class="router-view">
        <!-- <router-view></router-view> -->
        <!-- <h1> {{ $route.path }} </h1> -->
        <Home v-if="$route.name == 'home'"/>
        <AllEvent v-if="$route.name == 'all-event'" />
        <LiveEvent v-if="$route.name == 'live-event'" />
        <WhatDoWeDo v-if="$route.name == 'what-do-we-do'"/>
		<Corporate1 v-if="$route.name == 'corporate-and-board-policies'"/>
		<Corporate2 v-if="$route.name == 'marketing-committee'"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import AllEvent from "./components/AllEvent.vue";
import LiveEvent from "./components/LiveEvent.vue";
import Forms from "./components/Forms.vue"
import WhatDoWeDo from "./components/WhatDoWeDo.vue";
import Corporate1 from "./components/Corporate1.vue";
import Corporate2 from "./components/Corporate2.vue";

export default {
  name: "App",
  data() {
    return {
      isLoginClicked: false
    };
  },
  methods: {
    handleLoginOpen() {
      this.isLoginClicked = true;
    },
    handleLoginClose() {
      this.isLoginClicked = false;
    }
  },
  components: {
    Navbar,
    Home,
    AllEvent,
    LiveEvent,
    Forms,
    WhatDoWeDo,
	Corporate1,
	Corporate2,
	},
}
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
  /* 解决页面dialog出现时，页面padding增加，和页面滚动条消失造成的画面抖动 */
  padding-right: 0 !important;
  overflow-y: auto !important;
  min-width: 1080px; 
}

.app-body {
  height: 300vh;
  font-family: "monterrat", sans-serif;
  background-image: url('../dist/img/background_galaxy.baab1ee4.jpg');
  background-size:cover;
  background-position-x: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.app-header {
  padding: 3px;
  background-color: black;
}

.el-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-dialog__body {
  position: fixed;
  top: calc(50% - 230px);
}

.el-dialog__headerbtn .el-dialog__close{
  font-size: 25px;
}

el-button:focus, 
el-button:hover {
  color: initial;
  background-color: initial;
}
</style>
