# electron

## 主进程

- 主进程的主要目的是使用 BrowserWindow 模块创建和管理应用程序窗口。
- BrowserWindow 类的每个实例创建一个应用程序窗口，且在单独的渲染器进程中加载一个网页。 您可从主进程用 window 的 webContent 对象与网页内容进行交互
- 由于 BrowserWindow 模块是一个 EventEmitter， 所以您也可以为各种用户事件 ( 例如，最小化 或 最大化您的窗口 ) 添加处理程序。

```js
// main.js
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('https://github.com')

const contents = win.webContents
console.log(contents)
```

- 主进程还能通过 Electron 的 app 模块来控制您应用程序的生命周期。 该模块提供了一整套的事件和方法，可以让您用来添加自定义的应用程序行为 (例如：以编程方式退出您的应用程序、修改应用程序坞，或显示一个关于面板) 。

## 渲染进程

- 每个 Electron 应用都会为每个打开的 BrowserWindow ( 与每个网页嵌入 ) 生成一个单独的渲染器进程。 洽如其名，渲染器负责 渲染 网页内容。 所以实际上，运行于渲染器进程中的代码是须遵照网页标准的 (至少就目前使用的 Chromium 而言是如此) 。

- 因此，一个浏览器窗口中的所有的用户界面和应用功能，都应与您在网页开发上使用相同的工具和规范来进行攥写。

- 这也意味着渲染器无权直接访问 require 或其他 Node.js API。 为了在渲染器中直接包含 NPM 模块，您必须使用与在 web 开发时相同的打包工具 (例如 webpack 或 parcel)

- 此刻，您或许会好奇：既然这些特性只能由主进程访问，那渲染器进程用户界面怎样才能与 Node.js 和 Electron 的原生桌面功能进行交互。 而事实上，确实没有直接导入 Electron 內容脚本的方法。

## Preload 脚本

- 预加载（preload）脚本包含了那些执行于渲染器进程中，且先于网页内容开始加载的代码 。 这些脚本虽运行于渲染器的环境中，却因能访问 Node.js API 而拥有了更多的权限。

- 预加载脚本可以在 BrowserWindow 构造方法中的 webPreferences 选项里被附加到主进程。

```js
// main.js
const { BrowserWindow } = require('electron')
// ...
const win = new BrowserWindow({
  webPreferences: {
    preload: 'path/to/preload.js',
  },
})
// ...
```

- 因为预加载脚本与浏览器共享同一个全局 Window 接口，并且可以访问 Node.js API，所以它通过在全局 window 中暴露任意 API 来增强渲染器，以便你的网页内容使用。

- 虽然预加载脚本与其所附着的渲染器在共享着一个全局 window 对象，但您并不能从中直接附加任何变动到 window 之上，因为 contextIsolation 是默认的。

```js
// preload.js
window.myAPI = {
  desktop: true,
}
```

## 快速入门

- index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>你好!</title>
  </head>
  <body>
    <h1>你好!</h1>
    我们正在使用 Node.js <span id="node-version"></span>, Chromium
    <span id="chrome-version"></span>, 和 Electron
    <span id="electron-version"></span>.
    <script src="./renderer.js"></script>
  </body>
