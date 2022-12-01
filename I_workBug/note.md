# workBug

1. react 中 form 表单 post 请求
   - ajax
   - axios,ref 记录,用一个对象包裹,发送
2. ajax 的不同使用场景
3. 动态类名解决多状态
   - classnames
4. decodeUrlComponent 解码问题
   - 不能放在参数里解码，容易变成字符串的 undefine(区分不出)
5. zustand 常用逻辑 set，get，usepagestate()...
6. actions 的先后顺序问题
   - .then 解决
7. 所有 useEffect，useDidShow 写一个就好
8. queryString 拿到 url 上的参数
9. 倒计时 use-timer
10. 多环境
11. 固定高度要用大写的 PX，但是尽量用 rpx 因为是响应式
12. pc+mobile 响应式切图

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

13. vite 配置别名解决打包错误/解决本地开发跨域问题

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

14. 给后端的数据结构
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
15. 关闭 ts 类型监测
16. 项目手机端预览要在同一局域网 ip 下
17. css module taro 中使用在 config 下 index.js 中修改，h5 在 vite.config.js 中修改

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

18. 在 vite 中配置 alias,采用 vite + typescript 开发，配置别名时会报错：找不到模块“path”或其相应的类型声明 或者 找不到名称“\_\_dirname”等

```bash
npm install @types/node --save-dev
```

19. pc 端切图不要写高度，用 container 的 padding 撑开上下的高度

20. qs 的使用

```js
// ?id = 1
let params = location.search
console.log('params', params) //params ?id=1
params = params.replace(/^\?/, '')
console.log('params2', params) //params2 id=1
let qs = QueryString.parse(params)
console.log('qs', qs) //qs {id: '1'}
```

21. #的含义(锚点)

- #代表网页中的一个位置。其右面的字符，就是该位置的标识符。
- `http://www.example.com/index.html#print` 代表 index.html 中 print 的位置，浏览器读取这个 URL 后，会自动将 print 位置滚动至可视区域。
- 为网页位置指定标识符，有两个方法。一是使用锚点，比如`<a name="print"></a>`，二是使用 id 属性，比如`<div id="print" >`。

22. 短链接生成工具:草料

23. nginx 反向代理

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
- 所以我们配 try file，不过是为了访问`/index.js`是文件就访问真实的文件，不是文件就打到`index.html`上

24. 数据流管理常用逻辑

- state，action 分开写
- 不要在拿到的同时打 log，同步任务优先执行

25
. 连接服务器用 vscode server 就好

26. 小程序重复扫码得到的是第一次的内容

- 扫码放到一个页面去判断
- 不要用`Taro.getLaunchOptionsSync().query.code_ticket code`这个只能接收到第一次扫描的二维码参数
- 用 useRouter 解析的 parmas 去得到每次的新二维码参数

```js
const { params } = useRouter()
```

27. rn 文字不会换行

- 默认视为一个单词了，要用 wrap 给他换行

28. useDidshow 获取数据，返回页面会多加载一次，用 usedidhide 在出页面的时候删掉

29. postcss处理兼容

30. we分析
- 添加自定义事件

31. rn bable
- 解决导出模块化的问题
```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from',
  ],
};
```

32. zustand跨页面拿数据
```js
useGlobalState.getState().state
```

32. rn持久化存储，用户鉴权
- https://react-native-async-storage.github.io/async-storage/docs/install
- 配合zustand全局状态管理
  - zustand创建token的model
  - 路由根据zustand token model来更新(会自己传递更新组件)
  - app里初始化token，AsyncStorage有token就同步更新全局model状态的token
  - 这样更新后的token就会同步传递到路由组件当中
  - 注意存取token是异步的，需要加loading判断后再展示页面

33. 导出x倍图，缩小展示
```jsx
<Image
  source={require('../assets/Doodle.png')}
  style={styles.homeImg}
  resizeMode='contain'
/>
// 定死宽高
```

34. axios
- get请求带参
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
- post请求
```js
export const login = 
    (phoneNumber:string,codeNumber:string) => baseAxios.post('pumpkin/mobile/auth/login',{mobile: phoneNumber,code: codeNumber})
```