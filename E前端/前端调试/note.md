## 1. 初识调试
### 1.1、evTools原理
- backend：backend 和 Chrome 集成，负责把 Chrome 的网页运行时状态通过调试协议暴露出来。
- frontend:frontend 是独立的，负责对接调试协议，做 UI 的展示和交互。
### 1.2、VSCode Debugger 原理
- 为了能直接用 Chrome DevTools 调试 Node.js 代码，Node.js 6 以上就使用 Chrome DevTools Protocol 作为调试协议了，所以 VSCode Debugger 要调试 Node.js 也是通过这个协议。
- 但是中间多了一层适配器协议 Debug Adapter Protocol，因为 VSCode 不是 JS 专用编辑器呀，它可能用来调试 Python 代码、Rust 代码等等，自然不能和某一种语言的调试协议深度耦合，所以多了一个适配器层
### 1.3、Vue/React DevTools
- Vue DevTools 或者 React DevTools 都是以 Chrome 插件（Chrome Extension）的形式存在的，要搞懂它们的原理就得了解 Chrome 插件的机制。
- Chrome 插件中可以访问网页的 DOM 的部分叫做 Content Script，随页面启动而生效，可以写一些操作 DOM 的逻辑。还有一部分是后台运行的，叫做 Background，浏览器启动就生效了，生命周期比较长，可以做一些常驻的逻辑。
- React DevTools 也是类似的，都是通过 backend 拿到组件信息，然后传递给 DevTools Page 做渲染和交互。

