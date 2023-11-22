# debug

## vscode debug

### 1. attch 到运行中的调试

  ```json
  {
    "name": "Attach to Chrome",
    //attach到对应的端口上
    "port": 9222,
    "request": "attach",
    "type": "chrome",
    //工作文件夹下的debug，如果要调试index.js就是${workspaceFolder}/index.js
    "webRoot": "${workspaceFolder}"
  }
  ```

### 2. 通过 npm 调试

  ```json
  //package.json
    "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  ```

  ```json
  //launch.json
  {
    "name": "Launch via NPM",
    "request": "launch",
    "runtimeArgs": ["run", "start:dev"],
    "runtimeExecutable": "npm",
    "skipFiles": ["<node_internals>/**"],
    "type": "node"
  }
  ```

- "type": "node"：指定调试会话的类型为 Node.js 调试。
- "request": "launch"：指定调试请求的类型为启动（launch），表示要启动一个新的调试会话。
- "name": "debug nest"：调试配置的名称，可以自定义。
- "runtimeExecutable": "npm"：指定要运行的可执行文件为 npm。
- "args": ["run", "start:dev"]：传递给 npm 命令的参数，这里是运行"start:dev"脚本命令。
- "skipFiles": ["<node_internals>/**"]：指定要跳过的文件或文件夹，这里是跳过 Node.js 内部的文件。
- "console": "integratedTerminal"：指定在调试过程中使用集成终端作为控制台输出。
- 通过这个调试配置，你可以在 VSCode 中点击调试按钮，并选择"debug nest"配置来启动 Nest.js 应用程序的调试会话。在调试会话中，VSCode 将使用 npm 运行"start:dev"脚本命令来启动应用程序，并在集成终端中输出日志和调试信息。你可以在代码中设置断点，以便在调试过程中暂停程序执行并检查变量和状态。
