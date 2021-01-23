export default [{
    path: "/network/config",
    name: "config",
    component: () => import("@v/network/Config"),
    meta: {
        title: "网络云配置",
        icon: "el-icon-s-data"
    }
}]