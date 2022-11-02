# workBug
1. react中form表单post请求
    - ajax
    - axios,ref记录,用一个对象包裹,发送
2. ajax的不同使用场景
3. 动态类名解决多状态
    - classnames
4. decodeUrlComponent解码问题
    - 不能放在参数里解码，容易变成字符串的undefine(区分不出)
5. zustand常用逻辑
6. actions的先后顺序问题
    - .then解决
7. 所有useEffect，useDidShow写一个就好
8. queryString拿到url上的参数
9. 倒计时use-timer
10. 多环境
11. 固定高度要用大写的PX，但是尽量用rpx因为是响应式
12. pc+mobile响应式切图
    - pc直接切img ➕ 绝对定位 text
    - mobile img display：none，用text撑开文本，用img当作text的背景图(bgi)
      ```html
      <div className='relative w-full'>
          <img className='hidden lg:w-full lg:block' src="https://www.magelesi.cn/assests/brandStory/1-%E5%85%AC%E5%8F%B8%E6%84%BF%E6%99%AF%402x-tuya.jpg" alt="" />
          <div className="bgImage bg-cover w-full">
            <div className='lg:mx-auto lg:absolute w-full lg:top-0 lg:left-0'>
              <div className="container mx-auto w-full">
                <div className='lg:pt-[10vw] p-20'>
                  <div className='mx-auto text-[12px] lg:text-[22px] lg:mx-auto lg:w-30'><img src="https://www.magelesi.cn/assests/brandStory/%E7%BB%84%202.png" alt="" /></div>
                  <div className="mx-auto opacity-[0.7] text-white text-[12px] lg:text-[22px] lg:text-white lg:opacity-[0.7] lg:mx-auto lg:w-30">我们秉承着建立低碳、绿色、健康、舒适的人类环境的理念，以纳米材料为核心，结合芯片技术，将在技术和市场上不断创新发展；坚持以客户为中心，持续为客户创造长期价值，相互成就，共享未来。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ```
      ```css
      .bgImage {
        background-image: url(https://www.magelesi.cn/assests/brandStory/honor%402x-tuya.jpg);
        background-position: center
      }
      ```

13. vite配置别名解决打包错误/解决本地开发跨域问题
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
      - format: 把json转化一下
      ```js
      //方法1：有兼容问题，老浏览器不支持URLSearchParams
      const params = new URLSearchParams({ foo: 'bar' });
      params.append('extraparam', 'value');
      axios.post('/foo', params);
      ```
      ```js
      //方法2: qs解决
      const qs = require('qs');
      axios.post('/foo', qs.stringify({ 'bar': 123 }));
      ```
15. 关闭ts类型监测
16. 项目手机端预览要在同一局域网ip下
17. css module taro中使用在config下index.js中修改，h5在vite.config.js中修改
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
18. 在vite中配置alias,采用vite + typescript开发，配置别名时会报错：找不到模块“path”或其相应的类型声明 或者 找不到名称“__dirname”等
```bash
npm install @types/node --save-dev
```
19. pc端切图不要写高度，用container的padding撑开上下的高度