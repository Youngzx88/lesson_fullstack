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
?