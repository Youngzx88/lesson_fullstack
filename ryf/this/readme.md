# javascript 的this底层原理

## 问题的来源是什么?
1. 同一个函数，运行后this指向不一样?
2. 不同的运行方式，带来不同的运行环境
    - 箭头函数没有this不适合
    - 普通函数严格模式全局|undefined不够明显
    - 构造函数new|普通函数麻烦
    - call apply bind
    - 事件处理函数 this 指向event.target
    - 对象函数


- 同一个函数(内存中，同一个函数)
- 不同环境(上下文)里的不同运行方式
    1. 全局变量，普通函数
    2. obj.foo属性，指向了函数对象的方法

- 对象方法 + 引用式赋值 1.html最根正苗红的例子