// js单点入口
// require属于node运行环境的关键字，不支持浏览器前端运行环境，浏览器支持import
// es模块化方案 import from + export default
// 原因: js早期没有模块化方案任务比较简单，后期commonJS模块化方案
// var {counter,incCounter} = require('./lib');

//2.对象读操作
var mod = require('./lib');
//模块化输出后就不变了
console.log(mod.counter);//3
mod.incCounter();
console.log(mod.counter);//4

//1.解构读操作
// var {counter,incCounter} = require('./lib');
// //模块化输出后就不变了
// console.log(counter);//3
// incCounter();
// console.log(counter);//3