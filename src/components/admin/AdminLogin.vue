<template>
  <div class="form-container">
    <el-form :model="form" status-icon ref="form" class="form">
      <el-form-item label="Admin Username" prop="email">
        <el-input type="text" v-model="form.email"> </el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="text" v-model="form.pass" show-password> </el-input>
      </el-form-item>
      <el-form-item class="login-btn">
        <div class="login-btn-container">
          <el-button style="width: 100px;" plain @click="submitForm()">
            Log in
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import axios from "axios";
import { BASE_URL } from "@/utils/constants";

export default {
  name: "admin-login",
  data() {
    return {
      form: {
        email: "",
        pass: "",
      },
    };
  },
  methods: {
    submitForm() {
      /* send http request to the backend server here */
      const loginUrl = `${BASE_URL}/login/admin`;
      const opt = {
        method: "POST",
        url: loginUrl,
        headers: { "Content-Type": "application/json" },
        data: {
          username: this.form.email,
          password: this.form.pass,
        },
      };
      console.log(opt);
      // const loading = this.$loading({
      //   lock: true,
      //   text: "Loading",
      //   spinner: "el-icon-loading",
      //   background: "rgba(0, 0, 0, 0.7)",
      // });
      // axios(opt)
      //   .then((data) => {
      //     console.log(data);
      //     this.$notify({
      //       title: "Login Success",
      //       message: "Wecome back!",
      //       type: "success",
      //       position: "bottom-left",
      //     });
      //     this.$emit("handle-reload");
      //   })
      //   .catch((err) => {
      //     // which is out of the range of 2xx
      //     this.$notify.error({
      //       title: "Login Failed",
      //       message: `Failed to Login: ${err.message}, please check your credentials.`,
      //       position: "bottom-left",
      //     });
      //   })
      //   .finally(() => {
      //     loading.close();
      //   });
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: white;
  width: 400px;
  height: 400px;
  padding-top: 20px;
  border-radius: 4px;
  margin: auto;

  position: absolute;
  top: 30%;  
  left: 50%; 
  transform: translate(-50%, -50%);
}

.form {
  width: 360px;
  margin: auto;
}

.el-form-item {
  margin-top: 36px;
  margin-bottom: 0;
}

.login-btn-container {
  display: flex;
  justify-content: center;
}

.el-button.is-plain:focus, .el-button.is-plain:hover {
    background: #FFF;
    border-color: #c84869;
    color: #c84869;
}
</style>