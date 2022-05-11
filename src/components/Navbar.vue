<template>
  <nav>
    <div>
      <el-button icon="el-icon-user-solid" type="plain" plain>Login</el-button>
    </div>
    <div class="menu-item"><router-link to="/" exact>Home</router-link></div>
    <div class="dropdown">
      <button class="menu-item"><a href="#">Event</a></button>
      <ul class="dropdown-menu">
        <router-link to="/all-event" exact tag="li">All event</router-link>
        <router-link to="/live-event" exact tag="li">Live event</router-link>
      </ul>
    </div>
    <div class="dropdown">
      <button class="menu-item"><a href="#">About us</a></button>
      <ul class="dropdown-menu">
        <li>What do we do</li>
        <li>Program overview</li>
        <li>Why we exist</li>
        <li>Milestones</li>
        <li>Founder's message</li>
        <li>Our team</li>
      </ul>
    </div>
    <div class="menu-item"><a href="#">Blogs</a></div>
    <div class="dropdown">
      <button class="menu-item"><a href="#">Governance</a></button>
      <ul class="dropdown-menu">
        <li>Corporated and Board policies</li>
        <li>Board and Committee</li>
      </ul>
    </div>
    <div class="menu-item"><a href="#">Opportunities</a></div>
    <div class="menu-item"><a href="#">Support Us</a></div>
    <div class="dropdown">
      <button class="menu-item"><a href="#">Follow Us</a></button>
      <ul class="dropdown-menu">
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Tictok</li>
        <li>Youtube</li>
      </ul>
    </div>
    <div class="menu-item donation"><a href="#">Donate</a></div>
  </nav>
</template>

<script>
export default {
  name: "Nav-bar"
};
</script>

<style scoped>
* {
  list-style: none;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .donation {
  background-color: #f7cbd8;
  position: relative;
  text-align: center;
  /* border: 1px solid #f7cbd8; */
  border-radius: 6px;
}

nav .menu-item {
  color: #f7cbd8;
  margin-left: 3px;
  padding: 15px 15px;
  position: relative;
  text-align: center;
  display: flex;
  transition: 0.4s;
}

nav button {
  background-color: transparent;
  border: none;
}

nav .menu-item a.active,
nav .menu-item a:hover {
  color: #f5a6bd;
}

nav .donation a.active,
nav .donation a:hover {
  color: white;
}

nav .donation.active,
nav .donation:hover {
  background-color: #f5a6bd;
}

nav .menu-item a {
  color: inherit;
  font-size: 16px;
  font-family: "monterrat", sans-serif;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
}

nav .donation a {
  color: #333333;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
}

nav .dropdown-menu {
  position: absolute;
  padding: 0.75rem;
  top: 58px;
  border-radius: 0.25rem;
  background-color: #333333;
  display: none;
}

nav .dropdown > button:hover + .dropdown-menu,
nav .dropdown-menu:hover {
  display: initial;
}

nav .dropdown-menu li {
  color: #f7cbd8;
  font-weight: bold;
  padding: 4px;
  text-align: center;
}

nav .dropdown-menu li.active,
nav .dropdown-menu li:hover {
  color: #f5a6bd;
}

.el-button {
  padding: 15px 15px;
  font-size: 16px;
  color: white;
  background-color: transparent;
}

.el-button.is-plain:focus, 
.el-button.is-plain:hover {
  color: darkgray;
  background-color: transparent;
}
</style>