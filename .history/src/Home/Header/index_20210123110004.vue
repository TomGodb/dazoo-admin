<template>
  <div class="sideCollapse">
    <div class="header_l" :style="{ width: opened ? '64px' : '200px' }">
      <img v-if="opened" src="@a/ImgSrc/Home-logo/dazoo-logo.png" alt="logo" />
      <img v-else src="@a/ImgSrc/Home-logo/logo.jpg" alt="logo" />
    </div>

    <div class="sideCollapse-left" id="domColapse">
      <i
        :class="{ 'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }"
        @click="toggleOpen()"
      ></i>
    </div>
    <div class="sideCollapse-right">
      <user-dropdown></user-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserDropdown from "./UserDropdown";
export default {
  components: {
    UserDropdown,
  },
  computed: {
    ...mapGetters(["opened"]),
    // toggleClass() {
    //   return {
    //     'el-icon-s-unfold': this.opened === 'true',
    //     'el-icon-s-fold': this.opened !== 'true'
    //   }
    // }
  },
  methods: {
    toggleOpen() {
      this.$store.commit("SET_OPENED");
    },
  },
};
</script>
<style lang="less" scoped>
.sideCollapse-left {
  float: left;
  font-size: 18px;
  color: #363f44;
  cursor: pointer;
}
.sideCollapse {
  background-color: white;
  line-height: 60px;
  height: 100%;
}
.sideCollapse-right {
  float: right;
}
.header_l {
  transition: width 0.3s;
  float: left;
  background-color: #3a3f51;
  border-bottom: 1px solid #454b61;
  width: 200px;
  height: 59px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  img {
    height: 28px;
    vertical-align: middle;
    position: relative;
    top: -3px;
  }
}
</style>
