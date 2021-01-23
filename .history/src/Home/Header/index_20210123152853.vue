<template>
  <div class="sideCollapse">
    <header-l></header-l>
    <div class="sideCollapse-left hoverBag" id="domColapse"  @click="toggleOpen()">
      <i
        :class="{ 'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }"
       
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

    -webkit-box-shadow: 0 2px 2px rgba(0,0,0,.05), 0 1px 0 rgba(0,0,0,.05);
    box-shadow: 0 2px 2px rgba(0,0,0,.05), 0 1px 0 rgba(0,0,0,.05);

  background-color: white;
  line-height: 60px;
  height: 100%;
  & .sideCollapse-left {

   
    font-size: 18px;
    color: #363f44;
    cursor: pointer;
  }
  & .sideCollapse-right {
    float: right;
    padding: 0px 10px 0px 0px;
  }
}
</style>