</html>
```

- main.js

```js
// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  // 加载 index.html
  mainWindow.loadFile('index.html')

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态,
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 在当前文件中你可以引入所有的主进程代码
// 也可以拆分成几个文件，然后用 require 导入。
```

- preload.js

```js
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
```

## 渲染进程与主进程通信

- 为什么要进行主进程与渲染进程通信？主进程可访问的模块比渲染进程还要多，比如 app 模块只能作用于主进程，如果在渲染进程调用此模块则会报错
- 我们总会在渲染进程中用到某些数据，该数据只能通过主进程访问特定模块才能获取，解决方式只能通过将主进程作为中间人，借助它的能力拿到数据之后，再通过 `IPC` 将数据发送给渲染进程。
- IPC

  ```js
  // 在渲染进程中
  import { ipcRenderer } from 'electron'

  // 1. 向主进程发送消息，期望得到应用程序的路径
  ipcRenderer.send('get-root-path', '')
  // 2. 监听从主进程发送回来的消息
  ipcRenderer.on('reply-root-path', (event, arg: string) => {
    if (arg) {
      console.log('应用程序路径: ', arg)
    } else {
      console.log('获取应用程序的路径出错')
    }
  })
  ```

  ```js
  // 在主进程中
  import { app, ipcMain } from 'electron'

  const ROOT_PATH = app.getAppPath() // 获取应用程序的路径

  // 3. 监听渲染进程发送过来的消息
  ipcMain.on('get-root-path', (event, arg) => {
    // 4. 监听到之后，主进程发送消息进行回复
    event.reply('reply-root-path', ROOT_PATH)
  })
  ```

- remote

  - remote 模块为渲染进程和主进程通信提供了一种简单方法，在 Electron 中, GUI 相关的模块仅在主进程中可用, 在渲染进程中不可用（如 app 模块），所以当我们在渲染进程中需要用到 GUI 相关模块方法的数据时，通常都是在主进程中调用，得到数据之后，通过 ipcMain、ipcRenderer 来告知渲染进程。
  - 开发过程想调用 GUI 模块的方法时，都需要通过 IPC 的方式，是不是很麻烦？于是 remote 模块就发挥它的作用了。它允许你在渲染进程中，调用主进程对象的方法, 而不必显式地发送进程间消息。

  ```js
  // 在渲染进程
  const app = require('electron').remote.app

  const rootPath = app.getAppPath()
  ```

  - 官方声明：此模块在 v12.x 版本之后已经被废弃，当然如果出于性能和安全性考虑仍要使用此模块，也不是不行，可通过 @electron/remote 进行使用，但还是慎用！

- 渲染进程之间通信？

  - 目前官方并没有提供渲染进程之间互相通信的方式，只能通过主进程建立一个消息中转。比如渲染进程 A 与渲染进程 B 需要进行通信，那么渲染进程 A 先将消息发给主进程，主进程接收消息之后，再分发给渲染进程 B。

  - 我们知道主进程有且只有一个，它工作任务很多，如渲染进程的创建、快捷键事件的定制、菜单栏的自定义等，此时我们再注入一大堆的消息通信逻辑，最终会使得我们的主进程变成一个大杂烩的进程。受 Sugar-Electron 的启发，它内部封装了一个 ipc 模块，消息进程的逻辑在各自的渲染进程处理，感兴趣的小伙伴业余时间可前往官网进行了解。

- 通信原理
  - 通过官方文档，我们可知 ipcMain 与 ipcRenderer 都是 EventEmitter 类的一个实例，而 EventEmitter 类是由 NodeJS 中的 events 模块导出。

## 简历平台

- 脚手架 npm create electron-vite
- 安装 zustand，immer
- 持久性数据存储：文件创建/读取/更新/删除/是否存在/是否可读/是否可写
- 在 Node 10 之后，提供了 fs Promises API ，这里我们通过官方提供的 API 即可实现 Promise 操作 fs 模块。
- 跳转：electron 提供一个 shell 模块，它模块提供与桌面集成相关的功能。并且此模块也能用于渲染进程中，下面我们通过此模块，实现此功能（👇 部分代码省略）

  ```js
  const onRouterToLink = (text: string) => {
    if (text !== '简历') {
      // 通过 shell 模块，打开默认浏览器，进入 github
      shell.openExternal('https://github.com/PDKSophia/visResumeMook')
    } else {
      history.push('/resume')
    }
  }
  ```

### 1.怎么在 react 里面引入 node 模块？

- electron 中只有主进程可以直接使用 node 模块
- 但是渲染进程可以通过 contextBridge 允许在主进程中选择性地将 API 暴露给渲染进程，避免了潜在的安全风险。
- 我们在 preload 中像 react 前端代码抛出 electron 对象，上面有 fs 对象

  ```js
  import { contextBridge } from 'electron'
  contextBridge.exposeInMainWorld('electron', {
    fs: require('fs'),
  })
  ```

- 在前端直接使用`window.electron.fs`即可

- 为什么只能读取全局路径不能相对路径？

```js
window.electron.fileAction
  .read(
    '/Users/youngzx/codeRelate/myCode/learn/lesson_fullstack/C.frontEnd/electron/resumeMock/src/pages/home/index.tsx',
    'utf-8'
  )
  .then((data) => {
    console.log(data)
  })
```

- electron 提供一个 app 模块，该模块提供了一个 getAppPath() 方法，用于获取当前应用程序在本机中的目录路径，但有个问题在于，该 app 模块仅能在主进程中使用，而我们期望在渲染进程中得到此目录路径，只能通过 IPC 进程间通信获取。
