- npm init -y


node_modules/json-server 从远程到本地 本地项目的依赖

1. 把当前项目改成一个全栈项目`npm init -y` 后端项目的初始化
    - 生成一个`package.json`项目描述文件
2. 安装一些工具包`npm i json-server`
    - json-server 基于json格式的数据文件提供数据访问服务
3. 修改package.json 中 script `"dev": "json-server --watch db.json"`
4. 安装live-server:`npm i live-server`
5. 在package.json中script中增加`"start": "live-server"`,项目启动以live-server打开,默认进入首页`index.html`
4. `npm run dev`跑起来


- 提升了项目的逼格
    - 后端项目 `npm init -y`
- 无穷无尽的package 可以安装
    - `npm i json-server`(数据库)
    - `live-server`启动web http服务
    - `package.json`项日描述文件
- `npm run `package.json scripts命令对象
    - 数据服务 `npm run dev` 命令`json-server --watch db`,`json 3000`
    - web服务 `npm run start` 默认打开根目录下的index.html`live-server 8080`