<template>
  <div id="app">
    <div class="app-header">
      <Navbar 
        @handle-login-open="handleLoginOpen"
        @handle-logout="handleLogout"
        :isAuth="isAuth"
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
          <Forms @handle-reload="handleLoginClose"/>
      </el-dialog>
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Forms from "./components/login/Forms.vue";

export default {
  name: "App",
  data() {
    return {
      isAuth:false,
      isLoginClicked: false
    };
  },
  methods: {
    handleLoginOpen() {
      this.isLoginClicked = true;
    },
    handleLogout() {
      this.isAuth = false;
    },
    handleLoginClose() {
      this.isAuth = true;
      this.isLoginClicked = false;
    },
  },
  components: {
    Navbar,
    Forms,
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
  /* cursor:pointer */
}

body {
  /* 解决页面dialog出现时，页面padding增加，和页面滚动条消失造成的画面抖动 */
  padding-right: 0 !important;
  overflow-y: auto !important;
  min-width: 1080px; 
}

.app-body {
  height: auto;
  font-family: "monterrat", sans-serif;
  background-image: url(https://static.wixstatic.com/media/9626a4_69ec6d841d774abd99efee7dbea4fcd7~mv2.jpg);
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
  top: calc(35% - 230px);
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
