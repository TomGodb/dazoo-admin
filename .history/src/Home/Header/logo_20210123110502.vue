<template>
  <div>
    <div class="header_l" :style="{ width: opened ? '64px' : '200px' }">
      <!-- <img v-if="opened" src="@a/ImgSrc/Home-logo/dazoo-logo.png" alt="logo" />
      <img v-else src="@a/ImgSrc/Home-logo/logo.jpg" alt="logo" /> -->
      {{opened}}
       <img v-if="opened" :src="require('@a/ImgSrc/Home-logo/dazoo-logo.png')" alt="logo" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["opened"]),
  },
};
</script>
<style lang="less" scoped>
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
