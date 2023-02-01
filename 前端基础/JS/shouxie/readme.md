- web编程的基础是HTTP基于请求响应式简单协议
    1. lazyload.html http请求响应html文件
    2. html 渲染的过程html DOM + css OM静态页面3. img引入图片资源的，启动http请求图片响应后，显示在页面上?页面网络请求数比较多，且大

- 如何优化多图片造成的网络请求堵塞，
    1. 请求数是页面打开速度性能的重要指标：link，script，img，audio，并发
    2. 启动netweork下载+1
    3. http协议 请求＋响应 马路 并发限制

- 延迟下载
    1. img src 不改变 显示一个占位图片 src-》data-src；src表示占位图片；data-src代表实际图片；浏览器对已经下载的资源会缓存cache
    2. onscroll 图片位于可视区 