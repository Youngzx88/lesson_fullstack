# map & set

## 1、强弱引用

- 强引用

```js
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 引用了 obj1，创建了一个强引用

obj1 = null; // 解除 obj1 对对象的引用
// 此时 obj2 仍然引用该对象，因此该对象不会被垃圾回收器回收

```

- 弱引用

```js
const map = new WeakMap();
let obj = { name: "Bob" };

// 将 obj 添加到 WeakMap 中作为键，并将值设置为 123
map.set(obj, 123);

// obj 不再被强引用引用，因此可以被垃圾回收器回收
obj = null;

// WeakMap 会自动删除对应的键值对，避免内存泄漏
```

## 2、map

- map的诞生原因？：需要有对象-对象(key-value)的这种结构存在
  - 一个state，对应一个callback，callback监听state的变化
  - 对象-对象方式很简洁，而不是自己构造一个对象，把a放进来，把b放进来，这样太麻烦了
