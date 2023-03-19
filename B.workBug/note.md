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
