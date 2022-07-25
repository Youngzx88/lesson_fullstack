- 新建文件夹，通过 npm init -y 初始化了一个前端工程
- 手动新建 index.html，通过 script 标签，引入 main.js。这里注意，需要将 type 属性设置为 module，这样才能支持 ES Module 模块化开发。
- 通过 npm 安装 lodash-es，之所以不使用 lodash，是因为 lodash 不是通过 ES Module 形式开发的，直接通过相对路径引入会报错，需要通过 Webpack 打包构建。
- 新建 main.js 添加去重逻辑：

- 明明只引入了一个lodash-es，网络中的资源缺有57这么多？
  - 代码中只有在首行通过 import 引入了 ./node_modules/lodash-es/uniq.js，所以 uniq.js 被作为资源引入进来，我们再看 uniq.js 的情况：