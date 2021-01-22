import axios from "axios";
import {
    Loading,
} from "element-ui";
// *********************************************请求地址前缀*********************************************
// axios.defaults.withCredentials = true; //让ajax携带cookie
// axios.defaults.baseURL = 'https://cms.idazoo.com'

// *********************************************请求超时*********************************************
const service = axios.create({
    timeout: 15000
});
//不获取nid的页面
let loadingInstance;
// *********************************************请求拦截器*********************************************
service.interceptors.request.use(
    function (config) {
        config.url = config.url + "?t=" + (Date.parse(new Date()) / 1000); //解决IE浏览器无法缓存的问题
        loadingInstance = Loading.service({
            fullscreen: true,
            text: "拼命加载中",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
        });
        return config;
    },
    function (error) {
        loadingInstance.close(); //关闭loading
        Loading.$message.error(error);
        return Promise.reject(error);
    }
);
// *********************************************添加响应拦截器*********************************************
service.interceptors.response.use(
    function (response) {

        if (loadingInstance) {
            loadingInstance.close();
        }
        if (response.status == 200) {
            return response;
        } else {
            return Promise.reject(response.data);
        }
    },
    function (error) {

        loadingInstance.close();
        Loading.$message.error(error);
        return Promise.reject(error);
    }
);
export default {

    post: function (url, data) {
        return new Promise((resolve, reject) => {
            service
                .post(url, data)
                .then(res => {
                    let {
                        data
                    } = res;

                    if (data.code == 200) {
                        resolve(data)
                    }

                })
                .catch(error => {

                    reject(data)
                });
        });
    },
    get: function (url, data) {
        return new Promise((resolve, reject) => {
            service.get(url, {
                params: data
            }).then(res => {
                let {
                    data
                } = res;

                resolve(data);
            });
        }).catch(data => {

            reject(data);
        });
    },
};