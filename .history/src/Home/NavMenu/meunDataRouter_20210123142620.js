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
            title: "日志功能",
            icon: "el-icon-s-tools"
        },
        path: "/dashbord/aaa",

        children: [
            {
            
            path: "/dashbord/aaa",
            meta: {
                title: "日志查询",
                icon: "el-icon-s-tools"
            },
          },
          {
            
            path: "/dashbord/aaa",
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
            title: "日志",
            icon: "el-icon-s-release"
        },
        path: "/",
    },
    {
        id: 4,
        meta: {
            title: "网络管理",
            icon: "el-icon-coin"
        },
        path: "/",
    },
    {
        id: 5,
        meta: {
            title: "导航五",
            icon: "el-icon-upload"
        },
        path: "/",
    },
]

export {
    menuData
}