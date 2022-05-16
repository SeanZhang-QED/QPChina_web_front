<template>
    <div>
        <div id="head">
            <h1>What Do We Do?</h1>
        </div>

        <div style="overflow: hidden">
            <div id="mountain-pic" class="block"></div>
            <div class="block">
                <div class="text-container">
                    <h2>
                        Our Mission
                    </h2>
                </div>
                <div class="text-container">
                    <p>
                        Our goal is to promote STEMM equalities and tech diversities in the long term, while STEMM
                        stands for
                        Science, Technologies, Engineering, Mathematics, Medicine.
                    </p>
                </div>
            </div>
        </div>

        <div style="overflow: hidden">
            <div class="block">
                <div class="text-container">
                    <h2>
                        Our Vision
                    </h2>
                </div>
                <div class="text-container">
                    <p>
                        We aim to build an open-minded home community for everyone to get inspired, to have the equal
                        access of
                        STEMM and technologies, as well as to think out of boxes and to be part of innovations.
                    </p>
                </div>
            </div>
            <div id="cabin-pic" class="block"></div>
        </div>

        <div id="session-container">
            <div id="session-pic"></div>
        </div>

        <div class="our-belief">
            <h2>Our Belief</h2>
            <div class="text-container">
                <p>We believe all human beings can embrace who they are, can define their future, and can change the
                    world,
                    regardless of backgrounds, races, ethnicity, gender, religion, social standing, income levels etc.
                </p>
            </div>
        </div>

        <div class="value">
            <div id="snow-mountain-pic"></div>
            <div>
                <div id="our-value"></div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "what-do-we-do"
};
</script>


<style scoped>
* {
    margin: 0;
}

h2 {
    color: #333333;
    font-size: 56px;
    white-space: nowrap;
}

#head h1 {
    font-size: 56px;
    height: 270px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.block {
    width: 50%;
    height: 550px;
    float: left;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 255, 255);
}

.block h2 {
    /*height: 300px;*/
    line-height: 4em;
}

.block p {
    font-size: 22px;
    text-align: justify;
    line-height: 1.8em;
    width: 400px;
    overflow: inherit;
}

.text-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

#mountain-pic {
    background-image: url("../assets/pic_mountain.jpg");
    background-size: cover;
    float: left;
}

#cabin-pic {
    background-image: url("../assets/pic_cabin.jpg");
    background-size: cover;
    float: left;
}

#session-container {
    width: 100vw;
    height: 70vw;
}

#session-pic {
    width: 100%;
    height: 100%;
    margin: auto;
    background-image: url("../assets/pic_session.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
}

.our-belief {
    height: 383px;
    background-color: rgb(204, 204, 204);
}

.our-belief h2 {
    line-height: 3em;
    text-align: center;
    height: 150px;
    font-size: 60px;
    color: rgb(51, 51, 51);
}

.our-belief p {
    color: #333333;
    width: 800px;
    font-size: 30px;
    height: 161px;
    text-align: justify;
}

#snow-mountain-pic {
    width: 40%;
    height: 460px;
    float: left;
    background-image: url("../assets/pic_snow.jpg");
    background-size: cover;
    background-color: orange;
}

#our-value {
    width: 60%;
    height: 460px;
    float: left;
    background-image: url("../assets/pic_value.png");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
}
</style>