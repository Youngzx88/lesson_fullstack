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
    3. 不好兼容？HTML5 history API

- HashRouter与BrowserRouter进阶理解
    - HashRouter
        - hash 模式：监听浏览器地址hash值变化，并执行相应的js切换。
        1. 原来: a标签<a href="#ccc"> <a name="ccc"> 通过#作为锚点，url带#
        2. 现在: HashRouter通过触发`onhashchange`事件刷新`锚点(组件)`
    - BrowserRouter
        - history 模式：利用H5 history API实现url地址改变，网页内容改变，History对象就是一个堆栈。。
        1. History.pushState():往history堆栈中添加一条记录。不会刷新界面，只会导致History对象变化，地址栏发生变化。
        2. History.replaceState():是替换当前history堆栈中最上层的记录。也是不会刷新界面，只会是Histoty对象变化，地址栏发生变化。
    - BrowserRouter没有任何影响，因为state保存在history对象中。
    - HashRouter刷新后会导致路由state参数的丢失！！！
    - 官方会更推荐使用browserRouter，貌似是因为其构建于H5的History API，比起hashRouter，它多出了更多的方法操控url。
