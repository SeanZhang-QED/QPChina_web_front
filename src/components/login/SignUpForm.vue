<template>
  <el-form :model="signUpForm" status-icon :rules="rules" ref="signUpForm">
    <el-form-item label="Username" prop="username" :required="true">
      <el-input type="text" v-model="signUpForm.username"> </el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email" :required="true">
      <el-input type="text" v-model="signUpForm.email"> </el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass" :required="true">
      <el-input type="text" v-model="signUpForm.pass" show-password> </el-input>
    </el-form-item>
    <el-form-item>
      <el-col :span="20" style="padding-right: 12px">
        <el-form-item label="Full name" prop="fullname">
          <el-input type="text" v-model="signUpForm.fullname"> </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <el-form-item label="Age" prop="age">
          <el-input type="text" v-model="signUpForm.age"> </el-input>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Phone number" prop="phone">
      <el-input type="tel" v-model="signUpForm.phone"> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 400px" plain @click="submitForm('signUpForm')">
        Sign Up
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { isEmail, isUsername } from "@/utils/validate";
import axios from "axios";


export default {
  name: "signup-form",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value.length != 0) {
        if (value.length > 50) {
          callback(new Error("Use a shorter one as your username."));
        } else if (!isUsername(value)) {
          callback(
            new Error("Username should start with a letter and only contains letters and numbers.")
          );
        }
      }
      callback();
    };
    var validateEmail = (rule, value, callback) => {
      if (value.length != 0) {
        if (value.length > 50) {
          callback(new Error("Please use a shorter email address."));
        } else if (!isEmail(value)) {
          callback(new Error("Please input a VALID email address."));
        }
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value.length != 0 && value.length < 8) {
        callback(new Error("Password's length should be greater then 8."));
      }
      callback();
    };
    return {
      signUpForm: {
        email: '',
        pass: '',
        username: '',
        fullname: '',
        phone: '',
        age: '',
      },
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        email: [{ validator: validateEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.signUpForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          /* send http request to the backend server here */
          const opt = {
            method: 'POST',
            url: `/signup`,
            data: {
              email: this.signUpForm.email,
              password: this.signUpForm.pass,
              username: this.signUpForm.username,
              fullname: this.signUpForm.fullname,
              age: this.signUpForm.age,
              phone: this.signUpForm.phone,
            },
            headers: { 'Content-Type': 'application/json' },
          };
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          axios(opt)
            .then(() => {
                this.$notify({
                    title: 'SignUp Success',
                    message: 'some message',
                    type: 'success',
                    position: 'bottom-left',
                });
                this.$emit('handle-reload');
            })
            .catch(() => {
              this.$notify.error({
                title: 'Signup Failed',
                message: 'Errors occured, please try again.',
                position: 'bottom-left',
              });
            })
            .finally(() => {
                loading.close();
            });
        } else {
          this.$notify.error({
            title: 'Submit Failed',
            message: 'Errors occured in the input fields.',
            position: 'bottom-left',
          });
        }
      });
    },
  },
};
</script>

<style scoped>
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
</style>