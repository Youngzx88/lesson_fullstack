# 附录A 动态作用域 vs 词法作用域
### 词法作用域(javascipt的使用)
- 函数的作用域在函数定义的时候就决定了
```javascript
function foo() {
    console.log( a ); //2
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;
//调用foo()，在foo里找不到a去全局找
bar();
```
### 动态作用域
- 会顺着调用栈在调用函数的地方查找
```javascript
function foo() {
    console.log( a ); //3
}
function bar() {
    var a = 3;
    foo();
}
var a = 2;
//调用foo()，在foo里找不到a，在函数调用栈上向上找
bar();
```


# 附录B 块作用域的替代方案
- 在es6之前的环境中用catch作为块作用域的替代方案
```javascript
try{throw undefined;}catch(a){
    a = 2;
    console.log( a ); // 2
}
console.log( a ); // ReferenceError
```
- Reaceur:是谷歌的项目，用来将ES6转化成兼容ES6之前的环境(try catch es3就已经存在了)
- 思考性能：立即执行函数 vs try-catch

# 附录C this词法
- ES6 的一个初衷就是帮助人们减少重复的场景，事实上包括修复某些习惯用法的问题，this 就是其中一个。
- 箭头函数在涉及 this 绑定时的行为和普通函数的行为完全不一致。它放弃了所有普通 this 绑定的规则，取而代之的是用当前的词法作用域覆盖了 this 本来的值。
- 换句话说：为什么要自找麻烦使用 this 风格的代码模式呢？把它和词法作用域结合在一起非常让人头疼。在代码中使用两种风格其中的一种是非常自然的事情，但是不要将两种风格混在一起使用。