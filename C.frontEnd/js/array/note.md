# 数组

## 1、声明数组的方式

- `var arr1 = [];`
- `var arr2 = new Array();//不推荐`
- `var arr3 = Array();//不使用`

## 2、实际上数组和对象很像(数组也是继承于对象)

## 3、数组的常用方法

- push：返回值是执行了方法以后的数组长度
- unshift：返回值是执行了方法以后的数组长度
- pop：返回值是头出栈的那一位
- shift：返回值是尾出栈的那一位
- splice：(开始项,剪切长度,剪切以后最后一位开始添加数据)
- slice(a,b)：从下标为a开始截取,范围是 [ a , b )
- concat：连接两个数组
- join('')：不填参数等同于toString，以参数来连接，如`''`，则是以`''`连接
- split('-',3)：可以把a-b-c-d，返回成[ a, b, c ],3是要split的位数

```js
var arr = [1,2,3]
arr.splice( 1, 1, 6,6,6);
console.log("arr",arr)//arr [ 1, 6, 6, 6, 3 ]
```

## 4、代码实现splice,unshift

## 5、sort()

- 返回排序以后的数组，但是是按照ASCII码来排列的
- 如果想按照大小来排列要自己写回调函数

```js
// 参数a,b
// 返回值1、负值，a排前面，2、正值，b排前面，3、0保持不动
sort(function(a,b){
  return a-b
})
```

## 6、类数组

- `arguments`就是类数组
- 他不继承于`Array`，而是`Object`
- 我们可以手动写一个对象字面量，其 `Object.prototype.push = Array.prototype.push`
- 自己写一个类数组

```js
var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
  'push': function (elem) {
    this[this.length] = elem;
    this.length++;
  }
}
```

- 根据自己写的push方法分析下面这道题

```js
var obj = {
  '2': 3,
  '3': 4,
  'length': 2,
}
obj[2] = 1;
obj[3] = 2;
//[empty,empty,1,2]
```

- 类数组如何变为数组并使用数组的方法？
  - `var realArray = Array.prototype.slice.call(arguments)`
