- node 和 es6 在模块化可以共处
    1. react es6+
        node cjs阶段
        js 的有点事前后端通用 
            但是 cjs esm 代码风格不一样 两套代码不兼容
    2. 引入工程化 解决问题
        babel
        写的代码可以转变成能运行的代码
        - `npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node`
        - `npm install --save @babel/polyfill`
        - 新建 babel.config.js 加入一下内容
            ```js
                const presets = [
                    ["@babel/env",
                    {
                        targets: {
                        edge: "17",
                        firefox: "60",
                        chrome: "67",
                        safari: "11.1",
                        },
                        useBuiltIns: "usage",
                    }],
                ];
                module.exports = { presets };
            ```
        - `npx babel-node index.js`
            其中 npx 是在高版本的 npm 中就默认提供了，可直接通过 npx 来执行某些命令
            index.js 是指要运行的文件，如果文件中还没有 index.js ，就新建 index.js，跟 babel.config.js 同级

- web server
    - 后端种cookie
    - `res.setHeader('Set-Cookie',['type=ninja','language=javascript'])`
    - `req.url==‘/about`当我们从/about访问时，自动带上cookie去访问呢
    - cookie是一段文本，用于弥补http无状态的缺陷，无状态？Stateless每次请求都是独立的，没有相关性
    - 在`http1.0`版本里，加了`cookie`状态,服务器端解析cookie就可以

- Cookie属性
    - 不同的网站，访问时带上相应的cookie
    - 百度种的和掘金种的就不一样
    - path除了域名限定外，路径限定 /admin 后台
    - /admin cookie与juejin用户端
    - /所有路径都可以访问
    - /amin后台才回带上用于特殊权限的处理
    - Expires/Maxage Cookie过期删除：Expiers时间戳，Maxage倒计时

- httpOnly  
    - 为了安全性true 
    - js不能直接访问