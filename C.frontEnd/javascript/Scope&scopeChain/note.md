# 作用域/作用域链

- [[ scope ]]
- 1. 函数创建时，生成的一个js内部的隐式属性
- 2. 函数存储作用域链的容器，作用域链
  - AO/GO
  - AO：函数执行期上下文
  - GO：全局执行期上下文
  - 函数执行完成后，AO是要销毁的
  - AO是一个即时的存储容器

```js
function a(){
  function b(){
    var b = 2;
  }
  var a = 1;
  b();
}
var c = 3;
a();
//1.当a函数被定义的时候，系统生成[[scope]]属性 
//2.[[scope]]保存该函数的作用域链
//3.该作用域第0位存储当前环境下的全局执行期上下文GO
//4.GO里存储全局下的所有对象，其中包含函数a和全局变量c
//5.当a函数预编译的时候，第0位存储a函数生成的AO，同时第1位存储Go
//6.查找变量是到a函数存储的作用域链顶端开始依次向下查找
//7.同理往下走b也有自己的scopeChain
//...
//8.当a函数执行完，a函数的AO被销毁的同事，b函数的scope将不存在，a函数回归到被定义时的状态，a函数的scope中仅有第0位GO
```
