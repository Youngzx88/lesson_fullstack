# workBug
- react中form表单post请求
- ajax的不同使用场景
- decodeUrlComponent解码问题
- zustand常用逻辑
- actions的先后顺序问题
- 所有useEffect，useDidShow写一个就好
- queryString拿到url上的参数
- 倒计时use-timer
- 多环境
```js
const env = Taro.getEnv();
let API_PATH = ''
if(Taro.getEnv() == ENV_TYPE.WEB){
  //h5
  API_PATH = '/api/index.php';
}else{
  //小程序端
  const accountInfo = Taro.getAccountInfoSync();
  //发布走 a域名 测试走b域名
  API_PATH = accountInfo.miniProgram.envVersion === 'release' ? 'https://xsad.tech-done.com/index.php' : 'https://xsad.tech-done.com/index.php';
}
```
- 固定高度要用大写的PX，但是尽量用rpx因为是响应式