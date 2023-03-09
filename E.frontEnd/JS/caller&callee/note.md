# caller & callee

## callee

- callee是arguments的一个属性，用来找到arguments的函数归属

```js
function add(a,b,c){
  console.log(arguments.callee.length)//3
  console.log(add.length)//3
  console.log(arguments.length)//2
}
add(1,3)
```

- 常用于匿名函数

```js
var sum = (function(n){
  if(n < 1) return 1;
  else return n + arguments.callee(n-1)
}(10))
console.log("sum",sum)//56
```

## caller

- a函数使用b函数，b.caller(),返回的是test1
- 即返回调用当前函数的函数

```js
test1();
function test1(){
  test2()
}
function test2(){
  console.log(test2.caller())
}
```
