# let & var & const

## let

- 声明块级作用域的局部变量，初始化可选
- 同名变量无法被重新声明

## var

- 声明一个全局变量，但是要注意模块化的变量不会挂在在window上
- 当在函数中声明var时，作用域是局部的。
- 变量申明提升
- 同名变量可以被重复声明

## const

- 必须声明加初始化，不允许重新赋值
- 指向引用值，属性可删除或更改
- 一般涌来声明常量的关键词:url...
- 常量性质：全大写
- 变量性质的：用小驼峰

## let的进化

- 在打印一个还未声明的let参数时，会抛出还未初始化的异常
- 这是为了解决var的提升问题，提升以后赋值了undefined显然是不合理的
- 先获取，后声明：在Go中存在a，但是并未被初始化，可见let其实也提升了，但是只是未初始化罢了
- TDZ：暂时性死区，在执行之前都是暂时性死区，在预编译拿不到未赋值的数

## statement && declaration

- declaration：let，const，async，function，class，export，import
- statement：其他基本都是statement

## 词法声明不可以在单独一句中

- 为了向前兼容，保留了var的写法，并把它作为声明式，俄日不是词法声明

```js
if(true) var a = 1;//var属于声明语句()，不是声明式
if(true) let a = 2;//报错：词法声明不可以在单独一句中
```

## let对var的优化

- 并不是let创建了块级作用域
- 而是for的initialization block中用let触发了一种作用域创建机制
- for自增的时候会发生如下事情
  1. 系统会为for loop body -> 创建了一个新的词法作用域
  2. 在词法作用域中新声明一个i
  3. 将上一次迭代或者初始化的值赋值给这个新的i变量
  4. 对新的词法作用域内的i进行操作，i++

```js
const arr = []
for(var i = 0 ; i < 5; i++){
  arr[i] = function ()  {
    console.log(i)
  }
}
arr[0]()//5
arr[1]()//5
arr[2]()//5
arr[3]()//5

//================================

const arr2 = []
for(var i = 0 ; i < 5; i++){
  // 相当于把i传递进去了,i在IIFE当中有自己的作用域
  (function (i){
    arr[i] = function ()  {
      console.log(i)
    }
  })(i)
}
arr[0]()//0
arr[1]()//1
arr[2]()//2
arr[3]()//3

//================================

const arr3 = []
for(let i = 0 ; i < 5; i++){
  arr[i] = function ()  {
    console.log(i)
  }
}
arr[0]()//0
arr[1]()//1
arr[2]()//2
arr[3]()//3
```
