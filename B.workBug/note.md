# workBug

1. react 中 form 表单 post 请求
   - ajax
   - axios,ref 记录,用一个对象包裹,发送
2. ajax 的不同使用场景
3. 动态类名解决多状态
   - classnames
4. decodeUrlComponent 解码问题
   - 不能放在参数里解码，容易变成字符串的 undefine(区分不出)
5. actions 的先后顺序问题
   - .then 解决
6. 所有 useEffect，useDidShow 写一个就好
7. queryString 拿到 url 上的参数
8. 倒计时 use-timer
9. 固定高度要用大写的 PX，但是尽量用 rpx 因为是响应式
10. pc+mobile 响应式切图

    - pc 直接切 img ➕ 绝对定位 text
    - mobile img display：none，用 text 撑开文本，用 img 当作 text 的背景图(bgi)

      ```html
      <div className="relative w-full">
        <img
          className="hidden lg:w-full lg:block"
          src="https://www.magelesi.cn/assests/brandStory/1-%E5%85%AC%E5%8F%B8%E6%84%BF%E6%99%AF%402x-tuya.jpg"
          alt=""
        />
        <div className="bgImage bg-cover w-full">
          <div className="lg:mx-auto lg:absolute w-full lg:top-0 lg:left-0">
            <div className="container mx-auto w-full">
              <div className="lg:pt-[10vw] p-20">
                <div
                  className="mx-auto text-[12px] lg:text-[22px] lg:mx-auto lg:w-30"
                >
                  <img
                    src="https://www.magelesi.cn/assests/brandStory/%E7%BB%84%202.png"
                    alt=""
                  />
                </div>
                <div
                  className="mx-auto opacity-[0.7] text-white text-[12px] lg:text-[22px] lg:text-white lg:opacity-[0.7] lg:mx-auto lg:w-30"
                >
                  我们秉承着建立低碳、绿色、健康、舒适的人类环境的理念，以纳米材料为核心，结合芯片技术，将在技术和市场上不断创新发展；坚持以客户为中心，持续为客户创造长期价值，相互成就，共享未来。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ```

      ```css
      .bgImage {
        background-image: url(https://www.magelesi.cn/assests/brandStory/honor%402x-tuya.jpg);
        background-position: center;
      }
      ```

11. vite 配置别名解决打包错误/解决本地开发跨域问题

    ```js
    <!-- vite config js -->
    export default defineConfig({
      base: process.env.PUBLIC_PATH || '/',
      plugins: [react()],
      resolve:{
        alias:{
          '@':'/src/',
        }
      },
      //将所有/mail的请求发送到https://www.magelesi.com
      //以后可以改成将所有/api的请求发送到https://www.magelesi.com
      //注意：请求的时候只请求/main即可，达到替换的效果
      server: {
        proxy: {
          "/mail": {
            target: "https://www.magelesi.com",
            changeOrigin: true,
            rewrite: (path) => path.replace("/^\/mail/","")
          }
        }
      }
    })

    ```

12. 给后端的数据结构

    - axios

      - json：直接传
      - format: 把 json 转化一下

      ```js
      //方法1：有兼容问题，老浏览器不支持URLSearchParams
      const params = new URLSearchParams({ foo: 'bar' })
      params.append('extraparam', 'value')
      axios.post('/foo', params)
      ```

      ```js
      //方法2: qs解决
      const qs = require('qs')
      axios.post('/foo', qs.stringify({ bar: 123 }))
      ```

13. 关闭 ts 类型监测
14. 项目手机端预览要在同一局域网 ip 下，vite 配置 0.0.0.0
15. css module taro 中使用在 config 下 index.js 中修改，h5 在 vite.config.js 中修改

```js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' //++

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {//++
    alias: {//++
      '@': resolve(__dirname, './src'),//++
      '*': resolve('')//++
    },//++
  },//++
  css: {
    // 配置 css-module
    modules: {
      // 开启 camelCase 格式变量名转换
      localsConvention: 'camelCase',
      // 类名 前缀
      generateScopedName: '[local]-[hash:base64:5]',
    },
  }
```

16. 在 vite 中配置 alias,采用 vite + typescript 开发，配置别名时会报错：找不到模块“path”或其相应的类型声明 或者 找不到名称“\_\_dirname”等

```bash
npm install @types/node --save-dev
```

17. pc 端切图不要写高度，用 container 的 padding 撑开上下的高度

18. qs 的使用,拿到 url 上的参数

```js
// ?id = 1
let params = location.search
console.log('params', params) //params ?id=1
params = params.replace(/^\?/, '')
console.log('params2', params) //params2 id=1
let qs = QueryString.parse(params)
console.log('qs', qs) //qs {id: '1'}
```

19. #的含义(锚点)

- #代表网页中的一个位置。其右面的字符，就是该位置的标识符。
- `http://www.example.com/index.html#print` 代表 index.html 中 print 的位置，浏览器读取这个 URL 后，会自动将 print 位置滚动至可视区域。
- 为网页位置指定标识符，有两个方法。一是使用锚点，比如`<a name="print"></a>`，二是使用 id 属性，比如`<div id="print" >`。

20. 短链接生成工具:草料

21. nginx 反向代理（代理服务器端）

- etc/nginx/default.d/nginx.config 下是`nginx`的配置文件
- 为了分离，我们一般自己建一个`config.d`，并被`nginx.config`引入`include /etc/nginx/conf.d/*.conf;`

```
server {
  listen 80;
  listen [::]:80;
  server*name *;
  root /usr/share/nginx/dist;
  location / {
  index /index.html;
  try_files $uri /$uri /index.html;
  }
}
```

