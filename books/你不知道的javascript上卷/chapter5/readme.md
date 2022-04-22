# 第五章、作用域和闭包

## 5.1、什么是闭包？
> 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。
```javascript
function foo() {
    var a = 2;
    function bar() {
        console.log( a );
    }
    return bar;//将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用
}
var baz = foo();//将内部函数传递到所在的词法作用域以外，会持有对原始定义作用域的引用
baz(); // 2 —— 朋友，这就是闭包的效果。
```
- 函数 bar() 的词法作用域能够访问 foo() 的内部作用域。然后我们将 bar() 函数本身当作一个值类型进行传递。在这个例子中，我们将 bar 所引用的函数对象本身当作返回值。
- 在 foo() 执行后，其返回值（也就是内部的 bar() 函数）赋值给变量 baz 并调用 baz()，实际上只是通过不同的标识符引用调用了内部的函数 bar()。
- bar() 显然可以被正常执行。但是在这个例子中，它在自己定义的词法作用域以外的地方执行。

> 分析
- 在 foo() 执行后，通常会期待 foo() 的整个内部作用域都被销毁，因为我们知道引擎有垃圾回收器用来释放不再使用的内存空间。由于看上去 foo() 的内容不会再被使用，所以很自然地会考虑对其进行回收。
- 而闭包可以阻止这件事情的发生。事实上内部作用域依然存在，因此没有被回收。谁在使用这个内部作用域？原来是 bar() 本身在使用。拜bar()所声明的位置所赐，它拥有涵盖 foo() 内部作用域的闭包，使得该作用域能够一直存活，以供 bar() 在之后任何时间进行引用。bar() 依然持有对该作用域的引用，而这个引用就叫作闭包

> 无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。

## 5.2、更高级的理解？
```javascript
function wait(message) {
    setTimeout( function timer() {
        console.log( message );
    }, 1000 );
}
wait( "Hello, closure!" );
```
- 将一个内部函数（名为 timer）传递给 setTimeout(..)。timer 具有涵盖 wait(..) 作用域的闭包，因此还保有对变量 message 的引用。
- 深入到引擎的内部原理中，内置的工具函数 setTimeout(..) 持有对一个参数的引用，这个参数也许叫作 fn 或者 func，或者其他类似的名字。引擎会调用这个函数，在例子中就是内部的 timer 函数，而词法作用域在这个过程中保持完整。
- 如果将函数（访问它们各自的词法作用域）当作第一级的值类型并到处传递，你就会看到闭包在这些函数中的应用。在定时器、事件监听器、Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使用了回调函数，实际上就是在使用闭包！


## 5.3、循环和闭包
- 延迟函数的回调会在循环结束时才执行。事实上，当定时器运行时即使每个迭代中执行的是 setTimeout(.., 0)，所有的回调函数依然是在循环结束后才会被执行，因此会每次输出一个 6 出来。(先放到任务队列)
- 在语言精粹第四章readme.md中有详细的解释

## 5.4、模块
```javascript
function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];
function doSomething() {
    console.log( something );
}
function doAnother() {
    console.log( another.join( " ! " ) );
}
return {
    doSomething: doSomething,
    doAnother: doAnother
    };
}
var foo = CoolModule();
foo.doSomething(); // cool
foo.doAnother(); // 1 ! 2 ! 3
```
- CoolModule() 只是一个函数，必须要通过调用它来创建一个模块实例。如果不执行外部函数，内部作用域和闭包都无法被创建
- 上一个示例代码中有一个叫作 CoolModule() 的独立的模块创建器，可以被调用任意多次，每次调用都会创建一个新的模块实例。


- 模块模式需要具备两个必要条件。
    1. 必须有外部的封闭函数，该函数必须至少被调用一次（每次调用都会创建一个新的模块实例）。
    2. 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有状态。

### 5.4.1、现代的模块机制
```javascript
var MyModules = (function Manager() {
    var modules = {};
    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
}
function get(name) {
    return modules[name];
}
return {
    define: define,
    get: get
    };
})();
```
- 这段代码的核心是 modules[name] = impl.apply(impl, deps)。为了模块的定义引入了包装函数（可以传入任何依赖），并且将返回值，也就是模块的 API，储存在一个根据名字来管理的模块列表中。

## 5.5、小结
- 当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包。
- 模块有两个主要特征：
    - （1）为创建内部作用域而调用了一个包装函数；
    - （2）包装函数的返回值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭
包