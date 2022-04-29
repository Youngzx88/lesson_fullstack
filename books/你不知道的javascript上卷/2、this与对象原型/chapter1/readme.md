# 第一章、关于this
## 1.1、为什么要用this
- 如果不用this就要显示的传入上下文对象，当代码越来越长是非常复杂的
```javascript
//使用this
function identify() {
    return this.name.toUpperCase(); 
}
//不使用this
function identify(context) {
    return context.name.toUpperCase(); 
}
function speak(context) {
    var greeting = "Hello, I'm " + identify(context); 
    console.log( greeting ); 
}
```
## 1.2、对this的误解
### 1.2.1、指向自身(×)
- 虽然语义上看这样是对的，但是实际上并不是这样的
- 下面这段代码无意中创建了一个全局变量 count（原理参见第 2 章），它的值为 NaN。因为this指向了全局
- 
```javascript
function foo(num) { 
    console.log( "foo: " + num ); // 记录 foo 被调用的次数
    this.count++; 
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
     if (i > 5) {
        foo( i ); 
    } 
}
// foo: 6 
// foo: 7 
// foo: 8 
// foo: 9 
// foo 被调用了多少次？
console.log( foo.count ); // 0 -- WTF?
```
### 1.2.2、指向它的作用域(×)
- 需要明确的是，this 在任何情况下都不指向函数的词法作用域。在 JavaScript 内部，作用 域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过 JavaScript 代码访问，它存在于 JavaScript 引擎内部。
- 下面的代码，它试图（但是没有成功）跨越边界，使用 this 来隐式引用函数的词 法作用域
```javascript
function foo() {
    var a = 2;
    this.bar(); }
function bar() { 
    console.log( this.a ); 
}
foo(); // ReferenceError: a is not defined
```