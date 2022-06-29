// 配置请求对象
import axios from "axios";
// 本地调试 dev 开发阶段
export const baseUrl = "http://localhost:3000";

// product 阶段
// https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/banner

// 设计模式
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// 响应拦截器
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)
// 请求拦截器
// axiosInstance.interceptors.request.use(req =>{
//     console.log('。。。。。。。。。。');
//     req.code = '123123123'
//     req.headers['Authorization'] = 
//         "Bearer  " + localToken
//     return req
// },
// err=>{

// })

export { axiosInstance };
