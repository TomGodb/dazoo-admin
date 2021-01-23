<template>
  <div class="home-container">
    <el-container>
      <el-header> <m-header></m-header></el-header>
      <el-container>
        <el-aside :width="opened ? '64px' : '200px'">
          <el-menu
            :default-active="activeMenu"
            class="el-menu-vertical-demo"
            background-color="#3a3f51"
            text-color="#b5b6bd"
            active-text-color="rgb(79, 148, 212)"
            mode="vertical"
            :collapse-transition="false"
            router
            :collapse="opened"
          >
            <NavMenu :navMenus="menuData"></NavMenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="wrapper_con">
          <transition name="fade-page" mode="out-in">
            <router-view></router-view> </transition

        >
        </div>
        
        </el-main>
        
      </el-container>
    </el-container>
    <!-- <el-container>
      <el-aside :width="opened ? '64px' : '200px'">
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo"
          background-color="#3a3f51"
          text-color="#b5b6bd"
          active-text-color="rgb(79, 148, 212)"
          mode="vertical"
          :collapse-transition="false"
          router
          :collapse="opened"
        >
          <NavMenu :navMenus="menuData"></NavMenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <m-header></m-header>
    
        </el-header>
        <el-main>
          <transition name="fade-page" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container> -->
  </div>
</template>

<script>
import NavMenu from "./NavMenu";
import { mapGetters } from "vuex";
import MHeader from "./Header";
import { menuData } from "./NavMenu/meunDataRouter";
export default {
  components: {
    NavMenu,
    MHeader,
  },
  data() {
    return {
      menuData,
    };
  },
  computed: {
    activeMenu() {
      return this.$route.path;
    },
    ...mapGetters(["opened"]),
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  .el-aside {
    
    transition: width 0.3s;
    overflow: hidden;
    background-color: rgb(58, 63, 81);
  }
  .el-menu {
    border-right: 0px !important;
  }
  .fade-page-enter-active,
  .fade-page-leave-active {
    transition: all 0.5s;
  }
  .fade-page-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-page-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
}
.el-container {
  height: 100%;
}
.el-main {
  background-color: #f0f3f4;
}
.wrapper_con{
  margin-top: 60px;
  height: calc(100% - 60px);
}
</style>
