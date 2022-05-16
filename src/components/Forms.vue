<template>
  <div class="root">
    <div class="form">
      <h1>{{ isSignup ? "Sign Up" : "Log in" }}</h1>
      <div style="margin-bottom: 32px">
        <span style="font-weight: lighter">
          {{ isSignup ? "Already a member?" : "New to this site?" }}
        </span>
        <button class="switch-btn" @click="handleSwitch">
          {{ isSignup ? "Log in" : "Sign Up" }}
        </button>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item label="Email" prop="email">
          <el-input type="text" v-model="ruleForm.email"> </el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input type="text" v-model="ruleForm.pass" show-password>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 320px" plain @click="submitForm('ruleForm')">
            {{ isSignup ? "Sign Up" : "Log in" }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="detail">
      <p v-if="isSignup" style="font-weight: lighter">
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
import { isEmail } from "@/utils/validate";
import axios from "axios";

export default {
  name: "log-form",
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input your email address."));
      } else {
        if (!isEmail(value)) {
          callback(new Error("Please input a VALID email address."));
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input your password."));
      } else {
        if (value.length < 8) {
          callback(new Error("Password's length should be greater then 8."));
        }
        callback();
      }
    };
    return {
      isSignup: true,
      isShowMore: false,
      ruleForm: {
        email: "",
        pass: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleSwitch() {
      this.isSignup = !this.isSignup;
      if (!this.isSignup) {
        this.isShowMore = false;
      }
    },
    handleShowMore() {
      this.isShowMore = !this.isShowMore;
    },
    submitForm(formName) {
      // console.log(this.ruleForm);
      // console.log("email is " + this.ruleForm.email);
      // console.log("password is " + this.ruleForm.pass);

      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* send http request to the backend server here */
          let requestMethod = this.isSignup ? "POST" : "GET";
          let requestUrl = this.isSignup ? `/signup` : `/login`;
          const opt = {
            method: requestMethod,
            url: requestUrl,
            data: {
              email: this.ruleForm.email,
              password: this.ruleForm.pass,
            },
            headers: { "Content-Type": "application/json" },
          };
          axios(opt)
            .then(() => {
              /* TODO: How to handle login or sign up success */
            })
            .catch(() => {
              /* TODO: Define what does the bad request retrun, and how to render the error */
            })
            .finally(() => {
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
  width: 320px;
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

.el-button,
.el-button.is-plain:focus,
.el-button.is-plain:hover {
  color: white;
  background-color: #c84869;
}

/* 父组件的 scoped 样式不能穿透到子组件上 */
/* using /deep/ or >>> 避免使用非 scoped Style 污染全局样式 */
/* .child /deep/ or >>> selector { } */
.el-input >>> .el-input__inner {
  border-width: 0 0 1px 0;
  border-radius: 0;
}

.el-input >>> .el-input__inner:focus {
  border-color: #c84869;
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
.show-more-btn:active {
  cursor: pointer;
}
</style>
