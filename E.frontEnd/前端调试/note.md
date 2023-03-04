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

## 2. 如何调试网页js
### 2.1、F12
- 点进原代码
- 打断点
- 刷新页面

### 2.2、VSCode Debugger(不用切换调试工具)
- 用 VSCode 打开项目目录，创建 .vscode/launch.json 文件
- 点击右下角的 Add Configuration... 按钮，选择 Chrome: Launch
- 把访问的 url 改为开发服务器启动的地址
- 然后进入 Debug 窗口，点击启动
- 打断点
- 重启
- 所有的信息都在左边展示(断点异常移到了BreakPoints里)

## Chrome DevTools Protocal
- chrome detools和vscode Debugger都可以对接CDP来调试网页

## launch.json
- 创建chrome debug的方式
  - Launch启动
  - Attach附加
- 调试就是把浏览器跑起来访问访问目标网页，这时有一个`ws`的调试服务，我们用frontend的ws客户端连接上这个ws就可以进行调试来
- launch 的意思是把 url 对应的网页跑起来，指定调试端口，然后 frontend 自动 attach 到这个端口。
- attach是已经在跑的就attach上去
  1. 手动把chorme对应的端口跑起来`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 --user-data-dir=你自己创建的某个目录`
  2. Chrome 跑起来之后，你可以打开几个网页，比如百度、掘金，然后你访问 localhost:9222/json，这时候会发现所有的 ws 服务的地址了
  3. 每个页面的调试都是独立的，自然就需要单独的 ws 服务。

## 3. sourcemap
- 代码是经过编译打包然后在浏览器运行的 
- 但我们却可以直接调试源码，这是通过 sourcemap 做到的。调试工具都支持 sourcemap，并且是默认开启的
- 在开启 sourcemap 的情况下，用 Chrome DevTools 可以看到，源文件的路径是 /static/js/bundle.js
- 而在 VSCode 里，这个路径是有对应的文件的，所以就会打开对应文件的编辑器，这样就可以边调试边修改代码。
- 但有的时候，sourcemap 到的文件路径在本地里找不到，这时候代码就只读了，因为没有地方保存
- 编译后源码(sourceMap)->源码路径(sourceMapOverrides)->本地文件路径