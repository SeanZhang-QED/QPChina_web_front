<template>
  <nav>
    <div>
      <el-button
        icon="el-icon-user-solid"
        type="plain"
        plain
        @click="handleOpen"
      >
        Login
      </el-button>
    </div>
    <div class="menu-item"><router-link to="/" exact>Home</router-link></div>
    <div class="dropdown">
      <button class="menu-item">Event</button>
      <ul class="dropdown-menu">
        <router-link to="/all-event" exact tag="li">All event</router-link>
        <router-link to="/live-event" exact tag="li">Live event</router-link>
      </ul>
    </div>
    <div class="dropdown">
      <button class="menu-item">About us</button>
      <ul class="dropdown-menu">
        <router-link to="/what-do-we-do" exact tag="li">What Do We Do</router-link>
        <li>Program overview</li>
        <li>Why we exist</li>
        <li>Milestones</li>
        <li>Founder's message</li>
        <li>Our team</li>
      </ul>
    </div>
    <div class="menu-item"><a href="#">Blogs</a></div>
    <div class="dropdown">
      <button class="menu-item">Governance</button>
      <ul class="dropdown-menu">
		<router-link to="/corporate-and-board-policies" exact tag="li">Corporate and Board Policies</router-link>
		<router-link to="/marketing-committee" exact tag="li">Marketing Committee</router-link>
        
      </ul>
    </div>
    <div class="menu-item"><a href="#">Opportunities</a></div>
    <div class="menu-item"><a href="#">Support Us</a></div>
    <div class="dropdown">
      <button class="menu-item">Follow Us</button>
      <ul class="dropdown-menu">
        <li>
          <a
            href="https://www.linkedin.com/company/quantum-photonics-club/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com/qpclub1" target="_blank"> Twitter </a>
        </li>
        <li>
          <a href="https://www.facebook.com/qpclub1/" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/qphotonics/" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@qpclub" target="_blank"> Tictok </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCnDp5TqEh9ut3vL2F962igg"
            target="_blank"
          >
            Youtube
          </a>
        </li>
      </ul>
    </div>
    <div class="menu-item donation">
      <a
        href="https://www.convergepay.com/hosted-payments/?ssl_txn_auth_token=A%2BknWH0rQYeJ%2BapqVBZZ3QAAAX%2BPTHr4&recurring=#!/payment-method"
        target="_blank"
      >
        Donate
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav-bar",
  methods: {
    handleOpen() {
      this.$emit("handle-login-open");
    },
  },
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

a {
  text-decoration: none;
  white-space: nowrap;
}

nav .donation {
  background-color: #f7cbd8;
  position: relative;
  text-align: center;
  /* border: 1px solid #f7cbd8; */
  border-radius: 6px;
}

nav .menu-item {
  white-space: nowrap;
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

nav .menu-item:active,
nav .menu-item:hover {
  color: #f5a6bd;
}

nav .donation:active,
nav .donation:hover {
  background-color: #f5a6bd;
}

nav .donation a:active,
nav .donation a:hover {
  color: white;
}

nav .menu-item,
.menu-item a {
  color: #f7cbd8;
  font-size: 16px;
  font-family: "monterrat", sans-serif;
  font-weight: bold;
  
}

nav .donation a {
  color: #333333;
  font-size: 24px;
  font-weight: bold;
}

nav .dropdown-menu {
  position: absolute;
  padding: 0.75rem;
  top: 58px;
  border-radius: 0.25rem;
  background-color: #333333;
  display: none;
  z-index: 19999;
}

nav .dropdown > button:hover + .dropdown-menu,
nav .dropdown-menu:hover {
  display: initial;
}

nav .dropdown-menu li,
nav .dropdown-menu li a {
  color: #f7cbd8;
  font-weight: bold;
  padding: 4px;
  text-align: center;
}

nav .dropdown-menu li:active,
nav .dropdown-menu li:hover,
nav .dropdown-menu li a:active,
nav .dropdown-menu li a:hover {
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