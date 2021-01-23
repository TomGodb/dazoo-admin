<template>
  <div class="login-container">
    <div class="slideShadow" v-show="showSlide">
      <transition>
        <div class="slideSty animated bounce">
          <slide-verify
            @success="onSuccess"
            @fail="onFail"
            :sliderText="text"
            :w="380"
            :h="175"
            ref="slideDiv"
          ></slide-verify>
          <div class="iconBtn">
            <i class="el-icon-circle-close" @click="showSlide = false"></i
            ><i class="el-icon-refresh" @click="refresh"></i>
          </div>
        </div>
      </transition>
    </div>
    <div class="loginBox">
      <h2 class="loginH2">云后台管理系统</h2>
      <div class="loginCon">
        <div class="titleDiv">
          <h3>Dazoo-Cloud</h3>
          <p>Please log in through your mobile phone number</p>
          <i class="el-icon-key"></i>
        </div>
        <el-form
          ref="loginForm"
          :rules="rules"
          :model="ruleForm"
          label-width="70px"
          label-position="left"
        >
          <el-form-item prop="Phone" label="手机号">
            <el-input
              placeholder="请输入手机号"
              prefix-icon="el-icon-user"
              v-model="ruleForm.Phone"
            ></el-input>
          </el-form-item>
          <el-form-item prop="verificationCode" label="验证码">
            <el-input
              placeholder="请输入验证码"
              prefix-icon="el-icon-lock"
              v-model="ruleForm.verificationCode"
            >
              <el-button
                v-if="NumCaptcha"
                @click="Captcha()"
                size="mini"
                type="primary"
                slot="suffix"
                >获取验证码</el-button
              >
              <span slot="suffix" v-else>{{ num }}秒后可重发</span>
            </el-input>
          </el-form-item>
          <el-button
            type="primary"
            class="loginBtn"
            @click="loginYz('loginForm')"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideVerify from "@c/SlideVerify";
import { sendCaptcha, PasswordLogin } from "./http";
export default {
  components: {
    SlideVerify,
  },
  data() {
    return {
      num: 300,
      NumTimer: null,
      NumCaptcha: true,
      notifyObj: null,
      text: "向右滑动",
      showSlide: false,
      ruleForm: {
        Phone: "admin",
        verificationCode: "123456",
      },
      rules: {
        Phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        verificationCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    clearNumFall() {
      clearInterval(this.NumTimer);
    },
    NumFall() {
      if (this.num <= 1) {
        this.num = 300;
        this.NumCaptcha = true;
        this.clearNumFall();
        return false;
      }
      this.num--;
    },
    Captcha() {
      this.showSlide = true;
    },
    async onSuccess() {
      this.showSlide = false;
      // alert("登录成功");
      const res = await sendCaptcha({ userId: this.ruleForm.Phone });
      if (res) {
        this.$message({
          message: "发送验证码成功",
          type: "success",
        });
        this.NumCaptcha = false;
        this.NumTimer = setInterval(this.NumFall, 1000);
      }

      //this._login();
    },
    async loginYz() {
      let obj = {
        userId: this.ruleForm.Phone,
        authCode: this.ruleForm.verificationCode,
      };
      const res = await PasswordLogin(obj);
      if (res) {
        this.$message({
          message: "登录成功",
          type: "success",
        });
        // this.$router.push("/Home");
      }
    },
    onFail() {
      this.$message.error("验证失败");
    },
    refresh() {
      this.$refs.slideDiv.reset();
    },
  },
  beforeDestroy() {
    clearInterval(this.NumTimer);
  },
  watch: {
    // 刷新验证框
    showSlide(val) {
      if (!val) {
        this.refresh();
      }
    },
  },
};
</script>
<style scoped lang="less">
.login-container {
  // height: 100%;
  // background-color: red;
  height: 100%;
  width: 100%;
  background: url(../../assets/ImgSrc/login/loginBg.jpg) no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}
.loginBox {
  height: 455px;
  width: 550px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  margin-top: -287px;
}
.loginH2 {
  font-size: 38px;
  color: #fff;
  text-align: center;
}
.loginCon {
  margin-top: 30px;
  background: #eee;
  border-radius: 4px;
  .titleDiv {
    padding: 0 28px;
    background: #fff;
    position: relative;
    height: 120px;
    border-radius: 4px 4px 0 0;
    h3 {
      font-size: 22px;
      color: #555;
      font-weight: initial;
      padding-top: 23px;
    }
    p {
      font-size: 16px;
      color: #888;
      padding-top: 12px;
    }
    i {
      font-size: 65px;
      color: #ddd;
      position: absolute;
      right: 27px;
      top: 29px;
    }
  }
  .el-form {
    padding: 25px 25px 30px 25px;
    background: #eee;
    border-radius: 0 0 4px 4px;
  }
}
.loginBtn {
  width: 100%;
  background: #19b9e7;
}
.slideShadow {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.slideSty {
  position: absolute;
  width: 380px;
  height: 311px;
  background: #e8e8e8;
  border: 1px solid #dcdcdc;
  left: 50%;
  top: 50%;
  margin-left: -188px;
  margin-top: -176px;
  z-index: 99;
  border-radius: 5px;
}
.iconBtn {
  padding: 9px 0 0 19px;
  color: #5f5f5f;
  border-top: 1px solid #d8d8d8;
  margin-top: 17px;
  i {
    font-size: 22px;
    cursor: pointer;
  }
  i:last-child {
    margin-left: 7px;
  }
}
</style>
