<template>
    <nav>
        <div class="menu-item"><a href="#">Home</a></div>
        <div class="menu-item"><a href="#">Event</a></div>
        <div class="menu-item"><a href="#">About us</a></div>
        <div class="menu-item"><a href="#">Blogs</a></div>
        <div class="menu-item"><a href="#">Governance</a></div>
        <div class="menu-item"><a href="#">Opportunities</a></div>
        <div class="menu-item"><a href="#">Support Us</a></div>
        <div class="menu-item"><a href="#">Follow Us</a></div>
        <div class="menu-item donation"> </div>
    </nav>
</template>

<script>
export default {
    name:'Nav-bar'
}
</script>

<style>
nav {
    display:flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    color: #F7CBD8;
    padding: 8px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
} 

nav .menu-item a.active,
nav .menu-item a:hover {
    color: #F5A6BD;
}

nav .menu-item a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    white-space: nowrap;
}
</style>