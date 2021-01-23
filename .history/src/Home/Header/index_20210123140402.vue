<template>
  <div class="sideCollapse">
    <header-l></header-l>
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
import headerL from "./logo";
export default {
  components: {
    UserDropdown,
    headerL,
  },
  computed: {
    ...mapGetters(["opened"]),
  },
  methods: {
    toggleOpen() {
      this.$store.commit("SET_OPENED");
    },
  },
};
</script>
<style lang="less" scoped>

.sideCollapse {
  background-color: white;
  line-height: 60px;
  height: 100%;
  & .sideCollapse-left {
  padding: 0px 0px 0px 20px;
  float: left;
  font-size: 18px;
  color: #363f44;
  cursor: pointer;
}
}
.sideCollapse-right {
  float: right;
  padding: 0px 20px 0px 0px;
}
</style>
