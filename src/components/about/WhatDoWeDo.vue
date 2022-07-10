<template>
  <div>
    <div id="head">
      <h1>What Do We Do?</h1>
    </div>

    <el-row>
      <el-col :span="12" class="block-col">
        <img
          src="https://static.wixstatic.com/media/cba70e5cb55249da9c15e20333071cc0.jpg"
          style="height: 550px; width: 100%"
        />
      </el-col>
      <el-col :span="12" class="text-wrapper block-col">
        <h2>Our Mission</h2>
        <div class="text-wrapper-inner">
          <p>
            Our goal is to promote STEMM equalities and tech diversities in the
            long term, while STEMM stands for Science, Technologies,
            Engineering, Mathematics, Medicine.
          </p>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12" class="text-wrapper block-col">
        <h2>Our Vision</h2>
        <div class="text-wrapper-inner">
          <p>
            We aim to build an open-minded home community for everyone to get
            inspired, to have the equal access of STEMM and technologies, as
            well as to think out of boxes and to be part of innovations.
          </p>
        </div>
      </el-col>
      <el-col :span="12" class="block-col">
        <img
          src="https://static.wixstatic.com/media/11062b_2e268f5679d8466aa20db6acd69774fb~mv2.jpg"
          style="height: 550px; width: 100%"
        />
      </el-col>
    </el-row>

    <div class="image-wrapper">
      <img
        src="../../assets/what-do-we-do/pic_session.png"
        style="width: 100vw; max-width: 100%; min-width: 1080px"
      />
    </div>

    <div class="our-belief">
      <h2>Our Belief</h2>
      <div style="display: flex; align-items: center; justify-content: center">
        <p>
          We believe all human beings can embrace who they are, can define their
          future, and can change the world, regardless of backgrounds, races,
          ethnicity, gender, religion, social standing, income levels etc.
        </p>
      </div>
    </div>

    <el-row class="value">
      <el-col :span="8" style="height: 400px">
        <img
          src="https://static.wixstatic.com/media/11062b_77378fc0da68439ebd8fd24a2f51e50cf000.jpg"
          style="height: 100%"
        />
      </el-col>
      <el-col :span="16" style="height: 400px">
        <div class="image-wrapper" style="height: 100%">
          <img
            src="../../assets/what-do-we-do/pic_value.png"
            style="height: 100%; min-width: 720px"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "what-do-we-do",
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

.block-col {
  height: 550px;
}

.text-wrapper {
  height: 550px;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}

.text-wrapper h2 {
  line-height: 4em;
}

.text-wrapper p {
  font-size: 22px;
  text-align: justify;
  line-height: 1.8em;
  width: 400px;
  overflow: inherit;
}

.text-wrapper-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
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

#our-value {
  width: 100%;
  height: 100%;
  float: left;
  background-image: url("~/src/assets/what-do-we-do/pic_value.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
}
</style>