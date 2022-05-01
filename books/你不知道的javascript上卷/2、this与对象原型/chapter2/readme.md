# 第二章、this全面解析

### 2.1、调用位置
- 调用位置就是函数在代码中被调用的 位置（而不是声明的位置）
```javascript
function baz() { 
    // 当前调用栈是：baz 
    // 因此，当前调用位置是全局作用域
     console.log( "baz" ); 
     bar(); // <-- bar 的调用位置 
}
function bar() {
    // 当前调用栈是 baz -> bar 
    // 因此，当前调用位置在 baz 中 
    console.log( "bar" ); 
    foo(); // <-- foo 的调用位置 
}
function foo() { 
    // 当前调用栈是 baz -> bar -> foo 
    // 因此，当前调用位置在 bar 中 
    console.log( "foo" ); 
}
baz(); // <-- baz 的调用位置
```

### 2.2、绑定规则
#### 2.2.1、默认绑定
> 独立函数调用。可以把这条规则看作是无法应用 其他规则时的默认规则。
```javascript
function foo() { 
    console.log( this.a ); 
} 
var a = 2; 
foo(); // 2
```
- 在代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用 默认绑定，无法应用其他规则。
- 如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此 this 会绑定 到 undefined

#### 2.2.2、隐式绑定
> 调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含
```javascript
function foo() { 
    console.log( this.a ); 
}
var obj = { 
    a: 2, 
    foo: foo 
};
obj.foo(); // 2
```
- 当函数引 用有上下文对象时，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象。因为调 用 foo() 时 this 被绑定到 obj，因此 this.a 和 obj.a 是一样的。

**隐式丢失**:
> 一个最常见的 this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把 this 绑定到全局对象或者 undefined 上，取决于是否是严格模式。
- 第一种隐式丢失
```javascript
function foo() { 
    console.log( this.a ); 
}
var obj = { 
    a: 2, 
    foo: foo
};
var bar = obj.foo; // 函数别名！
var a = "oops, global"; // a 是全局对象的属性 
//此时的 bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。
bar(); // "oops, global"
```
- 第二种隐式丢失(回调函数)
```javascript
function foo() { 
    console.log( this.a ); 
}
function doFoo(fn) { 
    // fn 其实引用的是 foo 
    fn(); // <-- 调用位置！ 
}
var obj = { 
    a: 2, 
    foo: foo 
};
var a = "oops, global"; // a 是全局对象的属性 
//此时的doFoo()其实是一个不带任何修饰的函数调用，因此应用了默认绑定。
doFoo( obj.foo ); // "oops, global"
```

#### 2.2.3、显式绑定
- 如果我们不想在对象内部包含函数引用，而想在某个对象上强制调用函数，该怎么做呢？
- 可以使用函数的 call(..) 和 apply(..) 方法。
```javascript
function foo() { 
    console.log( this.a ); 
}
var obj = { 
    a:2 
};
//通过 foo.call(..)，我们可以在调用 foo 时强制把它的 this 绑定到 obj 上。
foo.call( obj ); // 2
```
- 如果你传入了一个原始值（字符串类型、布尔类型或者数字类型）来当作 this 的绑定对 象，这个原始值会被转换成它的对象形式（也就是 new String(..)、new Boolean(..) 或者 new Number(..)）。这通常被称为“装箱”。

**显式绑定仍然无法解决我们之前提出的丢失绑定问题。**
> 硬绑定:这种绑定是一种显式的强制绑定，因此我们称之为硬绑定。
```javascript
function foo() { 
    console.log( this.a ); 
}
var obj = { 
    a:2 
};
var bar = function() { 
    foo.call( obj ); 
};
bar(); // 2 
setTimeout( bar, 100 ); // 2 // 硬绑定的 bar 不可能再修改它的 this 
bar.call( window ); // 2
```
- 由于硬绑定是一种非常常用的模式，所以在 ES5 中提供了内置的方法 Function.prototype. bind，它的用法如下：
```javascript
function foo(something) { 
    console.log( this.a, something ); 
    return this.a + something; 
} 
var obj = { 
    a:2 
};
var bar = foo.bind( obj );
var b = bar( 3 ); // 2 3 
console.log( b ); // 5
```

#### 2.2.4、new绑定
> 使用 new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。 
1. 创建（或者说构造）一个全新的对象。 
2. 这个新对象会被执行 [[ 原型 ]] 连接。 
3. 这个新对象会绑定到函数调用的 this。 
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
```javascript
function foo(a) {
    this.a = a; 
}
var bar = new foo(2); 
console.log( bar.a ); // 2
```

