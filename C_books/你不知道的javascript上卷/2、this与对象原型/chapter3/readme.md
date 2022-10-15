# 第三章、对象

### 3.1、语法
- 对象可以通过两个方式去构造
    1. 对象字面量
    2. new方式
```javascript
var myObj = { key: value };
var myObj = new Object();
myObj.key = value;
```

### 3.2、类型
1. 六种基本类型
    - string
    - number
    - boolean
    - null(虽然会返回object但不是对象)
    - undefined
    - object
2. 内置对象
    - String
    - Number
    - Boolean
    - Object
    - Function
    - Array
    - Date
    - RegExp
    - Error
3. 对于一些基本类型再调用其内置对象的方法时，会自动进行包装

### 3.3、内容
1. 对象的属性并不会存在对象容器内部，存在对象容器内部的是这些属性的名称，他们就像指针一样，指向这些值真正存储的位置
2. 内容的访问
    - obj.a
    - obj["a"]
    - 区别主要在在于[".."]可以接收任意UTF-8/Unicode字符串作为属性名
#### 3.3.1、可计算属性名
- ES6增加了可计算属性名,可以在文字形式中使用[]包裹一个表达式当作属性名
- 最适用的场景可能是Symbol。
```javascript
var prefix = "foo";
var myObject ={
    [prefix + "bar"]: "hello
}
```
#### 3.3.2、属性与方法
- ES6增加了可计算属性名,可以在文字形式中使用[]包裹一个表达式当作属性名
- 最适用的场景可能是Symbol。
```javascript
var prefix = "foo";
var myObject ={
    [prefix + "bar"]: "hello
}
```
#### 3.3.3、数组
- 数组也支持[ ]访问
- 数组期望的是数值下标，也就是值的存储位置
- 数组也是对象，如果你像数组添加属性，length不会增加
- 如果你试图像数组添加一个属性，属性名看起来像一个数组，也会变成一个数值下标
```javascript
var myArray = [ "foo", 42, "bar" ]; myArray["3"] = "baz"; 
myArray.length; // 4 
myArray[3]; // "baz"
```
#### 3.3.4、复制对象
- 如何复制一个对象？
```javascript
function anotherFunction() { /*..*/ }
var anotherObject = { 
    c: true
};
var anotherArray = [];
var myObject = { 
    a: 2, 
    b: anotherObject, // 引用，不是复本！ 
    c: anotherArray, // 另一个引用！ 
    d: anotherFunction 
};
anotherArray.push(anotherObject,myObject);
```
- 如何不搞成引用而是单纯的复制呢？
    1. 首先，我们应该判断它是**浅复制**还是**深复制**。
    2. 对于浅拷贝来说，复制出的新对象中a的值会复制旧对象中a的值，也就是 2，但是新对象中 b、c、d 三个属性其实只是三个引用，它们 和旧对象中 b、c、d 引用的对象是一样的。
    3. 对于深复制来说，除了复制 myObject 以外还会复 制 anotherObject 和 anotherArray。
    4. 这时问题就来了，anotherArray 引用了 anotherObject 和 myObject，所以又需要复制 myObject，这样就会由于循环引用导致死循环。
- 相比深复制，浅复制非常易懂并且问题要少得多，所以 ES6 定义了 Object.assign(..) 方 法来实现浅复制。
    - Object.assign(..) 方法的第一个参数是目标对象
    - 之后还可以跟一个 或多个源对象。
    - 它会遍历一个或多个源对象的所有可枚举的自有键
    - 并把它们复制（使用 = 操作符赋值）到目标对象，最 后返回目标对象，就像这样：
```javascript
var newObj = Object.assign( {}, myObject ); 
newObj.a; // 2 
newObj.b === anotherObject; // true 
newObj.c === anotherArray; // true 
newObj.d === anotherFunction; // true
```


#### 3.3.5、属性描述符
- ES5之前没有检测属性特性的方法
- ES5开始有了`getOwnPropertyDescription`方法
```js
myobj={
    a:2
}
Object.getOwnPropertyDescriptor(myobj,"a");
//{ value: 2, writable: true, enumerable: true, configurable: true }
```
- 除此之外，我们还可以通过`Object.defineProperty()`来添加一个新的属性或修改一个已有的属性
```js
Object.defineProperty(myobj,'a',{
    enumerable:false
})
console.log(myobj.a);//这样仍然可以正常访问，只是不让在循环中遍历了
for(let key in myobj){
    console.log(key);//无法输出,甚至连这个循环都进不去
    console.log('=')
}
```
1. writable可写
    - 决定是否可以修改属性的值
    - 非严格模式下writable为false无法修改属性的值
    - 严格模式下会直接报错
