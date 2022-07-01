- react官方脚手架
  - create-react-app
  - npm i create-react-app -g


- npm -g安装到哪？
  - 安装的是包package
  - 全局prefix下，npm config ls
  - 环境变量


- cnpm是什么：国内景象


- pnpm
  - 高性能npm
  - 先设置registry


- npx
  - 实现一些功能，或直接运行node_modules目录下的包时有用
- create-react-app todolist
- pnpm create vite

- 为什么需要vite？
  1. vite是vue的作者youyuxi带货的工程化套件，代替webpack
  2. vite比webpack快6倍
  3. 文件的请求依赖 花时间
      - webpack叫打包器
      - entry-》output罪魁祸首
      - vite，no bundler
      - 现代浏览器 直接支持 es module 加载(按需加载)`<script type="module" scr="/src/main.jsx">`
      - 编译的过程：module script -> main.jsx -> 按需要加载react...
      - 浏览到新的页面时，再import编译执行

- 在vite项目中，一个import语句既代表一个HTTP请求
  - Vite Dev Server会读取本地文件，返回浏览器可以解析的代码
  - Vite 提倡的no bundle
  - 利用浏览器原生ES模块的支持，实现开发阶段的devServer
  - 进行模块化的加载，而不是整体直接打包，