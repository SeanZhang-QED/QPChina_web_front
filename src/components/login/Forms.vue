<template>
  <div class="root">
    <div class="form">
      <h1>{{ selectedForm === "signup-form" ? "Sign Up" : "Log in" }}</h1>
      <div style="margin-bottom: 32px">
        <span style="font-weight: lighter">
          {{
            selectedForm === "signup-form"
              ? "Already a member?"
              : "New to this site?"
          }}
        </span>
        <button class="switch-btn" @click="handleSwitch()">
          {{ selectedForm === "signup-form" ? "Log in" : "Sign Up" }}
        </button>
      </div>
      <keep-alive>
        <component :is="selectedForm" @handle-reload="$emit('handle-reload', $event)"></component>
      </keep-alive>
    </div>
    <div class="detail">
      <p v-if="selectedForm === 'signup-form'" style="font-weight: lighter">
        Join this site's community.
        <u class="show-more-btn" @click="handleShowMore">
          {{ !isShowMore ? "Read More" : "Show Less" }}
        </u>
      </p>
      <div class="details" v-if="isShowMore">
        <p>
          Connect with members of our site. Leave comments, follow people and
          more.
        </p>
        <p>
          Your nickname, profile image, and public activity will be visible on
          our site.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import { isEmail } from '../utils/validate.js';
import LoginForm from "../login/LoginForm.vue";
import SignupForm from "../login/SignUpForm.vue";

export default {
  name: "log-form",
  components: {
    LoginForm,
    SignupForm,
  },
  data() {
    return {
      selectedForm: 'login-form',
      isSignup: false,
      isShowMore: false,
    };
  },
  methods: {
    handleSwitch() {
      this.isSignup = !this.isSignup;
      if (this.isSignup) {
        this.selectedForm = 'signup-form';
      } else {
        this.selectedForm = 'login-form';
        this.isShowMore = false;
      }
    },
    handleShowMore() {
      this.isShowMore = !this.isShowMore;
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  widows: 540px;
  color: black;
  text-align: center;
}

h1 {
  font-size: 48px;
  margin-top: 10px;
  margin-bottom: 24px;
}

span {
  font-size: 18px;
  margin: 0 4px;
}

.form {
  width: 400px;
  margin: auto;
}

.details {
  width: 100%;
}

.switch-btn {
  font-family: inherit;
  font-size: 18px;
  color: #c84869;
  text-align: center;
  border-width: 0;
  background-color: transparent;
  outline: none;
}

.details {
  width: 540px;
  font-size: 15px;
  font-weight: lighter;
}

/* Using a <u> element to mimic button */
.show-more-btn {
  font-weight: normal;
}

.show-more-btn:hover,
.show-more-btn:active,
.switch-btn:hover,
.switch-btn:active {
  cursor: pointer;
}
</style>