- 可以将多个前端项目放在同一个服务器端口上。在 nginx 中，您可以为每个前端项目配置一个不同的 location，用于指定该项目的静态资源文件路径。例如，如果将多个前端项目部署在同一个服务器上，并且它们的静态资源文件都存放在/var/www 目录下，可以使用以下 nginx 配置，这样在访问 example.com/project1 的时候就会访问对应的文件夹：

Copy
server {
listen 80;
server_name example.com;

    location /project1 {
        root /var/www/project1;
        index index.html;
    }

    location /project2 {
        root /var/www/project2;
        index index.html;
    }

}

- 为了不让有权限问题，打包后的 dist 最好放在 nginx 文件夹下
- spa 应用，只有一个 html，路由都在 html 里，其他都是用 js 静态资源引入，jsx 本质就是 js(vite 和 webpack 做的事情)
- 所以我们配 try file，不过是为了访问`/index.js`是文件就访问真实的文件，不是文件就打到`index.html`上,让 react 路由发挥作用找到对应的资源

22. 数据流管理常用逻辑

- state，action 分开写
- 不要在拿到的同时打 log，同步任务优先执行

23. ssh

- 连接服务器用 vscode server 就好
- command shift p :ssh

24. 小程序重复扫码得到的是第一次的内容

- 扫码放到一个页面去判断
- 不要用`Taro.getLaunchOptionsSync().query.code_ticket code`这个只能接收到第一次扫描的二维码参数
- 用 useRouter 解析的 parmas 去得到每次的新二维码参数

```js
const { params } = useRouter()
```

25. rn 文字不会换行

- 默认视为一个单词了，要用 wrap 给他换行

26. useDidshow 获取数据，返回页面会多加载一次，用 usedidhide 在出页面的时候删掉

27. postcss 处理兼容

28. we 分析

- 添加自定义事件

29. rn bable

- 解决导出模块化的问题

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
  ],
}
```

30. zustand 跨页面拿数据

```js
useGlobalState.getState().state
```

31. rn 持久化存储，用户鉴权

- <https://react-native-async-storage.github.io/async-storage/docs/install>
- 配合 zustand 全局状态管理
  - zustand 创建 token 的 model
  - 路由根据 zustand token model 来更新(会自己传递更新组件)
  - app 里初始化 token，AsyncStorage 有 token 就同步更新全局 model 状态的 token
  - 这样更新后的 token 就会同步传递到路由组件当中
  - 注意存取 token 是异步的，需要加 loading 判断后再展示页面

32. 导出 x 倍图，缩小展示

```jsx
<Image
  source={require('../assets/Doodle.png')}
  style={styles.homeImg}
  resizeMode="contain"
/>
// 定死宽高
```

33. axios

- get 请求带参

```js
const res = await actions.searchMaterial({params2})
export const shopSearch =
    ({params2}:any) => return baseAxios.get('pumpkin/mobile/sku/search',
    {params:{
      plantCode:params2.plantCode,
      searchTxt:params2.searchTxt,
      pageSize:params2.pageSize,
      pageIndex:params2.pageIndex,
      orderBy:params2.orderBy
    }})
```

- post 请求

```js
export const login = (phoneNumber: string, codeNumber: string) =>
  baseAxios.post('pumpkin/mobile/auth/login', {
    mobile: phoneNumber,
    code: codeNumber,
  })