2. enumerable可枚举
    - 为false不会出现在枚举当中，仍然可以正常访问。
3. configurable可配置
    - 修改configurable为false不论是否处于严格模式都无法再用defineProperty修改属性了
    - 所以把configurable设置为false可以视为单向操作
    - 有一个例外则是，即使configurable为false，我们仍然可以把writable由true改为false,但是无法从false改为true
    - 除了禁止修改甚至会禁止删除

#### 3.3.6、不变性
- 有时我们想对象或者属性不能被改变，可以用一些api
- 但是这些api都是浅层不变性，只会影响目标对象和他的直接属性
- 如果目标对象引用了其他对象(数组，对象，函数，等),其他对象内容不受影响,仍然是可变的
- ps: js当中很少需要深不可变性，有些特殊情况可能需要，但是我们也可以退一步重新思考程序设计

> 不可变性的举例
1. 对象常量
    - 给writable设置flase
2. 禁止扩展
    - 禁止一个对象添加新属性并保留已有属性，Object.preventExtension();
3. 密封
    - Object.seal();
    - 这个方法实际上会在一个现有的对象上调用Object.preventExtensions()并把所有现有属性标记为configurable:false
4. 冻结
    - Object.freeze()会创建一个冻结对象
    - 实际是调用Object.seal(),并把数据访问属性标记为writable:false;
    - 这个方法是可以应用在对象级别上的最高不可变性，浅不可变性
    - 如果想达到深不可变性，就要遍历对象并给每个对象用这个方法，但是这样可能会无意间让一些共享方法被冻结

#### 3.3.7、[[Get]]
1. 当你通过obj.x进行属性访问，做的不仅仅是在myobj中查找名字为x的属性
2. 实际上是执行了get操作，首先会在对象中查找是否有同名属性，找到就返回
3. 没有找到同名对象就去原型链上找
4. 无论如何都没找到就返回undefined
```js
var obj ={
    a:undefined;
}
obj.a;//undefined
obj.b;//undefined
//思考一下背后的区别
```
#### 3.3.8、[[put]]
- put被触发不仅仅是给对象的属性赋值这么简单
1. 属性是否访问描述符？是并且存在setter就调用setter
2. 属性数据描述符中是否false？是，非严格模式下静默失败，严格模式抛出TypeError异常
3. 都不是，将该值设置为属性的值
- ps：如果对象中没有这个属性，put的操作更加复杂，讨论prototype的时候补充
### 3.3.9、Getter和Setter
- Getter是一个隐藏函数，会在获取属性值的时候调用
- Setter是一个隐藏函数，会在设置属性值时调用
- Getter和Setter最好成对出现！
#### 3.3.10、存在性
- 前面说到如果对象中某个属性的值就为undefined，如何判断这个属性存不存在？
    1. ('a' in obj)
    2. obj.hasOwnProperty();
    3. 这两个的区别在于hasOwnProperty只会检查对象中的属性，不会检查原型链，而in方法会检查原型链及对象
    4. Object.prototype.hasOwnProperty.call(obj,"a");
- ps:看上去in操作符是检查容器内是否有某个值，实际上检查的是属性名
- eg:3 in [3,4,5];//false,因为[3,4,5]当中的属性名为0,1,2

- for in循环有时候会产生出乎意料的结果，因为这种枚举不仅会包含所有数值索引，还会包含所有可枚举属性，最好只在`对象`上用，遍历数组还是用传统的`for循环`
### 3.4、遍历
- for in 包含遍历对象的可枚举属性列表(包括原型链)，for in是拿不到`属性值`的，,只能拿到`属性下标`
```js
var arr = [4,5,6];
for(x in arr){
    console.log(arr[x]);
}
```
- for of可以直接拿到值
```js
var arr2 = [4,5,6];
for(x of arr2){
    console.log(x);
}
```
- 常用的for循环实际上并不是在遍历值，而是在遍历下标来指向值，如myarray[i]
- ES5增加了一些数组的辅助迭代器，`forEach()`,`every()`,`some()`。

- 有东西没看懂

### 3.5、小结
- js有对象字面量和构造形式
- js基本数据类型Number、String、Boolean、Null、undefined、object、symbol、bigInt；复杂数据类型object
- 对象的特性，可以通过属性描述符来控制，eg：writable。configurable；还可以通过冻结来设置对象的不可变性级别
- 可以使用ES6的for of语法来遍历数据结构，for of会寻找内置或自定义的对象并调用next方法来遍历数据值
