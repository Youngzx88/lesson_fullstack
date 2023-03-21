# OOP

## 1、test() 与 new test()的却别

- test() js引擎执行一个函数
- new test() js引擎通过new关键字执行一个函数并一定返回一个新的对象

## 2、强弱引用

- 强引用是指一个对象被直接引用，比如被赋值给一个变量或者作为一个函数的参数传递。只要一个对象存在强引用，垃圾收集器就不会回收这个对象。例如：

```js
var obj = { a: 1 };
```

- 弱引用是一种不会阻止垃圾收集器回收对象的引用。如果一个对象只存在弱引用，则当垃圾收集器运行时，即使该对象存在弱引用，也可能被回收。弱引用通常用于实现高级缓存、实时通信等功能。例如：

```js
let weakObj = new WeakRef(obj); // 弱引用
```

- WeakMap 中，如果一个键对象不存在其他强引用，那么它就可以被垃圾回收器回收。这就使得 WeakMap 适合存储需要缓存但不希望阻止垃圾回收的对象的场景。与 Map 不同的是，WeakMap 中的键只能是对象，而值可以是任意类型的值。并且，由于键是弱引用的，所以 WeakMap 中的键值对也不会影响垃圾回收器对于键对象的回收。

```js
let wm = new WeakMap();
let obj = {};
wm.set(obj, "Hello, WeakMap!"); // 将键为 obj，值为 "Hello, WeakMap!" 的键值对添加到 WeakMap 中

obj = null; // 将 obj 设置为 null，此时 obj 不再有强引用
// 如果 obj 只存在于 WeakMap 中，则 obj 将会被回收，WeakMap 中的键值对也会随之被删除

```

## 3、prototype上的方法是静态方法

- 可以不用每次去new出一个方法并修改this指向
- 但是静态方法适用于不需要改变的，纯函数

## 4、Object.create

- 使用这种方式创造的的对象，如果想枚举、配置、修改、删除，需要增加属性

```js
const obj = Object.create({c: 3},{
  a: {
    value: 1,
    writable: true,
    enumerable: true,
    configurable: true
  },
  b: {
    value: 2
  }
})
```

## 5、Object.defineProperty / s

- 修改属性描述符：通过 Object.defineProperty() 方法可以修改一个对象的现有属性的描述符，包括属性的值、可写性、可枚举性和可配置性等。

- 冻结对象属性：通过 Object.defineProperty() 方法可以将一个对象的属性设置为不可写、不可删除和不可配置，从而达到“冻结”对象的属性的目的。

- 虽然默认不可枚举，但是可以通过Object.getOwnPropertyNames得到他的key数组，然后再去访问他的属性

## 6、super

- 要实现继承，必须要实现父类的构造函数，既在自己的构造函数基础上`super()`

## 7、继承extends

- 假设`Do`类继承于`Compute`类
- `Do`中调用方法`result`
- 但是调用到了父类`Compute`中的方法
- 那么继承关系应该如下所示

```js
do:{
  __proto__: Do.prototype {
    result: fn,
      __proto__: Compute.prototype {
        plus,
        minus...
      }
  }
}
```

- 可见不是子类实例直接继承父类原型，而是子类先去找自己的原型，自己的原型再往上找
