export default [
    {
    path: "/network/config",
    name: "NetworKConfig",
    component: () => import("@v/network/Config"),
    meta: {
        title: "网络云配置",
        icon: "el-icon-s-data"
    }
},
{
    path: "/network/QueryCondition",
    name: "NetworKQueryCondition",
    component: () => import("@v/network/QueryCondition"),
    meta: {
        title: "网络查询",
        icon: "el-icon-s-data"
    }
}
]