# 第一章 作用域是什么

## 1.1、编译原理
- 传统的编译语言流程
    1. 分词/词法分析(Tokenizing/Lexing)
    2. 解析/语法分析(Parsing)
    3. 代码生成
- Javascript的编译
    1. 对于 JavaScript 来说，大部分情况下编译发生在代码执行前的几微秒（甚至更短！）的时
    间内。
    2. 简单地说，任何 JavaScript 代码片段在执行前都要进行编译（通常就在执行前）。

## 1.2、理解作用域
```javascript
var a = 2;
```
> 演员表
- 引擎：从头到尾负责整个JavaScript程序的编译以及执行过程
- 编译器：负责语法分析及代码生成
- 作用域：负责收集并维护由所有声明的标识符组成的一系列查询并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。
> 对话
1. 遇到 var a，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作
用域的集合中声明一个新的变量，并命名为 a。
2. 接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理 a = 2 这个赋值
操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作 a 的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量\

> 编译器有话说
- 在我们的例子中，引擎会为变量 a 进行 LHS 查询。另外一个查找的类型叫作 RHS
- 当变量出现在赋值操作的左侧时进行 LHS(left) 查询，出现在右侧时进行 RHS(right) 查询

    **总结：**
    - RHS 查询与简单地查找某个变量的值别无二致
    - 而 LHS 查询则是试图找到变量的容器本身，从而可以对其赋值。
    - 从这个角度说，RHS 并不是真正意义上的“赋值操作的右侧”，更准确地说是“非左侧”
    - 可以将RHS理解成retrieve his source value（取到它的源值）

- 举例LHS，RHS
```javascript   
//RHS
console.log( a )
// 其中对 a 的引用是一个 RHS 引用，因为这里 a 并没有赋予任何值。相应地，需要查找并取得 a 的值，这样才能将值传递给 console.log(..)
```
```javascript   
//LHS
a=2
// 这里对 a 的引用则是 LHS 引用，因为实际上我们并不关心当前的值是什么，只是想要为 =2 这个赋值操作找到一个目标。
```

> 引擎和作用域的对话
```javascript
//思考一下引擎是如何与作用域进行对话的
function foo(a) {
console.log( a ); // 2
}
foo( 2 )
```

## 1.3、作用域嵌套
- 当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。因此，在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的作用域（也就是全局作用域）为止


## 1.4、异常
> 为什么需要区分LHS和RHS？
```javascript
function foo(a) {
    console.log( a + b );
    b = a;
}
foo( 2 )
```
- 对于寻找b变量,如果是RHS查询时是无法找到该变量的。也就是说，这是一个“未声明”的变量，因为在任何相关的作用域中都无法找到它，引擎就会抛出 ReferenceError异常
- 如果是LHS则会自动在全局创建一个具有该名称的变量,并返回给引擎(使用了严格模式则不会)
