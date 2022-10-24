# workBug
- react中form表单post请求
- ajax的不同使用场景
- decodeUrlComponent解码问题
  - 不能放在参数里解码，容易变成字符串的undefined
- zustand常用逻辑
- actions的先后顺序问题
  - .then解决
- 所有useEffect，useDidShow写一个就好
- queryString拿到url上的参数
- 倒计时use-timer
- 多环境
- 固定高度要用大写的PX，但是尽量用rpx因为是响应式
- 响应式切图
  - pc直接切img ➕ 绝对定位 text
  - mobile img display：none，用text撑开文本，用img当作text的背景图
- 官网响应式切图
原理
  - pc端用img撑开div，文字绝对定位
  - mobile端用img当作background-image(cover)，用文字撑开div  
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
- vite配置别名解决打包错误/解决本地开发跨域问题
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
    <!-- 将所有/mail的请求发送到https://www.magelesi.com -->
    <!-- 以后可以改成将所有/api的请求发送到https://www.magelesi.com -->
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
- 给后端的数据结构
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
- 关闭ts类型监测