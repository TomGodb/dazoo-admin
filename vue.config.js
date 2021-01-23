const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  filenameHashing: true, //文件hash
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@a': resolve('src/assets'),
        '@v': resolve('src/views'),
        '@c': resolve('src/components'),
        '@u': resolve('src/utils'),
      }
    }
  },

  devServer: {
    host: "0.0.0.0",
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      "/": {
        target: "http://192.168.16.177:8888", // 要访问的接口域名
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        }
      }
    }
  },
  publicPath: './'

}