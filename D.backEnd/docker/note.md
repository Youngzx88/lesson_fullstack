# docker

## 1. 景象，容器

- 打包好的安装包，方便传播
- 软件安装后的状态，每个运行环境都是独立的，隔离的，称之为容器

## 2. 基础概念

- containers是你的每一个环境实例
- images是镜像文件
  - 先pull一个nginx镜像文件，在本地run起来，填写参数
  - 参数
    - 端口，容器内跑的 nginx 服务是在 80 端口，你要把宿主机的某个端口映射到容器的 80 端口才可以访问。
    - 数据卷 volume：把宿主机某个目录挂到容器内，因为容器是镜像跑起来的，下次再用这个镜像跑的还是同样的容器，那你在容器内保存的数据就会消失。所以把某个宿主机目录，挂载到容器内的某个保存数据的目录，这样数据是保存在宿主机的，下次再用镜像跑一个新容器，只要把这个目录挂载上去就行。

- 举例
  - 挂载本地的 /tmp/aaa 到容器内的 /usr/share/nginx/html 目录
  volumes:
    - host: /tmp/aaa
    - container path: /usr/share/nginx/html
    - 这个时候我们在/tmp/aaa 目录下添加一个 index.html
    - 浏览器访问 <http://localhost> 就可以访问到：这就说明数据卷挂载成功了。

## 3、dockerFile

- 建立Dockerfile，然后通过 docker build 就可以根据这个 dockerfile 来生成镜像。
- `docker build -t aaa:ccc`aaa 是镜像名，ccc 是镜像的标签

```dockerfile
FROM node:latest

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "-p", "8080"]

# FROM：基于一个基础镜像来修改
# WORKDIR：指定当前工作目录
# COPY：把容器外的内容复制到容器内
# EXPOSE：声明当前容器要访问的网络端口，比如这里起服务会用到 8080
# RUN：在容器内执行命令
# CMD：容器启动的时候执行的命令

```

- 双击 index.html，可以看到这就是我们 build 镜像的时候 COPY 进去的文件。
- 但是如何修改静态文件
  - 进入容器内改太麻烦，不如把这个 /app 目录设置为挂载点吧。
  - 这样改下 Dockerfile：`VOLUME /app`
  - 在桌面端run的时候，把我的桌面目录作为数据卷挂载到 /app 目录了，然后再查看files就可以看到数据卷挂载到 /app 目录

- 有人说，就算不在 dockerfile 里指定 VOLUME，我还是可以 docker run 的时候通过 -v 挂载数据卷呀。为啥还要指定 VOLUME？
  - 在 dockerfile 里指定 VOLUME 之后，如果你 docker run 的时候没有带 -v，那会放在一个临时的目录里。
  - docker 会随机给他生成一个名字。
  - 还会随机生成一个目录作为数据卷挂载上去
  - 这样就算你删了容器，数据也可以在这里找回。
  - 设想下，如果你跑了个 mysql 容器，存了很多数据，但是跑容器的时候没指定数据卷。有一天，你把容器删了，所有数据都没了，可不可怕？
  - 为了避免这种情况，mysql 的 dockerfile 里是必须声明 volume 的，这样就算你没通过 -v 指定数据卷，将来也可以找回数据。
  - 在镜像详情可以看到 mysql 的 dockerfile，确实声明了 volume

## 4、命令解析

- `docker build -t name:tag -f filename .`
- 这个 . 就是构建上下文的目录，你也可以指定别的路径。
- 而镜像自然是越小性能越好，所以 docker 支持你通过 .dockerignore 声明哪些不需要发送给 docker daemon。.dockerignore 是这样写的：

  ```md
  *.md
  !README.md
  node_modules/
  [a-c].txt
  .git/
  .DS_Store
  .vscode/
  .dockerignore
  .eslintignore
  .eslintrc
  .prettierrc
  .prettierignore
  ```

- docker build 时，会先解析 .dockerignore，把该忽略的文件忽略掉，然后把剩余文件打包发送给 docker daemon 作为上下文来构建产生镜像。
- 此外，还有一种减小镜像体积的手段：多阶段构建。

## 5、尝试给nest配置dockerFile

- 我们会先把源码目录发送到 docker daemon 中执行 npm run build 来构建产物，之后再 node ./dist/main.js 把服务跑起来。
- .dockerignore

  ```.dockerignore
  *.md
  node_modules/
  .git/
  .DS_Store
  .vscode/
  .dockerignore

  ```

