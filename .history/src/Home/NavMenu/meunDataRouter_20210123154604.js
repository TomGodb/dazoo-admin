const menuData = [{
        id: 1,
        meta: {
            title: "首页",
            icon: "el-icon-s-data"
        },
        path: "/dashbord",
    },
    {
        id: 2,
        meta: {
            title: "日志管理",
            icon: "el-icon-s-tools"
        },
        children: [{
                path: "/log/QueryCondition",
                meta: {
                    title: "日志查询",
                    icon: "el-icon-s-tools"
                },
            },
            {

                path: "/log/Statistics",
                meta: {
                    title: "日志统计",
                    icon: "el-icon-s-tools"
                },
            },
        ]
    },
    {
        id: 3,
        meta: {
            title: "网络管理",
            icon: "el-icon-s-release"
        },
        children: [{

                path: "/network/QueryCondition",
                meta: {
                    title: "网络查询",
                    icon: "el-icon-s-tools"
                },
            },
            {

                path: "/network/config",
                meta: {
                    title: "网络云配置",
                    icon: "el-icon-s-tools"
                },
            },
            {

                path: "/network/status",
                meta: {
                    title: "网络状态",
                    icon: "el-icon-s-tools"
                },
            },
        ]
    },
    // {
    //     id: 4,
    //     meta: {
    //         title: "网络管理",
    //         icon: "el-icon-coin"
    //     },
    //     path: "/",
    // },
    // {
    //     id: 5,
    //     meta: {
    //         title: "导航五",
    //         icon: "el-icon-upload"
    //     },
    //     path: "/",
    // },
]

export {
    menuData
}