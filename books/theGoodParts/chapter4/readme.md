# 4.函数

## 4.1、函数对象
- js中函数就是一种对象
- 函数在创建时有两个隐藏属性
    - 函数上下文
    - 实现函数行为的代码
- 函数可以存放变量,对象,数组

## 4.2、函数字面量
```javascript
var add =function (a, b){
    return a + b;
};
```
- 组成
    1. function
    2. 函数名
    3. ()中的参数
    4. {}中的语句

## 4.3、调用
- 每个参数值被赋予函数声明时定义的形式参数名。当实际参数（arguments)的个数与形式参数(parameters)的个数不匹配时不会导致运行时错误。如果实际参数值过多了，超出的参数值将被忽略。如果实际参数值过少，缺失的值将会被替换为undefined。对参数值不会进行类型检查:任何类型的值都可以被传递给参数。

**每个函数接收两个附加的参数:this 和 arguments**
- this的使用取决与当前的调用模式
    1. 方法调用模式
        - 当一个函数被保存为对象的一个属性时，我们称它为一个方法。
        - 当一个方法被调用,this被绑定到该对象。如果一个调用表达式包含一个属性存取表达式，那么它被当作一个方法来调用。
        ```javascript
        var myObject = {
        value: 0;
        increment: function (inc) {
        this.value +=typeof ine === ' number'? inc : 1;
        };
        ```
    2. 函数调用模式
        - 当一个函数并非一个对象的属性时，那么它被当作一个函数来调用
        - 当函数以此模式调用时，this被绑定到全局对象。这是语言设计上的一个错误。
        - 会是的不能利用内部函数来帮助外部函数工作
        - 可以通过在外部中定义一个that传至内部并赋值给this来解决
        ```javascript
        var sum = add(3,4);
        ```
    3. 构造器调用模式
        - javascript基于原型继承,但也提供了一套基于类的对象构建语法
        - 如果在一个函数前面带上new来调用，那么将创建一个隐藏连接到该函数的prototype成员的新对象,同时this将会被绑定到那个新对象上。
    4. apply调用模式
        - 因为JavaScript是一门函数式的面向对象编程语言，所以函数可以拥有方法。
        - apply方法让我们构建一个参数数组并用其去调用函数。它也允许我们选择this 的值apply方法接收两个参数。第一个是将被绑定给this的值。第二个就是一个参数数组。
        - apply的第一个参数可以显示的控制this的指向
        ```javascript   
        var array =[3,4];
        var sum = add.apply(null,array) ;// sum值为7
        ```

## 4.4、参数
- 当函数被调用时，会得到一个“免费”奉送的参数，那就是arguments 数组。通过它函数可以访问所有它被调用时传递给它的参数列表，包括那些没有被分配给函数声明时定义的形式参数的多余参数。
- 但是这实际上是语言的一个设计错误，arguments并不是一个真正的数组。它只是一个“类似数组(array-like)”的对象。arguments拥有一个length 属性，但它缺少所有的数组方法。


## 4.5、返回
- 当一个函数被调用时，它从第一个语句开始执行，并在遇到关闭函数体的）时结束。那使得函数把控制权交还给调用该函数的程序部分。
- return语句可用来使函数提前返回。当return被执行时，函数立即返回而不再执行余下的语句。
- 一个函数总是会返回一个值。如果没有指定返回值，则返回undefined 。
- 如果函数以在前面加上 new前缀的方式来调用,且.返回值不是一个对象,则返回 this (该新对象)。

## 4.6、异常
和java类似 try catch 抛出异常

## 4.7、给类型增加方法
- JavaScript允许给语言的基本类型增加方法。
- 举例来说，我们可以通过给Function.prototype增加方法来使得该方法对所有函数可用
```javascript
Function.prototype.method = function (name,func){
    this.prototype [name] = func;
    return this;
};
```

## 4.8、递归
略

## 4.9、作用域
- 尽管代码块的语法似乎表现出它支持块级作用域,但实际上JavaScript并不支持。
- JavaScript确实有函数作用域。那意味着定义在函数中的参数和变量在函数外部是不可见的，而且在一个函数中的任何位置定义的变量在该函数中的任何地方都可见。
- 很多现代语言都推荐尽可能迟地声明变量。而用在JavaScript 上的话却会成为糟糕的建议，因为它缺少块级作用域。所以，最好的做法是在函数体的顶部声明函数中可能用到的所有变量。

**解决方式：**
- es6中的let是局部作用域
- 建议大家都是用let去定义局部作用域的变量;


## 4.10、闭包(重要)
- 作用域
    - 全局作用域
    - 函数作用域

- 执行上下文(执行环境:决定代码的作用域)
    - 全局环境
    - 函数环境
    - Eval环境(不关注)
    
1. 创建阶段：
    - 创建作用域链:当前变量对象+父级变量对象
    - 变量对象:参数+变量+函数声明
    - this
2. 执行阶段：
    - 执行代码：变量赋值+函数引用

**案例一**:分析执行上下文
```javascript
function a() {
    b();
        function b() {
            c();
            function c(){
                console.log("我在里面");
            }
        }
}
a();//我在里面
```

