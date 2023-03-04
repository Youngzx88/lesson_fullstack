1. 最简单的调试方式: Run Current File

- vscode 直接调试

2. 那如何调试 Typescript 以及更复杂的大型项目呢？

- 终端的 JavaScript Debug Terminal
- npx ts-node index.ts(需要安装 ts-node，typescript，文件夹需要有 tsconfig)
- 如果，启动该项目特别复杂，如何处理？以下为例(虽然不是特别复杂)
  - 第一步，把启动命令抽象为 npm start。
    ```js
    {
      "scripts": {
        "start": "NODE_ENV=production node index.js"
      }
    }
    ```
  - 在可调试终端中输入命令 npm start
  - 第三步，开始调试

3. 如何进入到 promise.then 函数中进行调试？

- 直接打断点

4. 如何跳进 await 的函数中进行调试？

- async 跳进 hooks 源码中
- 但是不跳的话，有可能是最新版本的 vscode 会默认配置 skipfiles，跳过内部文件

```js
const sleep = (seconds) => {
  // 从 await sleep(2000) 如何调试到这里边
  console.log('DEBUG TO HERE')
  return new Promise((resolve) => setTimeout(resolve, seconds))
}

await sleep(2000)
```

5. Error

- 当发生异常时，如何直接断点到异常位置调试
- 这估计是解决 Bug 时最有效的调试手段了。