```

34. rn 学习到了什么

- 路由跳转
- 路由传参
- 样式 flex
- FlatList 调用,下拉刷新
- ts 字面量类型要注意：直接用类型传参，可能只能推导到 string 类型，要么直接传{}，不先用变量整合，要么把类型导出在要传参的部分声明类型
- setState 和 actions 先后出发，actions 改变的 state 会重新传递进来，导致 state 被刷新为最初的值
- 多个页面用到的数据一定要提出来
- 同一级 modal 数据要遵循先后顺序
- header
- 公共数据抽成 modal 在每个页面都能拿到

35. State 的更新可能是异步的

- 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
- 因为 props 和 state 可能会异步更新，所以不要依赖他们的值来更新下一个状态。

```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
})
```

- 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数

```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment,
}))
```

36. 传 formdata 的时候和 json 有何不同？

```js
// post请求以formdata的形式请求接口，用qs兼容性更好
export const login = (data: any) => {
  data = qs.stringify(data)
  return baseAxios.post('/auth-center/oauth/token?', data, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
}
// 普通的get请求，参数放在params里
export const shopSearch = (formData: any) => {
  return baseAxios.get('pumpkin/mobile/sku/search', {
    params: {
      plantCode: formData.plantCode,
      searchTxt: formData.searchTxt,
      pageSize: formData.pageSize,
      pageIndex: formData.pageIndex,
    },
  })
}
// 普通的post请求
export const createInventoryMission = (formData: any) => {
  return baseAxios.post('/pumpkin/mobile/order/stocktaking/task', {
    plantCode: formData.plantCode,
    stocktakingOrderId: formData.stocktakingOrderId,
    taskName: formData.taskName,
  })
}
```

37. 私钥读不了，需要加权限才可以 ssh 连接

- chmod 600 /position

38. ssh

- 一种远程连接主机的方式，vscode 中 command+shift+p
- 配置好对应的 ssh config 进行连接
- 密码或者证书登陆

```config
Host oms-prod
  HostName xxx.xx.xxx.xx
  User xxxx
  IdentityFile /Users/youngzx/xxxx/neobio-prodFile/xxxx
```

39. react 静态资源导入问题

- 为什么使用 react 开发，静态资源放在 public 文件夹下可以直接用相对路径而其他文件夹不可以？
  - 在 React 开发中，静态资源（如图片、样式文件等）通常被放置在 public 文件夹下，而不是放置在源代码文件夹中。这是因为 public 文件夹中的内容会被直接复制到构建输出的目录中，而不经过 webpack 或其他构建工具的处理。
  - 当你将静态资源放在 public 文件夹下时，可以使用相对路径来引用这些资源。这是因为浏览器会相对于当前页面的 URL 来解析这些资源的相对路径，并正确加载它们。
  - 然而，对于源代码文件夹中的其他文件夹，如 src 文件夹中的文件，它们通常需要通过模块导入的方式引用 import，而不是使用相对路径。

39. 如果接口返回异常，但是 postman 返回正常，要考虑是不是拦截器里面写的内容有问题

40. oss 没有缓存，通过 oss 的到的 CDN 是有缓存的，需要到域名服务器上去刷新一下 CDN 缓存

41. 想要对比组件刷新前后某一个状态的变化，不能使用 useState，因为 useState 会导致组件强制刷新，状态会回复为初始值，要用 useRef 获得引用类型

42. git Actions

- 其实很多 actions 脚本都可以用 github 官方的去做，极大的降低了我们去编写脚本的压力
- 在这个脚本里 public-path 作为参数传入了另一个 webBUild 脚本，webBuild 抛出在 process.env 里，这样我们就可以通过 vite 去配置静态资源的 base 路径为 upload 以后的路径

```yml
name: SuidaoAI 发布

on:
  push:
    branches:
      - main

jobs:
  vars:
    runs-on: ubuntu-latest
    steps:
      - uses: kokoroX/get-version-action@main
        id: get-version
    outputs:
      version: ${{ steps.get-version.outputs.version }}
      service-name: magelesi 官网
      test-enviroment: 测试环境
      test-service-url: https://www.magelesi.com/
      local-path: dist
      oss-region: oss-cn-shanghai
      oss-bucket: magelesi

  build:
    needs: vars
    uses: 0xTeams/reuse-workflows/.github/workflows/web.build.yml@main
    secrets: inherit
    with:
      build-run: npm run build
      public-path: https://oss.magelesi.com/
      version: ${{ needs.vars.outputs.version }}
      local-path: ${{ needs.vars.outputs.local-path }}

  upload:
    needs: [vars, build]
    uses: 0xTeams/reuse-workflows/.github/workflows/web.upload-ali-oss.yml@main
    secrets:
      oss-key-id: ${{ secrets.OSS_KEY_ID }}
      oss-key-secret: ${{ secrets.OSS_KEY_SECRET }}
    with:
      version: ${{ needs.vars.outputs.version }}
      oss-path: ${{ needs.vars.outputs.oss-path }}
      local-path: ${{ needs.vars.outputs.local-path }}
      oss-region: ${{ needs.vars.outputs.oss-region }}
      oss-bucket: ${{ needs.vars.outputs.oss-bucket }}

  deployment:
    needs: upload
    runs-on: ubuntu-latest
    environment: development
    steps:
      - uses: actions/download-artifact@v3
        with:
          name: build-artifact-index.html
          path: build

      - name: Deploy to Server
        uses: easingthemes/ssh-deploy@main
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          SOURCE: 'build/index.html'
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: /home/htdocs/magelesi/index.html

  dev-success-notice:
    needs: [deployment, vars]
    uses: 0xTeams/reuse-workflows/.github/workflows/feishu.success.notice.yml@main
    secrets: inherit
    with:
      version: ${{ needs.vars.outputs.version }}
      service-name: ${{ needs.vars.outputs.service-name }}
      service-url: ${{ needs.vars.outputs.test-service-url }}
      enviroment-name: ${{ needs.vars.outputs.test-enviroment }}

  dev-failure-notice:
    if: failure()
    needs: [build, deployment, vars]
    uses: 0xTeams/reuse-workflows/.github/workflows/feishu.failure.notice.yml@main
    secrets: inherit
    with:
      service-name: ${{ needs.vars.outputs.service-name }}
      version: ${{ needs.vars.outputs.version }}
      enviroment-name: ${{ needs.vars.outputs.test-enviroment }}
```

- 这是一个 GitHub Actions，用于获取个人规则的版本号。它的主要内容包括：
  - name：指定这个 Action 的名称为 "Get version"。
  - description：对这个 Action 进行描述，即获取个人规则版本号。
  - outputs：定义 Action 的输出参数，包括一个名为 "version" 的输出参数，用于保存获取到的个人规则版本号。
  - runs：定义 Action 的运行方式，使用 "composite" 运行模式，即由多个步骤组成。
  - 在 runs 中，这个 Action 包含两个步骤：
    - 第一个步骤使用了 benjlevesque/short-sha@v2.1 Action，用于获取 Git 提交的短 SHA 值。
    - 第二个步骤是一个自定义步骤，用于生成个人规则的版本号。它首先设置了时区为 "Asia/Shanghai"，然后获取当前日期，将分支名中"/" - 替换为 "\_"，最后将获取到的日期、分支名和短 SHA 值拼接成一个版本号，并将其输出到 $GITHUB_OUTPUT 中。
  - 最终，这个 Action 会将生成的版本号保存到 "version" 输出参数中，供其他 Action 使用。

```yml
name: 'Get version'
description: '获取个人规则版本号'
outputs:
  version:
    description: '个人规则版本号'
    value: ${{ steps.version-generator.outputs.version }}
runs:
  using: 'composite'
  steps:
    - uses: benjlevesque/short-sha@v2.1
      id: short-sha
      with:
        length: 8
    - id: version-generator
      run: |
        export TZ='Asia/Shanghai'
        DATE=$(date +'%Y%m%d')
        export ORIGIN_REF_NAME=${{ github.ref_name }}
        export REF_NAME=${ORIGIN_REF_NAME//\//\_}
        echo "version=$DATE-$REF_NAME-${{ steps.short-sha.outputs.sha }}" >> $GITHUB_OUTPUT
      shell: bash
```

- 这是一个 GitHub Actions 的工作流文件，用于将本地文件上传到阿里云 OSS 对象存储中。该工作流文件包含以下内容：
  - name: 工作流的名称为 Upload Ali OSS。
  - on: 触发工作流的事件为 workflow_call，即通过其他工作流调用该工作流。
  - inputs: 工作流需要的输入参数包括 oss-path、local-path、version、oss-region 和 oss-bucket，均为字符串类型，并且都是必须- 的。
  - secrets: 工作流需要的秘钥包括 oss-key-id 和 oss-key-secret，均为必须的。
  - jobs: 工作流的主要任务为上传文件到 OSS，其中 upload 为任务名称，runs-on 表示运行环境为 ubuntu-latest。
  - steps: 任务的具体步骤包括：使用 actions/checkout 拉取代码，使用 actions/download-artifact 下载构建产物，使用 tvrcgo/upload-to-oss 将本地文件上传到 OSS。其中，upload_to_oss 为步骤名称，id 表示该步骤的唯一标识符，uses 表示使用的 action,with 表示传递给 action 的参数，其中 assets 表示上传的文件路径。

```yml
name: Upload Ali OSS

on:
  workflow_call:
    inputs:
      oss-path:
        required: true
        type: string
      local-path:
        required: true
        type: string
      version:
        required: true
        type: string
      oss-region:
        required: true
        type: string
      oss-bucket:
        required: true
        type: string
    secrets:
      oss-key-id:
        required: true
      oss-key-secret:
        required: true

jobs:
  upload:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: actions/download-artifact@v3
        with:
          name: build-dist-artifact
          path: ${{ inputs.local-path }}

      - name: Upload to oss
        id: upload_to_oss
        uses: tvrcgo/upload-to-oss@master
        with:
          key-id: ${{ secrets.oss-key-id }}
          key-secret: ${{ secrets.oss-key-secret }}
          region: ${{ inputs.oss-region }}
          bucket: ${{ inputs.oss-bucket }}
          assets: |
            ${{ inputs.local-path }}/**:/${{ inputs.oss-path }}/${{ inputs.version }}/
```

43. 服务器相关

- 创建密钥，打开 tcp，22 端口，ssh，可以远程连接
- 默认服务器不带 nginx，需要自己安装
  - sudo apt update
  - sudo apt install nginx
  - nginx -t：就能看到 nginx 在哪里进行配置了，然后再去配置 try files 让 SPA 的应用可以正常访问

44. 部署 SPA 网站到服务器上需要的注意事项

- 步骤

  - 获得版本号和一些变量，用于判断区分版本，新建文件夹
  - build
  - upload 静态资源 至 oss
  - upload index.html 至 服务器
  - 需要后端协助配置 nginx 的 try files

    - etc/nginx/default.d/nginx.config 下是`nginx`的配置文件
    - 为了分离，我们一般自己建一个`config.d`，并被`nginx.config`引入`include /etc/nginx/conf.d/*.conf;`
    - nginx 默认对 home 页面的文件没有读取能力，所以需要你给他权限：`sudo chmod a+r /home/htdocs/starbucks/index.html`
    - 不要忘记为单页应用配置 try files

      ```conf
      server {
        listen 80;
        listen [::]:80;
        server*name *;
        root /usr/share/nginx/dist;
        location / {
        index /index.html;
        try_files $uri /$uri /index.html;
        }
      }
      ```

  - 修改 vite.config.js 的 base，让静态资源的指向为 oss 存放地址，这里注意是通过 actions 中抛出的文件路径

45. 创建 oss 服务

- 想要使用图形化工具需要开启 ram 访问控制

46. 如何让同一个 ip 下局域网都能访问本地起的项目？

- 将 Vite 服务器绑定到 0.0.0.0 地址，意味着它将监听所有可用的网络接口，包括您的局域网 IP 地址。

- 在默认情况下，Vite 服务器会监听 localhost 地址（即 127.0.0.1），这意味着只有本地主机可以访问它。但是，如果您将服务器绑定到 0.0.0.0 地址，它将监听所有可用的网络接口，包括您的局域网 IP 地址。这样，您的局域网中的其他设备就可以通过使用您的局域网 IP 地址和端口来访问 Vite 服务器了。

- 例如，如果您将 Vite 服务器绑定到 0.0.0.0 地址，并使用端口号 3000，则可以通过在局域网中的其他设备上使用以下地址来访问它：

```js
// vite.config.js
export default {
  server: {
    host: '0.0.0.0',
  },
}
```

47. 组件之间的数据不要耦合

- 不要过度依赖其他组件的数据，要独立

48. taro

- 当你创建一个 Taro 应用时，在项目的根目录下会有一个 app.tsx（或 app.jsx）文件，其中定义了一个名为 App 的组件。这个 App 组件是 Taro 框架默认的应用程序组件，用于承载整个应用程序的内容。

- Taro 框架会在运行时自动找到 app.ts 文件并调用 App 组件，然后将 App 组件的内容渲染到应用程序的页面中。

- 因此，你不需要在其他文件中手动调用 App 组件。只需确保 app.ts 文件中定义了 App 组件，并且通过 return props.children 将子组件渲染到页面上即可。Taro 框架会负责调用和渲染 App 组件，并将子组件作为内容进行渲染。

49. post 请求

- body 默认会 toString
- 所以需要我们`body: JSON.stringify(params),`

50. useCallback,useMemo 的使用 ❌

51. taro 修改 tabbar 和 navigation

- navigation 用了掘金写好的
- tabbar 自定义会出现闪烁问题

52. taro 像素 自适应

```js
// config
// 设计稿给的750，如果我们的设计稿宽度是w，24px实际就应该是24*(750/w)*deviceRatio
// 注意这里deviceRatio也有区别，不同宽度不一样，所以如果设计图是375就要*2
const config = {
  projectName: 'wechatmall',
  date: '2023-6-1',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
}
```

53. figma 判断两个东西之间的高度

- insepcet

54. 配置@路径别名 ❌

55. 子元素超出父元素的高度，但是没出现滑动条

- 给父元素增加 css 属性`overflow: auto`
- overflow: auto; 是 CSS 中的一个属性，用于控制容器元素在内容超出容器尺寸时的表现方式。
- 当将 overflow 属性设置为 auto 时，容器会根据内容是否溢出来自动显示滚动条。如果容器的内容没有超出容器的尺寸，则不会显示滚动条。当容器的内容超出容器的尺寸时，会自动显示滚动条，以便用户可以滚动查看超出部分的内容。
- 具体原理是，当容器的内容超出容器的尺寸时，容器会创建一个滚动框，其中包含内容并显示滚动条。用户可以通过滚动条或触摸滚动操作来滚动内容。滚动框可以水平和垂直滚动，具体取决于内容的溢出方向。
- 因此，通过将 overflow: auto; 应用于容器元素，您可以实现在内容超出容器时显示滚动条并允许用户滚动查看内容的效果。

56. image 导致的间隙

- 当你将 Image 组件的样式设置为 display: block; 时，它会以块级元素的形式显示。这会导致 Image 元素在布局中占据整个可用宽度，并且不会有默认的行内元素间隙。这样可以消除 Image 元素周围的间隙，使其紧密贴合父容器。
- 在默认情况下，Image 组件可能被视为行内元素，会保留一些行内元素的特性，例如基线对齐和字间距等。这可能会导致一些额外的间隙或布局问题。通过将其样式设置为 display: block;，可以将其转换为块级元素，以更好地控制布局和间隙。

57. taro 小程序高度计算

- 记得要减去安全区域的高度

58. icon

- 非 tabbar 尽量用 svg

59. svg 做网状图大屏项目

- svg 起点 move to

60. 给 backgroundcolor 设置一个中间向四周的渐变色怎么设置？❌

-

61. useSate 像设置数组的 ts 类型
    `const [swiperPic,setSwiperPic] = useState<string[]>([]);`

62. ts 定义完类型初始化数据报错？

- 这里 couponList 必须要设置为`couponListItemType | null`,
- 如果设置为`couponListItemType | {}`,在初始化你给了{},就无法推导至 couponListItemType 类型了

```js
type couponInfo = {
  couponName: string,
  couponDeadLine: string,
  couponPrice: string,
  couponStrict: string,
  couponRange: string,
}

type couponListItemType = {
  trueCoupon: number
  falseCoupon: number
  trueCouponList: couponInfo[]
  falseCouponList: couponInfo[]
}
interface orderStateType {
  state:{
    couponList: couponListItemType | null
  },
  actions:{
    setCouponList: (data:couponListItemType) => void
  }
}

export const useCouponState = create<orderStateType>((set,get) => ({
    state:{
      couponList: null
    },
    actions:{
      setCouponList (data) {
        set(produce(draft => {
          draft.state.couponList = data
        }))
      }
    }
}))
```

63. 箭头函数

- 箭头函数的 this 由上下文决定不会被 call，apply 修改

64. 策略模式

- 当 if else 很多的情况下，需要用到策略模式
- 常用的写法是

  - 先写一个策略方案，可以是对象，可以是函数

    ```js
    const sortingStrategies = {
      bubbleSort: (arr) => {
        // 实现冒泡排序算法
        // ...
        return sortedArr
      },
      quickSort: (arr) => {
        // 实现快速排序算法
        // ...
        return sortedArr
      },
      mergeSort: (arr) => {
        // 实现归并排序算法
        // ...
        return sortedArr
      },
    }
    ```

  - 创建上下文对象：上下文对象用于管理策略的使用。它可以接收外部输入并将其传递给适当的策略对象。上下文对象可以根据特定条件选择不同的策略，并在需要时调用所选策略的方法或函数。

    ```js
    // 创建上下文对象
    class SortContext {
      constructor(strategy) {
        this.strategy = strategy
      }

      setStrategy(strategy) {
        this.strategy = strategy
      }

      sort(arr) {
        if (typeof this.strategy === 'function') {
          return this.strategy(arr)
        }
        throw new Error('Invalid strategy')
      }
    }
    ```

  - 调用策略：根据上下文对象中的条件或参数，选择适当的策略对象，并调用相应的方法或函数。

    ```js
    // 使用策略模式进行排序
    const sortContext = new SortContext(sortingStrategies)

    const arr = [4, 2, 7, 1, 5]

    // 使用冒泡排序算法
    sortContext.setStrategy(sortingStrategies.bubbleSort)
    const sortedArr = sortContext.sort(arr)
    console.log(sortedArr) // 输出排序结果

    // 使用快速排序算法
    sortContext.setStrategy(sortingStrategies.quickSort)
    const sortedArr = sortContext.sort(arr)
    console.log(sortedArr) // 输出排序结果

    // 使用归并排序算法
    sortContext.setStrategy(sortingStrategies.mergeSort)
    const sortedArr = sortContext.sort(arr)
    console.log(sortedArr) // 输出排序结果
    ```

65. grid 布局 ❌

66. Taro 和 Taro-ui 版本不兼容

- Taro-ui 报错
- 执行 pnpm i taro-ui@next
- 然后会安装这个版本的 Taro-ui: `"taro-ui": "3.1.0-beta.6"`,

67. 同一台服务器配置不同的前端项目 ❌

- 给不同的 server
- 命名不同的 server name

68. 静态资源引用问题

- baseUrl：/ 是绝对路径
- 修改为./是相对路径，可以在服务器里相对路径去找静态资源

69. Taro 3 只能配合使用 taro-ui@next 版本

70. Taro 使用 axios：<https://juejin.cn/post/7122834229200683022>

71. Taro axios

```jsx
import { axios } from 'taro-axios'
import qs from 'qs'
export const API_PATH = 'https://api.qxd-lab.com/'

export const baseAxios = axios.create({
  baseURL: API_PATH,
  timeout: 5000, // 设置超时时间为5秒
})

enum Method {
  POST = "POST",
  GET = "GET"
}

enum APIPath {
  用户登录 = "/api/user/login",
}

// 添加请求拦截器
baseAxios.interceptors.request.use(
  async function (config) {
    // 在发送请求之前做些什么
    // if (localStorage.getItem('token')) {
    //   config.headers.Authorization = localStorage.getItem('token')
    // }
    return config
  },
  function (error) {
    // 对请求错误做些什么
  }
)

// 添加响应拦截器
baseAxios.interceptors.response.use(
  async (response): Promise<any> => {
    return response
  },
  function (error) {
  }
)

const common = ({ action, method, params }) => {
  return method === Method.GET
    ? baseAxios.get("", { params: { ...params, s: action } })
    : baseAxios.post("", params, { params: { s: action } });
};

// 登陆
export function weLogin(params?) {
  return common({ action: APIPath.用户登录, params, method: Method.POST });
}
```

72. 小程序登录/获取手机号

- 登录用 code 换 token
- 获取手机号也是用 code 换 sessionkey，然后用 sessionkey/encrypted_data/iv(这里的 encrypted_data/iv 是 onGetPhoneNumber 回调函数里的 e) 解密手机号
- 注意一个 code 只能用于一次登录，用于登录以后获取手机号需要另外一个 code 来计算

```jsx
const confirmInfo = async (e) => {
  try {
    if (e.detail.errMsg !== 'getPhoneNumber:fail user deny') {
      const launchData = Taro.getLaunchOptionsSync()
      // 获取 code
      const wxLoginResult = await Taro.login()
      // 获取用户信息
      const wxUserInfoRequest = await Taro.getUserInfo()

      const userInfo: any = {
        ...wxUserInfoRequest.userInfo,
        channel: launchData.query.channel || '',
        mobile: launchData.query.mobile || '',
      }
      userInfo.nickName = userState.nickName || ''
      userInfo.avatarUrl = userState.avatar || ''
      // 转成json后端才能正常接受
      const user_info = JSON.stringify(userInfo)

      const userData: any = {
        code: wxLoginResult.code,
        user_info,
        encrypted_data: wxUserInfoRequest.encryptedData,
        iv: wxUserInfoRequest.iv,
        signature: wxUserInfoRequest.signature,
        wxapp_id: 10001,
        referee_id: launchData.query.referee_id || '',
      }
      const { data } = await CommonApi.weLogin({ ...userData })
      const userReturn = data.data
      const token = userReturn.token
      const userId = userReturn.user_id
      systemActions.setAuthInfo({ token: token, userId: userId })
      // 这里存一份到全局的状态里去
      Taro.setStorage({
        key: 'token',
        data: token,
      })
      Taro.setStorage({
        key: 'userId',
        data: userId,
      })
      if (userReturn.mobile == '') {
        const phoneCode = await Taro.login()
        const sessionKeyResponse = await CommonApi.getSessionKey({
          code: phoneCode.code,
        })
        const sessionKey = sessionKeyResponse.data.data.session_key
        await CommonApi.bindPhoneNumber({
          encrypted_data: e.detail.encryptedData,
          iv: e.detail.iv,
          session_key: sessionKey,
        })
      }
      Taro.showToast({
        title: `登录成功!`,
        icon: 'success',
        duration: 2000,
      })
      Taro.navigateBack()
    } else {
      Taro.showToast({
        title: '取消授权',
      })
    }
  } catch (error) {
    console.log('er', error)
    Taro.showToast({
      title: `登录失败!`,
      icon: 'error',
      duration: 2000,
    })
  }
}
```

73. 全局状态初始状态为空应该怎么写？

- 修改前

```jsx
// 像这种token全局状态，默认为空，我应该怎么写
import { create } from 'zustand'
import { produce } from 'immer'

interface SystemStateType {
  state: {
    token: string,
    userId: string,
    currentTitle: string,
    userInfo: {
      isLogin: boolean,
    },
  };
  actions: {
    setCurrentTitle: (title: string) => void,
    setUserInfo: (user) => void,
  };
}

export const useSystemState =
  create <
  SystemStateType >
  ((set, get) => ({
    state: {
      token: '',
      userId: '',
      currentTitle: 'pages/index/index',
      userInfo: {
        isLogin: false,
      },
    },
    actions: {
      setCurrentTitle(title) {
        set(
          produce((draft) => {
            draft.state.currentTitle = title
          })
        )
      },
      setUserInfo(user) {
        set(
          produce((draft) => {
            draft.state.userInfo = { ...draft.state.userInfo, ...user }
          })
        )
      },
    },
  }))
// 我不希望去判断token !== '' 这种判断风险太大
```

- 修改后

```jsx
// 将token的类型增加一个null或者undefined
// 同时增加一个boolean函数去判断是否有token，这样可以不用在前端显式的比较token的字符串值
import { create } from 'zustand'
import { produce } from 'immer'

interface SystemStateType {
  state: {
    token: string | null,
    userId: string,
    currentTitle: string,
    userInfo: {
      isLogin: boolean,
    },
  };
  actions: {
    setCurrentTitle: (title: string) => void,
    setUserInfo: (user) => void,
  };
}

export const useSystemState =
  create <
  SystemStateType >
  ((set, get) => ({
    state: {
      token: '',
      userId: '',
      currentTitle: 'pages/index/index',
      userInfo: {
        isLogin: false,
      },
    },
    actions: {
      setCurrentTitle(title) {
        set(
          produce((draft) => {
            draft.state.currentTitle = title
          })
        )
      },
      setUserInfo(user) {
        set(
          produce((draft) => {
            draft.state.userInfo = { ...draft.state.userInfo, ...user }
          })
        )
      },
    },
  }))

interface SystemStateType {
  // ...
  helpers: {
    hasToken: () => boolean,
  };
}

export const useSystemState =
  create <
  SystemStateType >
  ((set, get) => ({
    // ...
    helpers: {
      hasToken: () => {
        return get().state.token !== ''
      },
    },
  }))
```

74. React.memo

- React.memo() 默认使用浅比较来比较 props 的变化。如果 props 包含复杂的对象或数组，且其引用没有发生变化，但内部数据发生了变化，React.memo() 可能会导致组件不会重新渲染。
- 在这种情况下，可以通过传递自定义的比较函数作为第二个参数给 React.memo() 来实现更精确的比较。

75. useMemo/useCallback

- useMemo

  - 当你在使用 React 中的函数组件时，有时候你可能会遇到以下情况：

    - 计算结果的缓存：某个函数的计算结果依赖于一些输入值，但是这些输入值没有发生变化时，你希望避免重复计算。这时可以使用 useMemo 钩子来缓存计算结果。
    - useMemo 用于对复杂计算的结果进行记忆化，只有当依赖项发生变化时才重新计算。它避免了不必要的重复计算，有助于优化性能。特别是在计算资源密集或耗时较长的情况下，它非常有用。

    ```jsx
    const Component = ({ data }) => {
      // 依赖于 data 的计算结果，避免重复计算
      const result = useMemo(() => expensiveCalculation(data), [data])

      return <div>{result}</div>
    }
    ```

- useCallback

  - 避免不必要的函数重复创建：当你将一个函数作为 prop 传递给子组件时，如果该函数在父组件重新渲染时会被重新创建，可能会导致子组件不必要地重新渲染。这时可以使用 useCallback 钩子来缓存函数引用，确保它只在依赖项发生变化时才会重新创建。
  - 当父组件传递给子组件的 onClick 函数发生变化时，handleClick 函数会被重新创建。通过使用 useCallback，我们确保只有当 onClick 发生变化时，handleClick 才会重新创建。这样可以避免不必要的子组件重新渲染。
  - 另一方面，useCallback 用于记忆化函数引用，确保只有在依赖项发生变化时才重新创建函数。在将函数作为 prop 传递给子组件的场景中，它可以避免不必要的子组件重新渲染。通过缓存函数引用，你可以确保一致的行为并优化性能。

    ```jsx
    const Component = ({ onClick }) => {
      // 缓存函数引用，避免不必要的重复创建
      const handleClick = useCallback(() => {
        console.log('Button clicked')
        onClick()
      }, [onClick])
      return <button onClick={handleClick}>Click me</button>
    }
    ```

- 需要注意的是，对于一些简单的计算或短小的函数，过度使用 useMemo 和 useCallback 可能会带来额外的开销。因此，在使用这两个钩子时，需要权衡性能和代码可读性，避免过度优化。只在真正需要优化的情况下使用它们，确保优化带来的收益大于开销。

76. 如果多状态不用三目运算符应该怎么写？

```jsx
function renderPage(pageState) {
  switch (pageState) {
    case 'state1':
      return <Page1 />
    case 'state2':
      return <Page2 />
    case 'state3':
      return <Page3 />
    default:
      return null
  }
}

return <div>{renderPage(pageState)}</div>
```

77. 总结出的切图规律

- 不要给最外层设置 padding，这样会导致滚动条出现在内层
- 能用 flex 就用 flex
- 多封装 flexBetween，flexCenter，flexBetweenCol 之类的固定样式

78. 小程序上传阿里云 oss

```tsx
if (avartar !== '' && nickName != '') {
  const ossData: any = await CommonApi.upLoadUserProfile()
  const ossInfo = ossData.data.data
  const uploadTask = await Taro.uploadFile({
    url: ossInfo.host,
    filePath: avartar,
    name: 'file',
    formData: {
      key: `${avartar}`,
      policy: ossInfo.policy,
      OSSAccessKeyId: ossInfo.accessKeyId,
      signature: ossInfo.signature,
      success_action_status: '200',
      'x-oss-security-token': ossInfo.securityToken,
    },
  })
  userActions.setUserInfo({
    nickName: nickName,
    avatar: `https://static.qxd-lab.com/${avartar}`,
  })
}
```

79. 当一个 useState 有 2 个类型

- 首先用联合类型
- 其次中途修改类型没有问题
- 但是当赋值的时候你从 a 类型改成 b 类型，ts 不知道你是在给哪个类型赋值，所以会出现 a 类型没有 xxx 属性
- 解决方案：赋值的时候使用 as 告诉 ts 这个类型具体是哪个类型

80. 图片刚出现被拉伸一下

- 需要设置一个图片的最大高度

81. 使用插件后微信开发者工具可以打开项目，手机不行

- qs版本降到5.0.0即可

82. 为什么有的时候后端让我用formData传输但是我用form-urlencoded也可以正常传输？

- 这两种方式（application/x-www-form-urlencoded和multipart/form-data）都是用于发送表单数据的，但是它们适用于不同的场景。

- application/x-www-form-urlencoded: 这种方式将表单数据编码为URL参数形式，即名称/值对。这种方式适合于小量数据的传输，尤其是当表单只包含文本字段时。如果你尝试使用这种方式发送文件，它将不起作用，因为它不能用于传输二进制数据。

- multipart/form-data: 这种方式将表单数据分为多个部分，每个部分包含一个表单字段的数据。这种方式既可以发送文本数据，也可以发送二进制数据（如文件）。当表单包含文件上传控件时，通常使用这种方式。

- 如果你的请求只包含文本数据，那么使用哪种方式可能并不重要，因为它们都可以正确地发送数据。但是，如果你的请求需要包含文件或其他二进制数据，那么你必须使用multipart/form-data。

- 后端可能会建议你使用multipart/form-data，因为这种方式更加通用，既可以处理文本数据，也可以处理二进制数据。此外，如果后端预计表单将来可能会添加文件上传功能，那么建议使用multipart/form-data也是有前瞻性的。

- form-urlencoded：直接用 form 表单提交数据就是这种，它和 query 字符串的方式的区别只是放在了 body 里，然后指定下 content-type 是 application/x-www-form-urlencoded。

- form data 不再是通过 & 分隔数据，而是用 --------- + 一串数字做为 boundary 分隔符。因为不是 url 的方式了，自然也不用再做 url encode。form-data 需要指定 content type 为 multipart/form-data，然后指定 boundary 也就是分割线。body 里面就是用 boundary 分隔符分割的内容。很明显，这种方式适合传输文件，而且可以传输多个文件。但是毕竟多了一些只是用来分隔的 boundary，所以请求体会增大。

83. 修改node_modules

- 使用pnpm patch <pkg> 其中是自己需要修改的包，需要明确指定版本号。
- 该命令会生成一个本地的地址，将该地址导入到vscode。修改完成后执行pnpm patch-commit <地址>
- 最后一定要使用pnpm 执行命令，否则不生效

- 例如pnpm patch taro-ui@
- 会生成一个临时的项目地址，在缓存文件中，打开它并修改

84. immer

- immer可以像直接修改可变对象一样来修改不可变对象
- 不可变对象例子

  ```js
  // 1.在涉及到引用传递的情况下。这可能会在代码中引入难以追踪的错误
  const originalPerson = { name: 'Alice', age: 30 };

  // modifiedPerson 实际上是引用了 originalPerson 对象。
  // 当你将 originalPerson 赋值给 modifiedPerson 时，它们两者都指向了相同的内存位置，即同一个对象。
  // 因此，当你修改 modifiedPerson 的 age 属性时，实际上是在修改原始的 originalPerson 对象。
  const modifiedPerson = originalPerson;
  modifiedPerson.age = 31;

  console.log(originalPerson.age); // 输出 31，但预期应该是 30

  // 2.如果使用不可变性原则，应该创建一个新的对象来表示修改后的状态，以避免直接修改对象引发的问题
  const originalPerson = { name: 'Alice', age: 30 };

  // 正确的做法：创建新的对象表示修改后的状态
  const modifiedPerson = { ...originalPerson, age: 31 };

  console.log(originalPerson.age); // 输出 30
  console.log(modifiedPerson.age); // 输出 31
  ```

- 但是当对象的层次非常深的时候进行解构会十分困难

  ```js
  // 3. 使用immer的写法
  import { produce } from 'immer'
  const originalPerson3 = { name: 'Alice', age: 30 }
  const modifiedPerson3 = produce(originalPerson3 ,draft=> {
    draft.age = 33
  })

  console.log('originalPerson3', originalPerson3)//30
  console.log('modifiedPerson3', modifiedPerson3)//33
  ``

- 结合zustand的写法
  - set 函数会隐式地传入当前的状态对象。这样，你在使用 set 函数时，不需要显式传递整个状态对象，而是只需要传递一个修改函数。
  - 这种设计的目的是让你在修改状态时更加简洁和方便，避免了手动传递整个状态对象的繁琐。当你在 set 函数中调用 produce 时，produce 的第一个参数 draft 会被自动设置为当前状态对象，你只需要在其中描述你要修改的部分即可。
  - 传递给 produce 函数的参数（无论叫什么名字）实际上都是 zustand 初始化时的状态。

  ```ts
  // 在使用 immer 库时，虽然看起来我们在修改的过程中似乎是直接修改了原始对象。
  // 但实际上 immer 在幕后做了一些魔术，让这些修改在不违反不可变性原则的情况下得以实现。
  // 具体来说，当你使用 produce 函数时，immer 会创建一个被称为 "draft" 的虚拟副本，该副本具有与原始对象相同的结构。
  // 然后，在你的修改函数中，你可以像修改普通对象一样修改这个 "draft" 对象。
  // 重要的是要注意，在你的修改函数内部，实际上是在修改 "draft" 而不是原始对象。
  // 当你通过修改 "draft" 完成所有的更改后，immer 会根据你所做的修改生成一个全新的不可变对象，并将这个新对象返回作为修改的结果。
  setCartList(data) {
    set(produce((draft) => {
      draft.cartList = data;
    }));
  }
  ```

85. require和import

- require:
  - require 是 CommonJS 规范中定义的一种模块引入语法，通常用于 Node.js 环境或支持 CommonJS 规范的 JavaScript 运行时环境。它是同步的，意味着在调用 require 时，代码会等待被引入的模块加载完成后才继续执行后续代码。语法示例：`const module = require('module-name');`
- import:
  - import 是 ECMAScript（ES）模块规范中定义的一种模块引入语法，用于现代浏览器、Node.js 的 ES 模块环境，以及 TypeScript。
它是异步的，允许更好的并行加载，不会阻塞代码的执行。语法示例：`import module from 'module-name';`

86. 为什么 TypeScript 中只能使用 import 而 JavaScript 中可以使用 require 呢？

- 这是因为 TypeScript 在设计时更加现代化，从 ES 模块规范中获得灵感，并且为了兼容未来的 JavaScript 标准。在 TypeScript 中，你可以通过设置编译目标为 ES5 或更高版本来使用 import 语法。而 require 是 CommonJS 规范的一部分，与 ES 模块规范不兼容，所以在 TypeScript 中选择了支持更为标准和现代的 import。
- 至于为什么 JavaScript 中可以使用 require，主要是因为 Node.js 最初使用了 CommonJS 规范作为模块系统，而 Node.js 团队后来引入了对 ES 模块的支持，所以在 Node.js 环境中，你可以同时使用 require 和 import。

87. zustand：createWithEqualityFn/create
