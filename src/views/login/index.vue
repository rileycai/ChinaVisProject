<template>
<div class="login-container">
  <h1>登 录</h1>
  <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
    <img id="logo" src="../../assets/logo.svg">
    <h3 class="title">vue <span>A</span>dmin <span>D</span>emo</h3>
    <el-form-item prop="username">
      <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
      <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
    </el-form-item>
    <el-form-item prop="password">
      <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
      <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="password"></el-input>
      <span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" id="loginBtn" :loading="loading" @click.native.prevent="handleLogin">
        <span class="svg-container-white svg-container-white_check">
            <svg-icon icon-class="check" />
          </span>
      </el-button>
    </el-form-item>
  </el-form>
  <footer class="sticky-footer-login">
    Copyright (c) 2018-present ZhenzhenCai
  </footer>
</div>
</template>

<script>
import {
  isvalidUsername
} from '@/utils/validate'

export default {
  name: 'login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
      loginRules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePass
        }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$router.push({
        path: '/'
      })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('Login', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({
      //         path: '/'
      //       })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eaeaec;
$blue: #83c6ef;
$white: #ffffff;
$dark_blue: #429bcf;

.login-container {
    position: fixed;
    text-align: center;
    height: 100%;
    width: 100%;
    background: $blue url(../../assets/login-bg.jpg) no-repeat fixed;
    background-size: cover;
    h1{
      color:$white;
      // position: fixed;
      margin: 100px auto 10px auto;
      font-size: 2em;
      font-weight: 400;
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px $light_gray inset !important;
        -webkit-text-fill-color: $blue !important;
    }
    input {
        background: $light_gray;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: $dark_gray;
        height: 47px;
    }
    .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;
    }
    .tips {
        font-size: 14px;
        color: $white;
        margin-bottom: 10px;
    }
    .svg-container {
        padding: 6px 5px 6px 10px;
        color: $dark_gray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        &_login {
            font-size: 20px;
        }
    }
    .svg-container-white {
        padding: 0;
        color: $white;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
        &_check {
            font-size: 24px;
        }
    }
    #logo {
        margin: 0 auto 10px;
        width: 80px;
        height: 80px;
    }
    #loginBtn {
        width: 100%;
        height: 50px;
        background: $blue;
        border-color: $blue;

    }
    #loginBtn:hover {
        background: $dark_blue;
        border-color: $dark_blue;
    }
    .title {
        font-size: 24px;
        font-weight: 400;
        color: $blue;
        margin: 0 auto 40px;
        text-align: center;
        font-weight: bold;
        span {
            color: $dark_blue;
        }
    }
    .login-form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 30px 20px 20px 30px;
        margin: 10px auto;
        background: $white;
        border-radius: 5px;
        text-align: center;
    }
    .el-form-item {
        border: 1px solid $light_gray;
        background: $light_gray;
        border-radius: 5px;
        color: #454545;
    }
    .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
    .thirdparty-button {
        position: absolute;
        right: 35px;
        bottom: 28px;
    }

    .sticky-footer-login {
        border-top: 1px solid #eff0f4;
        padding: 15px;
        text-align: center;
        color: #5c5c5c;
        font-size: 16px;
        background: #fff;
        opacity: 0.25;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 99;
    }

}
</style>
