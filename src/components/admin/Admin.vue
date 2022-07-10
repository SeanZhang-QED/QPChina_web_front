<template>
  <div class="admin-page">
    <div class="admin-content">
        <div v-if="!this.loggedIn">
            {{ "login form here" }}
        </div>
        <div v-else>
            {{ "Admin panels here"}}
        </div>
    </div>  
  </div>
</template>

<script>
export default {
    name: "admin-page",
    data() {
        return {
            loggedIn: true
        }
    },
}
</script>

<style scoped>
.admin-page {
    height: calc(100vh - 64px);
}

.admin-content {
    margin: auto;
    width: 1000px;
    height: calc(100vh - 64px);
    background-color: white;
}

</style>