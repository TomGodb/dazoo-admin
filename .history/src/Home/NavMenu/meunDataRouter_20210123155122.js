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
        path: "/log",
        children: [{
                id: 2 - 1,
                path: "/log/QueryCondition",
                meta: {
                    title: "日志查询",
                    icon: "el-icon-football"
                },
            },
            {
                id: 2 - 2,
                path: "/log/Statistics",
                meta: {
                    title: "日志统计",
                    icon: "el-icon-key"
                },
            },
        ]
    },
    {
        path: "/network",
        id: 3,
        meta: {
            title: "网络管理",
            icon: "el-icon-s-release"
        },
        children: [{
                id: 3 - 1,
                path: "/network/QueryCondition",
                meta: {
                    title: "网络查询",
                    icon: "el-icon-place"
                },
            },
            {
                id: 3 - 2,
                path: "/network/config",
                meta: {
                    title: "网络云配置",
                    icon: "el-icon-basketball"
                },
            },
            {
                id: 3 - 3,
                path: "/network/status",
                meta: {
                    title: "网络状态",
                    icon: "el-icon-ship"
                },
            },
        ]
    },
]

export {
    menuData
}