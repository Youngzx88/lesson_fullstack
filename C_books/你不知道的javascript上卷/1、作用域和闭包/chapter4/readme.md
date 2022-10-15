# 第四章、提升
## 4.1、先有鸡还是现有蛋
```Javascript
a = 2;
var a;
console.log( a );//2
```
```javascript
console.log( a );
var a = 2;//undefined
```
## 4.2、编译器
- 包括变量和函数在内的所有声明都会在任何代码`被执行前`首先被处理。
- 当你看到 var a = 2; 时，可能会认为这是一个声明。但 JavaScript 实际上会将其看成两个声明：var a; 和 a = 2;。第一个`定义声明`是在`编译阶段`进行的。第二个`赋值声明`会被留在原地`等待执行阶段`。
- 上面两段代码实际的运行效果是下面这样
```javascript
var a;
a = 2;
console.log( a );
```
```javascript
var a;
console.log( a );
a = 2;
```
- 先有蛋（声明）后有鸡（赋值）。

## 4.3、函数优先
- `函数声明`和`变量声明`都会被提升。但是一个值得注意的细节（这个细节可以出现在有多个“重复”声明的代码中）是函数会首先被提升，然后才是变量
```javascript
foo(); // 1
var foo;
// 这个才是函数声明
function foo() {
    console.log( 1 );
}
// 这个叫函数表达式
foo = function() {
    console.log( 2 );
};
// 会输出1而不是2
```
- 以上代码的执行，实际如下图所示
```javascript
function foo() {
    console.log( 1 );
}
foo(); // 1
foo = function() {
    console.log( 2 );
};

```
- 一个普通块内部的函数声明通常会被提升到所在作用域的顶部，这个过程不会像下面的代码暗示的那样可以被条件判断所控制：
```javascript
foo(); // "b"
var a = true;
if (a) {
function foo() { console.log("a"); }
}
else {
function foo() { console.log("b"); }
}
```

## 4.4、小结
- 声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升。
- 要注意避免重复声明，特别是当普通的 var 声明和函数声明混合在一起的时候，否则会引起很多危险的问题！
