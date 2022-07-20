- cookie 和 session 识别用户状态
1. http服务怎么启动
  node里的那个模块 什么方法？
  1. node 内置了http模块，非常方便，少数几行代码完成了任务
  2. http设置成请求响应且是无状态

2. www.baidu.com通过dns解析domain system ip地址
  1. 你以前访问过baidu.com
  2. 局域网dns服务
  3. 写入到本地 dns缓存

3. ip tcp/IP 三次握手
  A url method http + IP(自己的服务器的)

4. npm i koa-static,npm i nodemon(热部署)

5. node 和 redux思想一致
  - 这个思路就是中间件思想
  ```js
  //最普通的中间件
  app.use(async ctx =>{
    ctx.body = `helloworldddd`
  })
  ```
  - 第三方的中间件(静态资源服务器的搭建)`koa static`会自动去做缓存

6. cookie
  - httpOnly：安全的设置 cookie属性，为true的话`js不可以读取`，避免`xss跨站脚本攻击`

7. session 4kb
  - 又一种识别用户身份的状态
  - cookie不够用了 来了一个session
  - cookie每次请求都带上客户端和服务端都有的状态标记
    - uid足够我们识别用户吗
  - session帮助我们存储一些用户常用的，常做的行为或状态，只在后端内存中
  - cookie uid传到服务器端来了，session key value json 内存表数据表
  - session基于cookie,定义sesstion会种下cookie，通过cookie的key去客户端session中找到对应的value