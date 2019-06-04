// module.exports = {
//   devServer: {
//     proxy: {
//       auth: {
//         target: "https://calpro.51wnl.com/", //代理接口
//         ws: true,
//         changeOrigin: true,
//         pathRewrite: {
//           "^/auth": "https://calpro.51wnl.com/" //代理的路径
//         }
//       }
//     }
//   }
// };

module.exports = {
  publicPath: "./",
  productionSourceMap: false
};
