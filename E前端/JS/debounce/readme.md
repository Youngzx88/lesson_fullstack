# 防抖
- 怎么去降低执行频率，释放下服务器和前端的压力呢?
- 单位时间执行多少次?限制单位时间内执行次数

> removeEventListener需要传入事件对应的函数？
- 原因是同一事件可以多次绑定不同函数
```javascript
btn.addEventListener( 'click ' ,function() {
// 当仅有一句话且这句话为返回值才可以不用{}
console.log( ' one ' ) ;
})
btn.addEventListener( ' click ' , function( ) {
console.log( 'two ' );
})
btn.addEventListener( 'click ' , function( ) {
console.log( 'three ' );
})
```