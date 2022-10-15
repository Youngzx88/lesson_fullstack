//1.异步执行 fetch
//2.异步执行
// cpu运行时间cpu轮询//不耗时，
setTimeout(() => {
    console.log( 'a' );
}, 2000);
console.log( '1111111111111');//执行的显示结果1个cpu时间可以执行完的
//1111111111111
//aaaaaaaaaaaaa

//3.异步执行 普通事件 click才触发
//4.异步执行 I/O操作 Input/OutPut：硬盘-内存-CPU

//requir 关键字 引入一个模块 Stack Browser
const fs = require('fs');//fs fileSystem 硬盘 node内置的模块
fs.readFile('./1.js',function(err , data){
    console.log(data);
});//读文件耗时
console.log('22222222222');