- Dockerfile

  ```Dockerfile
  FROM node:18 
  # 以node18为基础景象

  WORKDIR /app
  # 设置容器工作区域

  COPY package.json .
  # 复制当前文件路径下的package.json文件到容器内

  RUN npm i -g pnpm
  RUN pnpm install
  # 安装需要的依赖

  COPY . .
  # 复制当前文件夹下除dockerignore的文件

  RUN npm run build
  # 打包

  EXPOSE 3000
  # 抛出端口3000访问

  CMD ["node","./dist/main.js"]
  ```

- 但现在 docker 镜像还是不完美的。
  - 很明显，构建完成以后的src 等目录就不再需要了，构建的时候需要这些，但运行的时候只需要 dist 目录就可以了
  - 把这些文件包含在内，会让镜像体积变大。
  - 构建两次？第一次构建出 dist 目录，第二次再构建出跑 dist/main.js 的镜像。确实需要构建两次，但只需要一个 dockerfile 就可以搞定。这需要用到 dockerfile 的多阶段构建的语法。

  ```Dockerfile
  # 多阶段的docker构建
  # build stage
  FROM node:18 as build-stage

  WORKDIR /app

  COPY package.json .

  RUN npm config set registry https://registry.npmmirror.com/

  RUN npm install -g pnpm

  RUN pnpm i


  COPY . .

  RUN npm run build

  # production stage
  FROM node:18 as production-stage

  COPY --from=build-stage /app/dist /app
  COPY --from=build-stage /app/package.json /app/package.json

  WORKDIR /app

  RUN npm install -g pnpm

  RUN pnpm i

  EXPOSE 3000

  CMD ["node", "/app/main.js"]
  ```

- 但是镜像仍然很大，是因为用的基础的 linux 镜像比较大，可以换成 alpine 的，这是一个 linux 发行版，主打的就是一个体积小。
- 一般情况下，我们都会用多阶段构建 + alpine 基础镜像。
  `FROM node:18.0-alpine3.14 as build-stage`

## 6、使用 ARG 增加构建灵活性

- 写一个 test.js

  ```ts
  console.log(process.env.aaa);
  console.log(process.env.bbb);
  ```

- 打印了环境变量 aaa、bbb

  ```bash
  export aaa=1 bbb=2
  node ./test.js
  ```

- 运用在docker里面

```dockerfile
FROM node:18-alpine3.14

ARG aaa

ARG bbb

WORKDIR /app

COPY ./test.js .

ENV aaa=${aaa} \
    bbb=${bbb}
#dockerfile 内换行使用 \
```

- 之后构建的时候传入构建参数：
  `docker build --build-arg aaa=3 --build-arg bbb=4 -t arg-test -f 333.Dockerfile .`
- 然后在run的时候就可以看到ENV了
  `docker run  --name fourth-container arg-test`
- 其实`CMD`还有一个命令是`ENTERPOINT`
  - 重点是用 CMD 的时候，启动命令是可以重写的
  `docker run cmd-test echo "东东"`
  - 可以替换成任何命令。而用 ENTRYPOINT 就不会。

## 7、add与copy

- ADD、COPY 都可以用于把目录下的文件复制到容器内的目录下。
- 但是 ADD 还可以解压 tar.gz 文件。
- 一般情况下，还是用 COPY 居多。

## 8、pm2

- 前面我们都是 node 直接跑的 Nest 应用，但生产环境我们不会直接跑 node，而会用 pm2 来跑。
- 如果你的 node 应用跑的时候突然抛了个错，崩溃了，是不是需要重新跑起来？这时候是不是就需要另一个进程来自动做重启这件事情？
- node 应用的日志默认输出在控制台，如果想输出到不同的日志文件，是不是可以让另一个进程获取 node 应用的输出，然后写文件来实现？
- node 是单线程的，而机器是多个 cpu 的，为了充分利用 cpu 的能力，我们会用多个进程来跑 node 应用，这种通用逻辑是不是也可以放到一个单独进程里来实现？
- node 运行时的 cpu、内存等资源的占用，是不是需要监控？这时候是不是可以让另一个进程来做？
- 线上的 node 应用不只是跑起来就行了，还要做自动重启、日志、多进程、监控这些事情。
- 而这些事情，都可以用 `pm2` 来做。
- `pm2` 是 `process manager`，进程管理，它是第二个大版本，和前一个版本差异很大，所以叫 pm2.
  
## 8.1、安装pm2

- `npm i -g pm2`

## 8.2、跑项目

- 常用命令

