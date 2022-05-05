<template>
    <nav>
        <div class="menu-item"><a href="#">Home</a></div>
        <div class="dropdown">
            <button class="menu-item"><a href="#">Event</a></button>
            <ul class="dropdown-menu">
                <li>All event</li>
                <li>Live event</li>
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
    name:'Nav-bar',
    components: {
    },
    data () {
    }
}
</script>

<style>
* {
    list-style: none;
}

nav {
    display:flex;
    align-items: center;
    justify-content: center;
}

nav .donation {
    background-color: #F7CBD8;
    position: relative;
    text-align: center;
    border: 1px solid #F7CBD8;
    border-radius: 6px;
}

nav .menu-item {
    color: #F7CBD8;
    padding: 15px 20px;
    position: relative;
    text-align: center;
    display: flex;
    transition: 0.4s;
}

nav button {
    background-color: black;
    border: none;
}

nav .menu-item a.active,
nav .menu-item a:hover {
    color: #F5A6BD;
}

nav .donation a.active,
nav .donation a:hover {
    color: white;
}

nav .donation.active,
nav .donation:hover {
    background-color: #F5A6BD;
}

nav .menu-item a {
    color: inherit;
    font-size: 16px;
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
    padding: .75rem;
    top: 58px; 
    border-radius: .25rem;
    background-color: #333333;  
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
    display: none;
}

nav .dropdown > button:hover + .dropdown-menu,
nav .dropdown-menu:hover {
    display: initial;
}

nav .dropdown-menu li {
    color: #F7CBD8;
    font-weight: bold;
    padding: 3px;
    text-align: center;
}

nav .dropdown-menu li.active,
nav .dropdown-menu li:hover {
    color: #F5A6BD;
}
</style>