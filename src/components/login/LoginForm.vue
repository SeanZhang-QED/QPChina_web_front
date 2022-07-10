<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
    <el-form-item label="Email/Username/Phone" prop="email">
      <el-input type="text" v-model="ruleForm.email"> </el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="text" v-model="ruleForm.pass" show-password> </el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="width: 400px" plain @click="submitForm('ruleForm')">
        Log in
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { isEmail, isUsername, isPhone } from "@/utils/validate";
import axios from "axios";
import { BASE_URL } from '@/utils/constants';

export default {
  name: "log-in-form",
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value.length == 0) {
        callback(new Error("This filed cannot be emtpy."));
      } else {
        if (!isEmail(value) && !isUsername(value) && !isPhone(value)) {
          callback(
            new Error("Please enter a valid email address or username.")
          );
        }
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error("Please enter a valid password."));
      }
      callback();
    };
    return {
      asAdmin: false,
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
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) {
          this.$notify.error({title: "Submit Failed", message: "Errors occured in the input fields.", position: "bottom-left",});
          return;
        }
        /* send http request to the backend server here */
        let email = "", username = "", phone = "";
        if (isPhone(this.ruleForm.email)) {
          phone = this.ruleForm.email;
        } else if (isUsername(this.ruleForm.email)) {
          username = this.ruleForm.email;
        } else {
          email = this.ruleForm.email;
        }
        const loginUrl = `${BASE_URL}/login/user`;
        const opt = {
          method: "POST",
          url: loginUrl,
          headers: { "Content-Type": "application/json" },
          data: {
            email: email,
            username: username,
            phone: phone,
            password: this.ruleForm.pass,
          },
        };
        // console.log(opt);
        const loading = this.$loading({lock: true, text: "Loading", spinner: "el-icon-loading", background: "rgba(0, 0, 0, 0.7)",});
        axios(opt)
          .then((data) => {
            console.log(data);
            this.$notify({title: "Login Success", message: "Wecome back!", type: "success", position: "bottom-left",});
            this.$emit('handle-reload');
          })
          .catch((err) => {
            // which is out of the range of 2xx
            this.$notify.error({title: "Login Failed", message: `Failed to Login: ${err.message}, please check your credentials.`, position: "bottom-left",});
          })
          .finally(() => {
            loading.close();
          });
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