<template>
  <div class="sideCollapse">
    <logo></logo>

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
import logo from "./logo";
import Logo from "./logo.vue";
export default {
  components: {
    UserDropdown,
    logo,
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
