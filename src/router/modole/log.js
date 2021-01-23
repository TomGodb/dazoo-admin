export default [{
        path: "/log/QueryCondition",
        name: "logQueryCondition",
        component: () => import("@v/log/QueryCondition"),
        meta: {
            title: "日志查询",
            icon: "el-icon-s-data"
        }
    },
    {
        path: "/log/Statistics",
        name: "logStatistics",
        component: () => import("@v/log/Statistics"),
        meta: {
            title: "日志统计",
            icon: "el-icon-s-data"
        }
    },

]