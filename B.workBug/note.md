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
14. 项目手机端预览要在同一局域网 ip 下
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

- 可以将多个前端项目放在同一个服务器端口上。在nginx中，您可以为每个前端项目配置一个不同的location，用于指定该项目的静态资源文件路径。例如，如果将多个前端项目部署在同一个服务器上，并且它们的静态资源文件都存放在/var/www目录下，可以使用以下nginx配置，这样在访问example.com/project1的时候就会访问对应的文件夹：

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

23.

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

- 一种远程连接主机的方式，vscode中command+shift+p
- 配置好对应的ssh config进行连接
- 密码或者证书登陆

```config
Host oms-prod
  HostName xxx.xx.xxx.xx
  User xxxx
  IdentityFile /Users/youngzx/xxxx/neobio-prodFile/xxxx
```

39. react静态资源导入问题

- 为什么使用react开发，静态资源放在public文件夹下可以直接用相对路径而其他文件夹不可以？
  - 在 React 开发中，静态资源（如图片、样式文件等）通常被放置在 public 文件夹下，而不是放置在源代码文件夹中。这是因为 public 文件夹中的内容会被直接复制到构建输出的目录中，而不经过 webpack 或其他构建工具的处理。
  - 当你将静态资源放在 public 文件夹下时，可以使用相对路径来引用这些资源。这是因为浏览器会相对于当前页面的 URL 来解析这些资源的相对路径，并正确加载它们。
  - 然而，对于源代码文件夹中的其他文件夹，如 src 文件夹中的文件，它们通常需要通过模块导入的方式引用import，而不是使用相对路径。

39. 如果接口返回异常，但是postman返回正常，要考虑是不是拦截器里面写的内容有问题

40. oss没有缓存，通过oss的到的CDN是有缓存的，需要到域名服务器上去刷新一下CDN缓存

41. 想要对比组件刷新前后某一个状态的变化，不能使用useState，因为useState会导致组件强制刷新，状态会回复为初始值，要用useRef获得引用类型

42. git Actions

- 其实很多actions脚本都可以用github官方的去做，极大的降低了我们去编写脚本的压力
- 在这个脚本里public-path作为参数传入了另一个webBUild脚本，webBuild抛出在process.env里，这样我们就可以通过vite去配置静态资源的base路径为upload以后的路径

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
          SOURCE: "build/index.html"
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
    - 第二个步骤是一个自定义步骤，用于生成个人规则的版本号。它首先设置了时区为 "Asia/Shanghai"，然后获取当前日期，将分支名中"/" - 替换为 "_"，最后将获取到的日期、分支名和短 SHA 值拼接成一个版本号，并将其输出到 $GITHUB_OUTPUT 中。
  - 最终，这个 Action 会将生成的版本号保存到 "version" 输出参数中，供其他 Action 使用。

```yml
name: 'Get version'
description: '获取个人规则版本号'
outputs:
  version:
    description: "个人规则版本号"
    value: ${{ steps.version-generator.outputs.version }}
runs:
  using: "composite"
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
  - steps: 任务的具体步骤包括：使用 actions/checkout 拉取代码，使用 actions/download-artifact 下载构建产物，使用tvrcgo/upload-to-oss 将本地文件上传到 OSS。其中，upload_to_oss 为步骤名称，id 表示该步骤的唯一标识符，uses 表示使用的 action,with 表示传递给 action 的参数，其中 assets 表示上传的文件路径。

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

- 创建密钥，打开tcp，22端口，ssh，可以远程连接
- 默认服务器不带nginx，需要自己安装
  - sudo apt update
  - sudo apt install nginx
  - nginx -t：就能看到nginx在哪里进行配置了，然后再去配置try files让SPA的应用可以正常访问

44. 部署SPA网站到服务器上需要的注意事项

- 步骤
  - 获得版本号和一些变量，用于判断区分版本，新建文件夹
  - build
  - upload 静态资源 至 oss
  - upload index.html 至 服务器
  - 需要后端协助配置nginx的try files
    - etc/nginx/default.d/nginx.config 下是`nginx`的配置文件
    - 为了分离，我们一般自己建一个`config.d`，并被`nginx.config`引入`include /etc/nginx/conf.d/*.conf;`
    - nginx默认对home页面的文件没有读取能力，所以需要你给他权限：`sudo chmod a+r /home/htdocs/starbucks/index.html`
    - 不要忘记为单页应用配置try files

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

  - 修改vite.config.js的base，让静态资源的指向为oss存放地址，这里注意是通过actions中抛出的文件路径