### 2.3、优先级
- 测试一下显式和隐式,可知显示调用优先级高于隐式调用
```javascript
function foo() { 
    console.log( this.a );
}
var obj1 = { 
    a: 2, 
    foo: foo 
};
var obj2 = { 
    a: 3, 
    foo: foo 
};
obj1.foo(); // 2 
obj2.foo(); // 3 
obj1.foo.call( obj2 ); // 3 
obj2.foo.call( obj1 ); // 2
```
- 测试一下new和隐式，可以看到 new 绑定比隐式绑定优先级高。
```javascript
function foo(something) {
    this.a = something; 
}
var obj1 = { 
    foo: foo 
};
var obj2 = {}; 
obj1.foo( 2 ); 
console.log( obj1.a ); // 2 
obj1.foo.call( obj2, 3 ); 
console.log( obj2.a ); // 3
var bar = new obj1.foo( 4 ); 
console.log( obj1.a ); // 2 
console.log( bar.a ); // 4
```
- new 绑定和显式绑定谁的优先级更高呢？new可以更新显示绑定
```javascript
function foo(something) {
    this.a = something; 
}
var obj1 = {};
var bar = foo.bind( obj1 ); 
bar( 2 ); 
console.log( obj1.a ); // 2
var baz = new bar(3); 
console.log( obj1.a ); // 2 
console.log( baz.a ); // 3
```

### 2.4、绑定例外
#### 2.4.1、被忽略的this
- 如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值 在调用时会被忽略，实际应用的是默认绑定规则
```javascript
function foo() { 
    console.log( this.a );
}
var a = 2; 
foo.call( null ); // 2
```
- 一种非常常见的做法是使用 apply(..) 来“展开”一个数组，并当作参数传入一个函数。 类似地，bind(..) 可以对参数进行柯里化（预先设置一些参数），这种方法有时非常有用：
```javascript
function foo(a,b) { 
    console.log( "a:" + a + ", b:" + b ); 
}// 把数组“展开”成参数 
foo.apply( null, [2, 3] ); // a:2, b:3
// 使用 bind(..) 进行柯里化
var bar = foo.bind( null, 2 ); 
bar( 3 ); // a:2, b:3
```
- 尽管本书中未提到，但在 ES6 中，可以用 `...` 操作符代替 `apply(..)` 来“展 开”数组，`foo(...[1,2]) `和 `foo(1,2)` 是一样的，这样可以避免不必要的 this 绑定。可惜，在 ES6 中没有柯里化的相关语法，因此还是需要使用 bind(..)。
- 然而，总是使用` null` 来忽略 `this 绑定`可能产生一些副作用。如果某个函数确实使用了 `this`（比如第三方库中的一个函数），那默认绑定规则会把 `this `绑定到`全局对象`（在浏览 器中这个对象是 `window`），这将导致不可预计的后果（比如修改全局对象）。 显而易见，这种方式可能会导致许多难以分析和追踪的 bug。
- 一种“更安全”的做法是传入一个`特殊的对象`，把 `this` 绑定到这个对象不会对你的程序 产生任何副作用。如果我们在忽略 this 绑定时总是传入一个 ``空`对象，那就什么都不用担心了，因为任何 对于 `this` 的使用都会被限制在这个空对象中，不会对全局对象产生任何影响。
```javascript
//这才是正确的用法
function foo(a,b) { 
    console.log( "a:" + a + ", b:" + b ); }// 我们的 DMZ 空对象 
    var ø = Object.create( null ); // 把数组展开成参数 
    foo.apply( ø, [2, 3] ); // a:2, b:3 
    // 使用 bind(..) 进行柯里化
    var bar = foo.bind( ø, 2 ); 
    bar( 3 ); // a:2, b:3
```

#### 2.4.2、间接引用
- 赋值表达式 p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是 foo() 而不是 p.foo() 或者 o.foo()。根据我们之前说过的，这里会应用默认绑定。
```javascript
function foo() { 
    console.log( this.a ); 
}
var a = 2;
var o = { 
    a: 3, foo: foo 
};
var p = {
     a: 4 
}; 
o.foo(); // 3 
(p.foo = o.foo)(); // 2
```

#### 2.4.3、软绑定
- 硬绑定的缺点：问题在于，硬绑定会大大降低函数的灵活性，使 用硬绑定之后就无法使用隐式绑定或者显式绑定来修改 this。
- 如果可以给默认绑定指定一个全局对象和 undefined 以外的值，那就可以实现和硬绑定相 同的效果，同时保留隐式绑定或者显式绑定修改 this 的能力。
```javascript
function foo() { 
    console.log("name: " + this.name);
}
var obj = { name: "obj" }, 
    obj2 = { name: "obj2" }, 
    obj3 = { name: "obj3" };
var fooOBJ = foo.softBind( obj ); 
fooOBJ(); // name: obj 
obj2.foo = foo.softBind(obj); 
obj2.foo(); // name: obj2 <---- 看！！！ 
fooOBJ.call( obj3 ); // name: obj3 <---- 看！ 
setTimeout( obj2.foo, 10 ); // name: obj <---- 应用了软绑定
```

### 2.5、this词法
- **箭头函数**不使用 this 的四种标准规则，而是根据外层（函数或者全局）作用域来决 定 this。

### 2.6、小结
- 顺序应用下面这四条规则来判断 this 的绑定对象。
1. 由 new 调用？绑定到新创建的对象。 
2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。 
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。
- 一定要注意，有些调用可能在无意中使用默认绑定规则。如果想“更安全”地忽略 this 绑 定，你可以使用一个 DMZ 对象，比如 ø = Object.create(null)，以保护全局对象。