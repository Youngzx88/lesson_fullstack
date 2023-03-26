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

## 7、数组的方法

- forEach

```js
const arr = [1,2,3]
arr.forEach(item=>{
  console.log(item)
})
arr.forEach(function(item,index,arr){
  arr[index] += this.a
},{a:3})
console.log(arr)//[ 4, 5, 6 ]
```

- map:常用于返回一个新数组

```js
const mapArr = [1,3,4]
const arr2 = mapArr.map(item=>{
  return item + 3
})
console.log(arr2)//[4,6,7]
```

- filter:一般用于数组项的删除，其次返回一个新的数组

```js
const filterArr = [1,2,3,4,5]
const newArr = filterArr.filter(item=>{
  return item > 3
})
console.log(newArr)//[4,5]
```

- reduce:是一个比较随意的方法，可以组成你想要的任何形式

```js
// 使用reduce进行累加
const reduceArr = [1,2,3,4,5,6]
const num = reduceArr.reduce((prev,next,index) => {
  console.log("prev,next,index",prev,next,index)
  return prev = prev + next
  // 每次需要显示的返回prev
})
console.log(num);//21

// 不给第二个参数prev就是number，但是可以显示的指定prev是什么，比如这里让prev变为对象
const reduceArr2 = [1,2,3,4,'yzx','yy']
const obj = reduceArr2.reduce((prev,next,index) => {
  prev[reduceArr2[index]] = next
  return prev
},{})
console.log(obj)

// 还可以变为数组的同时操作数组
const reduceArr2 = [1,2,3,4,'yzx','yy']
const nArr = reduceArr2.reduce((prev,next,index) => {
  prev[index] = next
  return prev
},[])
console.log(nArr)//[ '1-0', '2-1', '3-2', '4-3', 'yzx-4', 'yy-5' ]
```