- 分析

    4. 函数c执行上下文-第四个进入
    3. 函数b执行上下文-第三个进入
    2. 函数a执行上下文- 第二个进入
    1. 全局执行上下文-最先进入

    - 当函数c没有可以输出以及可执行的语句时,函数c退出执行上下文...依次退出 代码即可继续往下进行

**案例二**:为什么book无法输出？
```javascript
function books ( ){
    var book ="书包里面的书本";
}
books();
console.log (book);
```
- 分析
    1. 执行books函数
    2. 作用域从全局进入到books,执行完了books执行上下文退出
    3. 在全局中拿不到book

**案例三**:book又可以输出了
```javascript
function books (){
    var book = "书包里的书本"
       return function () {
        console.log(book);
    }
}
var bag = books();
bag();
```
- 分析
    1. 全局执行上下文
    2. books执行上下文(因为bag指向books)
    3. 匿名函数执行上下文:此时匿名函数的作用域  链是从全局开始嵌套的,所以能访问book

**案例四**:面试题
```javascript 
for (var i = 0; i<5; i++){
    setTimeout (function (){
        console.log (i++);
    },4000);
}
console.log (i);
```
- 分析(答案5 5 6 7 8 9)
    1. 进入全局执行上下文
    2. 任务队列 setTimeout不会直接放到 执行栈,而是会放到任务队列
    3. 等到执行栈结束才会根据任务队列按照时间间隔开始执行:任务队列中存放了5个i++
    4. 先输出console.log的5 再执行5个i++

**案例四**:面试题修改
```javascript 
for (var i = 0; i<5; i++){
    (function(x){
        setTimeout (function (){
            console.log (i++);
        },4000);
    })(i);
}
console.log (i);
```
- 分析(5,0,1,2,3,4)
  1. 全局执行上下文
  2. 立即执行函数执行上下文
  3. 可以获得全局变量的参数并打印

**执行上下文和作用域的区别：**
1. 创建时间不同
    - 作用域是在函数创建的时候就已经创建
    - 执行上下文是在函数运行的时候创建

2. 创建者不同
    - 作用域是词法分析创建，静态
    - 执行上下文由js引擎创建，动态

3. 名次解释
    - 引擎：从头到尾负责整个Javascript程序的编译及执行过程
    - 编译器：引擎的好朋友之一，负责语法分析及代码生成
    - 作用域： 引擎的另一位好朋友，负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限




## 4.11、回调
- 类似与对共享资源的占用不连续而产生死锁的问题
- 把需要连续操作的代码放入函数当中,如书中举例,提供一个当服务器的响应到达时将被调用的回调函数,这样客户端就不会阻塞

回调函数的使用
```javascript
let x = function(){
    console.log("i am called from inside a function")
};

let y = function(callback){
    console.log("do something");
    callback();
}
y(x);
/*
 回调函数： 
    并不是把x的返回值传给y,而是传入整个函数体
    当你需要调用的时候再去使用
*/
```
回调函数的用法
```javascript
//原来
let calc = function(num1,num2,callback){
    if(callback==='add'){
        return num1+num2;
    }   
}
console.log(calc(2,3,'add'));
//使用回调函数后
let add =function (a,b){
    return a+b;
}
let mutiply =function (a,b){
    return a*b;
}
let calc2 = function(num1,num2,callback){
    return callback(num1,num2);
}
console.log(calc2(2,3,mutiply));
```
## 4.12、模块
类似于封装
- 我们可以使用函数和闭包来构造模块。模块是一个提供接口却隐藏状态与实现的函数或对象。
- 模块模式的一般形式是:一个定义了私有变量和函数的函数,利用闭包创建可以访问私有变量和函数的特权函数，最后返回这个特权函数，或者把它们保存到一个可访问到的地方。
- 使用模块模式就可以摒弃全局变量的使用。它促进了信息隐藏和其他优秀的设计实践。对于应用程序的封装，或者构造其他单例对象，模块模式非常有效。

## 4.13、级联
- 级联函数就是在对象调用中通过点的方式串联调用，在jQuery中就是链式调用, 其关键点就是在内部 return this 返回自身
```javascript   
function Person() {
    this.name = '';
    this.age = 0;
    this.weight = 10;
   }
   Person.prototype = {
    setName:function(name){
     this.name = name;
     return this;
    },
    setAge:function(age){
     this.age = age;
     return this;
    },
    setWeight:function(weight) {
     this.weight = weight;
     return this;
    }
   }
   var p = new Person();
   p.setName('Joh').setAge(26).setWeight(80);
   console.log(p); // {name: "Joh", age: 26, weight: 80}
   
```
## 4.14、套用
函数也是值，从而我们可以用有趣的方式去操作函数值。套用允许我们将函数与传递给它的参数相结合去产生出一个新的函数。

## 4.15、记忆
递归求斐波那契数列优化(和闭包结合)
```javascript
var memoizer = function (memo,fundamental){
    var shell =function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental (shell,n);
            memo [n] =result;
        }
    return result;
    };
return shell;
};

var fibonacci = memoizer( [0,1], function (shell,n){
    return shell(n - 1)+shell(n - 2);
});

var factorial = memoizer ( [1,1],function (shell,n){
    return n + shell(n - 1);
});
console.log(factorial(10));    
```