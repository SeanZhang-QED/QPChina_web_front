<template>
  <div class="admin-page">
    <AdminLogin 
      v-if="!this.loggedIn" 
      @handle-login-on-success="handleLoginOnSuccess" 
    />
    <AdminPanel 
      v-else
      @handle-logout="handleLogout"
    />
  </div>
</template>

<script>
import AdminLogin from "./AdminLogin.vue";
import AdminPanel from "./AdminPanel.vue";

export default {
  name: "admin-page",
  components: {
    AdminLogin,
    AdminPanel
  },
  data() {
    return {
      loggedIn: true,
    };
  },
  methods: {
    handleLoginOnSuccess() {
      console.log("Admin logged in.")
      this.loggedIn = true;
    },
    handleLogout() {
      console.log("Current Admin logged out.")
      this.loggedIn = false;
    },
  },
};
</script>

<style scoped>
.admin-page {
  height: calc(100vh - 64px);
  position: relative;
}
</style>