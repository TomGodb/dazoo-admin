export default [{
        path: "/dashbord",
        name: "Dashbord",
        component: () => import("@v/dashbord"),
        meta: {
            title: "首页",
            icon: "el-icon-s-data"
        }
    },
    {
        path: "/dashbord/aaa",
        name: "aaa",
        component: () => import("@v/aaa"),
        meta: {
            title: "aaa",
            icon: "el-icon-s-data"
        }
    },
]