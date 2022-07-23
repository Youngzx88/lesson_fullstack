# 高仿哔哩哔哩
- 全新的项目
    1. 仿！大厂的新项目 掘金搜不到的
        小特
    2. react 全家桶（hooks + router + redux）+ ts + node
        大前端方向 react 前端 + node 后端
        全端工程师 react 前端 PC|Mobile + react Native | Android | IOS
        IOS 用户体验

- npm init vite 
    - 创建了 react + ts  => bilibili 移动端单页应用
        用户的浏览器
    - bilibili-api 后端
        服务器
        /url  接口 数据的对接
        大前端 node 代码只为前端提供数据接口

-  ts 前端  
    ```js
        "@types/react": "^18.0.15",
        "@types/react-dom": "^18.0.6",
    ```
    1. vite  react-ts 模板来创建
    2. 强制类型声明
        @types/react  react 类型声明   `React.FC<PropTypes>`
        - UI Component  组件位置声明  对props interface 约定
        - ts + api  `:Promise<MemberEntity[]>`
        - ts redux
        - ts vite 配置

- api 服务
    js 来写

- alias 配置在ts 里对tsx组件不支持，虽然能运行，但是预编译阶段报错
    - tsconfig.json 
        - compilerOptions
            ```js
                "baseUrl": ".",
                "paths": {
                    "@/*": [
                        "src/*"
                    ]
                }
            ```
         paths 告诉ts 添加预编译路径

- @types/ 就是ts 类型声明需要的interface type 等
    - @types/node @types/react 有点像
        有node 里相关的类型声明可以用，process：Process 进程

- 全栈 项目中 数据从服务器端 到 页面显示 经过哪些地方？
    audios
    1. 后端给我们一个数据接口   /api 某个返回promise 的函数
        url /audios GET  =>  response 是个JSON 数组
    2. bilibili-api  跟前端api 对接的
        - http 服务 协议前提
            https://localhost:3300/audios domain
            ping www.baidu.com    dns 域名解析  离你最近的可以提供服务的服务器IP地址 （上海、杭州、武汉...）
    3. /audios GET [{}]
        react-router 负责的
        koa-router
        - /audios  路径，前后端都可以设置吗？
            - 前端可以         路由级别页面  SPA单页应用
                用户体验  近8年发明的
            - 后端肯定可以     backend   
                /path  method 1.1
        - /videos  react-router  `<Route path="/videos" element={<Videos />}>` `<Link to="">`
            Link 触发 html5  history.pushState(url, )    不会更新页面  hashChange  #
        - effect  数据  redux  api  bilibili-api/videos
        - koa  3300  http 服务
        - /getVideos  get  ctx.body=  JSON 数据

    - 后端 传统路由中间件服务流程
        - 
        ```js
            const koa = require('koa'); // 提供 http server
            const router = require('koa-router')(); // koa 路由中间件 相当于BrowserRouter
            const app = new koa();
            router.get('/videos', ctx => {
            const videos = [
                    {
                        id: 1,
                        name: '杨总牛逼',
                        pic: 'https://p9-passport.byteacctimg.com/img/user-avatar/29dcb7fc3840a71105f212fd7e8a81e5~300x300.image'
                    },
                    {
                        id: 2,
                        name: '元昊牛逼',
                        pic: 'https://p9-passport.byteacctimg.com/img/user-avatar/29dcb7fc3840a71105f212fd7e8a81e5~300x300.image'
                    },
                ]
                ctx.body = videos
            })
            app.use(router.routes()) // app 挂载
        ```

- 中间件 
    1. 位于 req  res  中间的多个服务
    2. 中间件就是一个函数
    3. compose 成为一个数组
    4. 顺序
    5. 请求响应过程中，所有中间件会按顺序给我们提供服务
        也可以提前退出中间件服务，也会出现服务跳过的情况
- nodemon 
    类似于热更新

- 前端的api ts 注意哪些
    1. 要请求的数据，严格要求
        >models/ 架构文件夹  
            对数据进行建模  interface 表 字段 -> interface
    2. 接口函数
        - 函数的返回值 `(resolve,reject): Promise<Video[]> => {}`
        - `new Promise<Video[]>` 显示指定未来的结果
         unknow 是ts 的类型

- 在App.tsx 生命周期中通过 api
    - 从 http://localhost:3300 向 http://localhost:3300/getVideos 发送请求  
        - 请求失败？原因是？  
            >跨域了，前端在5173，后端在3300 端口不同算跨域 
                url里  http://localhost:3300/a?b=1#111 
                => https://localhost:3300/a?b=1#111             算     协议切换也算跨域 307重定向跳转
                => https://localhost:3000/a?b=1#111             算     端口切换
                => https://www.baidu.com:3300/a?b=1#111         算     域名换了
                => https://www.map.baidu.com:3300/a?b=1#111     算     二级域名
        - 跨域有安全问题，按这些规则里
            1. cros

- js 浏览器中有个 同源机制
    不跨域 = 同源

- 搜索API
    1. 通过chrome 找到B站的API 地址，拿到了结果
    2. 不放在fastmock
    3. 自己的bilibili-api 提供
        - `router.get("/search/suggest", async (ctx, next) => {}`
        - `const w = encodeURI(ctx.query.w);` 查询字符串进行编码
        - `try catch` 确保后端容错
            >js 是单线程，出错了，web程序就挂了，无法提供访问
            >try { 可能会出错的代码 } catch(e) {...}

    4. node-fetch 是 node 的fetch，原因是node 对js 最新功能的支持没有那么快
        - node-fetch 可以用于node 发送fetch 请求  与es6 fetch 一样

    5. node 去B站 发送远程接口请求的时候，B站是接受这次跨域请求的
        - 路由 + 假数据   代替fastmock，自建web服务，为前端提供api
        - 如果像B站一样，跨域请求API
            1. chrome network xhr 监听查看请求
                url method query...
            2. node api 封装这次请求
                - url domain/path 常量
                - query array [key=value]
                    = url + array.join('&')
                - then ...
                - try {可能出错的代码} catch(e) {}

- api 服务准备res响应数据  
    >本项目 code === 1 表示响应成功
    >B站   code === 0 表示成功  
    - data.result 写入 resData.data

- api 服务的使命
    1. http 服务
    2. router method  url 响应
    3. try catch 容错
    4. 准备好json 数据 响应 res.body

- typescript
    - component
    - api
    - store

- reducer + typescript 怎么做？
    1. 架构调整了  combineReducers + n 个 reducer 函数 写在一个文件里
    2. npm i @types/redux --save-dev  开发阶段
        build打包成 --> js 代码
    3. AnyAction 类型  action: AnyAction
    4. actions 中 添加AnyAction  一定要type 字段
    5. 在异步action 里，预定 dispatch:Dispatch<AnyAction>
        - 一定会调用一个同步的action AnyAction
    6. redux 需要的最基础ts 搞定

- 具体流程
    1. 后端
        - index.js引入`koa`，通过中间件创造路由，实现资源的合理分配，引入`cors`解决跨域问题
        - api.js 在后端发送一个请求 `rpc` 调用(`node-fetch`)，封装好请求待前端调用
    2. 前端
        - `store`架构改变，`reducers.ts`承担`初始数据`和`集合reducer`（原来是每个页面有一个store）
        - 在页面上通过`useEffect`加载数据