<template>
  <div class="navMenu">
    
    <template v-for="navMenu in navMenus">
      <!-- 最后一级菜单 -->
      <el-menu-item
        v-if="!navMenu.children && navMenu"
        :key="navMenu.id"
        :data="navMenu"
        :index="navMenu.path"
      >
        <i :class="navMenu.meta.icon"></i>
        <span slot="title">{{ navMenu.meta.title }}</span>
      </el-menu-item>
      <!-- 此菜单下还有子菜单 -->
      <el-submenu
        v-if="navMenu.children && navMenu"
        :key="navMenu.id"
        :data="navMenu"
        :index="navMenu.path"
      >
        <template slot="title">
          <i :class="navMenu.meta.icon"></i>
          <span> {{ navMenu.meta.title }}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.children"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["opened"]),
  },
  name: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.navMenu{
  position: fixed;
    bottom: 0;
    left: 0;
}
</style>
