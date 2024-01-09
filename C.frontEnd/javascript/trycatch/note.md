# try cathc

## 1、使用

- 手动抛出错误的方法
- 没有错误的时候不走catch
- 有2个前后的报错，执行到第一个错误就会被catch到，后面不执行
- 一定要执行的就放在finally中
- 通过throw去自定义e的抛出

```js
try {
  var a = "0x112";
  console.log("1")
  if(a === "0x112"){
    throw '代码错误'
  }
  console.log(a)
} catch (error) {
  console.log(e)
} finally {
  console.log("接下来的代码")
}
```
