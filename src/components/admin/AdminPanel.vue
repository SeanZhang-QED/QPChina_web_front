<template>
  <el-container
    style="height: 100%; minWidth: 1080px; maxWidth: 1200px; margin: auto; border: 1px solid #eee"
  >
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>Follower</template
          >
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>Events</template>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>Blogs</template>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; ">
        <el-dropdown @command="handleLogoutCommand">
          <i class="el-icon-setting" style="margin-right: 15px; font-size: 20px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">Log out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main style="background-color: white; ">

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "admin-panel",
  methods: {
    handleLogoutCommand(command) {
      if (command === "logout") {
        console.log("Click log out");
        this.$emit("handle-logout");
        return;
      }
    },
  },
};
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    line-height: 60px;
  }
  
.el-aside {
  color: #333;
}
</style>