```dockerfile
# 先编写dockerfile

# build镜像
  # 注意不能是驼峰，这里只是例
docker build -t dockerName:dockerTagName .
# run起来
  # 通过 xxx-image 镜像跑起来一个叫做 xxx-container 的容器。

  # -p 指定端口映射，映射宿主机的 3000 到容器的 3000 端口。

  # -v 指定数据卷挂载，挂载宿主机的 /aaa 到容器的 /bbb/ccc 目录。

  # 这个镜像是通过 Dockerfile 经过 build 产生的。
docker run -p 3000:3000 -v /aaa:/bbb/ccc --name xxx-container xxx-image
```

- `pm2 start ./dist/main.js`
- 首先看下日志，执行
  - `pm2 logs/pm2 logs 进程名/pm2 logs 进程id`
  - 可以看到 `pm2` 会把所有进程的日志打印出来，通过前面的“进程id|进程名字”来区分，比如 `0|main`。
  - 它会把它写到日志文件里，在 `~/.pm2/logs` 下，以“进程名`-out.log`和“进程名`-error.log`分别保存不同进程的日志
  - 超过 200M 内存自动重启：`pm2 start xxx --max-memory-restart 200M`
  - 从 2s 开始每 3s 重启一次：`pm2 start xxx --cron-restart "2/3 * * * * *"`
  - 当文件内容改变自动重启：`pm2 start xxx --watch`
  - 日志清空，使用 `pm2 flush` 或者 `pm2 flush 进程名|id`
  - 我们指定 1k 内存就重启：`pm2 start xxx --max-memory-restart 1K`,然后查看日志`pm2 logs main --lines 100`
  - `pm2 start、pm2 stop、pm2 restart、pm2 delete` 等就是进程管理的功能

## 8.3、负载均衡

- 再就是负载均衡，node 应用是单进程的，而为了充分利用多核 cpu，我们会使用多进程来提高性能。

- node 提供的 `cluster` 模块就是做这个的，`pm2` 就是基于这个实现了负载均衡。

- 我们只要启动进程的时候加上 `-i num` 就是启动 `num` 个进程做负载均衡的意思。
  `pm2 start app.js -i max`
  `pm2 start app.js -i 0`

- 跑起来之后，还可以动态调整进程数，通过 pm2 scale,把 main 的集群调整为 3 个进程：:`pm2 scale main 3`

- 性能监控功能，执行 pm2 monit:`pm2 monit`

- pm2 支持配置文件的方式启动多个应用。执行 `pm2 ecosystem`，会创建一个配置文件.apps 部分就是配置应用的，scripts 就是应用的启动路径
- 然后 `pm2 start ecosystem.config.js` 就可以批量跑一批应用。

  ```ts
  module.exports = {
    apps : [{
      script: 'index.js',
      watch: '.'
    }, {
      script: './service-worker/',
      watch: ['./service-worker']
    }],

    deploy : {
      production : {
        user : 'SSH_USERNAME',
        host : 'SSH_HOSTMACHINE',
        ref  : 'origin/master',
        repo : 'GIT_REPOSITORY',
        path : 'DESTINATION_PATH',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup': ''
      }
    }
  };
  ```

- pm2 plus，这个是收费功能，看看就行

## 8.4、为什么有docker还需要pm2？

- 总结一下常用的pm2指令
  - `pm2 start ./dist/main.js`
  - `pm2 delete 0`
  - `pm2 start app.js -i max;pm2 start app.js -i 0`:控制使用几个cpu
  - `pm2 scale main 3`:动态调整进程数
  - `pm2 monit`:性能监控
  - `pm2 ecosystem`:会创建一个配置文件, 然后 `pm2 start ecosystem.config.js` 就可以批量跑一批应用。
- 修改后的dockerfile

  ```dockerfile
  FROM node:18.0-alpine3.14 as build-stage

  WORKDIR /app

  COPY package.json .



  RUN npm install

  COPY . .

  RUN npm run build

  # production stage
  FROM node:18.0-alpine3.14 as production-stage

  COPY --from=build-stage /app/dist /app
  COPY --from=build-stage /app/package.json /app/package.json

  WORKDIR /app

  RUN npm install --production

  EXPOSE 3000

  CMD ["pm2-runtime", "/app/main.js"]

  ```

- 万一 docker 容器内 node 服务崩溃了，是不是需要重启？

- docker 容器内的进程同样有日志管理、进程管理和监控的需求。

- 一般都是 docker 镜像内安装 pm2 来跑 node

- 现在要在 docker 里多安装 pm2
  `RUN npm install pm2 -g`
  `CMD ["pm2-runtime","/app/main.js"]`
- 由于pnpm不支持全局安装，需要使用npm来全局安装pm2
