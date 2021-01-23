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
            title: "导航二",
            icon: "el-icon-s-tools"
        },

        children: [{
            id:2-1,
            path: "/dashbord/aaa",
            meta: {
                title: "导航2-1",
                icon: "el-icon-s-tools"
            },
        }]
    },
    // {
    //     id: 3,
    //     meta: {
    //         title: "导航三",
    //         icon: "el-icon-s-release"
    //     },
    //     path: "/",
    // },
    // {
    //     id: 4,
    //     meta: {
    //         title: "导航四",
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