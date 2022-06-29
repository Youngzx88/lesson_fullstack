// 配置请求对象
import axios from 'axios'
// 本地调试阶段 dev 开发阶段：localhost
// product阶段：https://www.fastmock.site/mock/c1d0330d90de5268ed433c5f9af6addc/wyy/banner
// 所以具有工程化意义
export const baseURL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL:baseURL
})

//拦截器
// axiosInstance.interceptors.request.use(req=>{
//     console.log("开始请求")
//     let localToken = "12312313";
//     req.headers['Authorization'] = "Bearer" + localToken
//     return req
//   } 
// )
axiosInstance.interceptors.response.use(
  res=> res.data,
  err=>{
    console.log(err,"网络错误啦")
  }
)

export {axiosInstance}