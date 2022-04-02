# The Good Parts
Parts

# 对象

## 1.JS数据类型
1. 简单类型
    - 数值类型 numbe  js只有数值类型,js不太适合复杂数据运算 因为js在处理小数时不够精确
    -  字符串类型 string
    -  undefined
        - js是一门弱类型语言，声明变量可以不指定类型
        - js变量的类型由值决定，变量类型可变
        - == 值相等就好 ===恒等 值相等以外类型也要相等
        - 变量声明之后赋值之前为undefined
    -  bool 
        - boolean true/false
    -  null undefined
2. 复杂数据类型
    - 复杂的就是对象 Object

## 2.js关键字
- let 变量
- const 常量
- typeof 获得变量的类型

## 3.对象字面量
- 作用：创建新对象值的表示法
```javascript
var stooge ={
“first-name" :"Jerome",
"last-name" : "Howadn"
};
```

## 3.检索
### 检索对象中包含的值
- 要检索对象中包含的值，可以采用在[]后缀中括住一个字符串表达式的方式。如果字符串表达式是一个常数，而且它是一个合法的JavaScript标识符而并非保留字，那么也可以用.表示法代替。优先考虑使用﹒表示法，因为它更紧凑且可读性更好。
### 检索不存在的值
- 会返回undefined

### ||运算符可以用来填充默认值
```
var middle = stooge [ "middle-name"] || "(none)";
var status = flight.status || "unknown";
```

## 4.更新
- 给检索赋值,若之前没有这个属性名会被扩充至该对象
```javascript
stooge [ 'middle-name' ]='Lester';
stooge.nickname = 'curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue ';
```

## 5.引用
- 对象通过引用来传递。它们永远不会被拷贝:


## 6.原型
**类似于所有java类都继承于Object**
- 每个对象都连接到一个原型对象，并且它可以从中继承属性。所有通过对象字面量创建的对象都连接到 object.prototype这个JavaScript中标准的对象。
- 当你创建一个新对象时,你可以选择某个对象作为它的原型。
- 原型连接只有在检索值的时候才被用到。如果我们尝试去获取对象的某个属性值，且该对象没有此属性名，那么JavaScript会试着从原型对象中获取属性值。如果那个原型对象也没有该属性，那么再从它的原型中寻找，依次类推，直到该过程最后到达终点object.prototype。如果想要的属性完全不存在于原型链中，那么结果就是undefined值。这个过程称为委托。


## 7.反射
**不同于java中的反射可以获得类的所有方法和参数**
- javascript中的反射往往是检索对象的属性(typeof)
- 请务必注意原型链中的任何属性也会产生一个值:
```javascript
typeof flight.tostring //'function'
typeof flight.constructor//'function '
```
- 有两个方法去处理这些不需要的属性。

    1. 第一个是让你的程序检查并剔除函数值。

    2. 另一个方法是使用hasOwnProperty方法，如果对象拥有独有的属性，它将返回true.hasOwnProperty方法不会检查原型链。

## 8.枚举
- for in语句来遍历对象中的所有属性名
- 为了过滤掉你不想要的属性和方法用hasOwnProperty方法
- 自定义for来确保属性的顺序
## 9.删除
- delete运算符可以用来删除对象的属性。它将会移除对象中确定包含的属性。它不会触及原型链中的任何对象。
- 删除对象的属性可能会让来自原型链中的属性浮现出来

## 10.减少全局变量的污染
- 前提：JavaScript可以很随意地定义那些可保存所有应用资源的全局变量。不幸的是，全局变量削弱了程序的灵活性,所以应该避免。
- 解决方法：
    - 最小化使用全局变量的一个方法是在你的应用中只创建唯一一个全局变量
```javascript
var MYAPP = {}；
MYAPP.stooge ={
"first-name":"Joe",
"last-name" :"Howara"
};
```
