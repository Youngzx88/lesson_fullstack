- 锚点
    - 页面的电梯，pc时代，内容高度太长，不方便
    - react 响应式开发 区别于 DOM编程 + react-router加持 全家桶开发，单页应用 Single Page Application：SPA

- 锚点 hash # ;
    - url 加 # :3000/#aaa 会在当前页面上找name为aaa点a标签
    - 不用向传统a，向服务器重新发送请求，页面加载耗时
    - SPA单页应用专门解决 前端路由的底层(url发生改变，并没有重新加载页面)

- react-router为前端带来了路由功能

- HashRouter与BrowserRouter
    1. HashRouter `#/about` 兼容性更好
        - react-router捕获hashChange事件，当点击Link组件时
        - hash->Routes,Route中找到相应的页面级组件，动态切换
        - 单页应用(不用为了现实不同网页去白一下)，幻灯片一样切换不同页面
    2. BrowserRouter `/about` 看上去更像传统路由
        - 
    3. 不好兼容？HTML5 history API

