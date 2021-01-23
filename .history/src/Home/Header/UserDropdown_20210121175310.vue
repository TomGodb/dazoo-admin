<template>
  <div>
    <div class="hoverBag" @click="toggleFull">
      <i class="el-icon-full-screen iconFont"></i>
    </div>
    <el-dropdown class="userDd hoverBag" @command="handleCommand">
      <div class="userDrop">
        <span class="userDrop_text">
          admin<i class="el-icon-caret-bottom"></i
        ></span>
        <img src="@a/ImgSrc/header_images/user01.jpg" alt="user" />
      </div>
      <el-dropdown-menu solt="dropdown">
        <el-dropdown-item
          v-for="(item, index) in dropdownList"
          :key="index"
          :command="index"
        >
          <i :class="item.icon"></i>{{ item.title }}
        </el-dropdown-item>
        <!-- <el-dropdown-item>
          <i class=""></i>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <i class=""></i>
        </el-dropdown-item> -->
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      dropdownList: [
        {
          icon: "el-icon-s-home",
          title: "首页",
          path: "/Home",
        },
        {
          icon: "el-icon-s-custom",
          title: "个人信息",
          path: "/dashbord/aaa",
        },
        {
          icon: "el-icon-switch-button",
          title: "登出",
          path: "/",
        },
      ],
    };
  },
  methods: {
    handleCommand(index) {
      this.$router.push(this.dropdownList[index].path);
    },
    toggleFull() {
      screenfull.toggle();
    },
  },
};
</script>
<style lang="less" scoped>
.iconFont {
  font-size: 20px;
  vertical-align: middle;
}
.userDrop img {
  vertical-align: middle;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}

.hoverBag {
  cursor: pointer;
  height: 100%;
  padding: 0px 10px;
  float: left;
}
.hoverBag:hover {
  background: #f0f3f4;
}
</style>
