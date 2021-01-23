export default [{
    path: "/network/config",
    name: "config",
    component: () => import("@v/network/Config"),
    meta: {
        title: "首页",
        icon: "el-icon-s-data"
    }
}]