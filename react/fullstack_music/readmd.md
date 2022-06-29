fullstack全栈
1. 前端方向vite/js 工程化生成单页应用
2. 后端使用 开源的Neteasecloud
    - 删除.git文件夹，防止git冲突
3. 前端和后端怎么交流？
    - axios api -> 
    - frontend UI组件 需要数据(fastmock 假数据)  8080
    - backend api接口 3000
4. react 全家桶到位
    - react组件化 Mvvm响应式
    - react-router路由
    - redux数据流管理
      - 前端 -》 api -》redux -》后端
      - npm i redux react-redux
5. react是声明式的UI开发框架
    - 那么多的组件好复杂，好多API一样
    - 可以用组件来声明功能，更好读  
    - 原来react-router，react-router-dom
    - 现在加上redux + react-redux

6. 数据仓库的搭建过程
    1. 从`react-redux`中解构`Provider`，声明给应用添加数据管理功能
    2. `store`专有目录下，通过`createStore`创建仓库实例
    3. `createStore`方法接受`reducer`函数

7. - reset
        1. 使用syuled-components提供的createGlobalStyle 全局样式()
   - adpter
   - axios功能点
        1. 网络请求千千万，api axios 把单例干
        2. 统一了vue,react native，app三端的请求库
        3. 每个请求，域名+端口 部分，没必要重复
        4. 为了切换请求域名的需要
        5. 拦截器`interceptors`:`interceptors.response.use`,`interceptors.request.use`
            ```js
            <!-- response做拦截，可以解构好axios传过来的数据，处理错误 -->
            axiosInstance.interceptors.response.use(
            res=> res.data,
            err=>{
                console.log(err,"网络错误啦")
            }
            )
            <!-- request，可以设置一些登陆验证,登陆时服务器会给我们一个授权码，token
                我们每次请求时，需要手工带上，通过拦截器，Authorization授权信息
             -->
            interceptors.request.use()

            ```