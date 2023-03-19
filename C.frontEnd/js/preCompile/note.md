# 预编译

- var 在全局作用于声明是全局变量，在局部声明是局部变量
- 函数内的变量未声明会提升至全局
- 函数预编译

```js
function test (a) {
  console.log(a);
  var a = 1;
  console.log(a);
  function a () {}
  console.log(a);
  var b = function () {}
  console.log(b);
  function d(){}
}
test(2)
// AO Activation 函数上下文
// 1.AO = {},寻找形参和变量声明
//  - AO = {a:undefined,b:undefined},a行参,b函数表达式
// 2.把实参赋给行参 
// -  AO = {a:2,b:undefined},a行参,b函数表达式
// 3. 寻找函数声明，赋值函数体
// - AO = {a:function a {},b:undefined,d:function d {}},a函数声明,b函数表达式,d函数声明
// 4. 执行函数
// function a{},1,1.function b{}
```

- 全局GO：Global Object全局上下文

```js
var a = 2;
function a () {
  console.log(3)
}
console.log(a)//2
// GO(既window)
// 1. 创建GO寻找变量声明
// - GO { a: undefined }
// 2. 寻找函数声明
// - GO { a: function a {} }
// 3. 执行
// - 执行var a = 1 , 所以打印是1 
```

```js
// GO(既window)
// 1. 创建GO寻找变量声明
// - GO { d: undefined }
// 2. 寻找函数声明
// - GO { c: function c {},d: undefined }
// 3. 执行
// - 因为没执行到d那一行所以只会打印[Function: c] undefined 
console.log(c,d);
function c () {}
var d = function () {}//[Function: c] undefined
```
