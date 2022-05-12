<template>
  <div>
    <h1>{{ isSignup ? 'Sign Up' : 'Log in' }}</h1>
    <div style="margin-bottom: 32px">
      <span>{{ isSignup ? 'Already a member?' : 'New to this site?' }} </span>
      <button 
        class="switch-button"
        @click="handleSwitch"
      >
        {{ isSignup ? 'Log in' : 'Sign Up' }}
      </button>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
        <el-form-item 
            label="Email" 
            prop="email"
        >
            <el-input
                style="width: 320px"
                type="text"
                v-model="ruleForm.email"
            >
            </el-input>
        </el-form-item>
        <el-form-item 
            label="Password"
            prop="pass"
        >
            <el-input
                style="width: 320px"
                type="text"
                v-model="ruleForm.pass"
                show-password
            >
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button 
                style="width: 320px" 
                plain
                @click="submitForm('ruleForm')"
            >
                {{ isSignup ? 'Sign Up' : 'Log in' }}
            </el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "log-form",
  data() {
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input your Email Address.'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input your password.'));
        } else {
          if (value.length < 8) {
            callback(new Error('The length of the password should be greater then 8.'));
          }
          callback();
        }
      };
      return {
          isSignup: true,
          ruleForm: {
            email: '',
            pass: '',
          },
          rules: {
            email: [{ validator: validateEmail, trigger: 'blur' }],
            pass: [{ validator: validatePass, trigger: 'blur' }],
          }
      };
  },
  methods: {
      handleSwitch() {
          this.isSignup = !this.isSignup;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('email is '+ this.ruleForm.email);
            console.log('password is '+ this.ruleForm.pass);
            /* send http request to the backend server here */
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  }
};
</script>

<style scoped>
* {
  text-align: center;
  color: black;
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

.switch-button {
    font-size: 18px;
    color: #C84869;
    text-align: center;
    border-width: 0;
    background-color: transparent;
    outline: none;
}

.el-button,
.el-button.is-plain:focus,
.el-button.is-plain:hover {
    color: white;
    background-color: #C84869;
}
</style>
