- 阿里有多少程序员？
    8-10w
    阿里云 5000 30w行

1. 组织代码？
    - 接口
    - 块级作用域
    - 功能分模块
        1. 函数： 函数式编程
        2. 类：面向对象

## 面向对象编程
1. JS 有点不一样{} obj.a
2. 传统的面向对象 设计模式
    - 类(抽象)和对象(具象)
    - new 要类 实例化
    - { }对象字面量
> 类(class)是对象(Object)的模板，定义了“同一组对象的”公共的属性和方法

3. js本没有类(原型),但传统的面向对象思想(珍珠)如何用上呢？
    - 构造函数this 属性+方法： 当函数以new方式运行时,this指向实例
    - 进化成Cat.prototype.makeSound()
        - 函数也是对象 prototype 对象上可以添加方法

4. new 构造函数 结果 实例
    
    构造函数和实例之间有什么关系？

    通过实例找到构造函数？

    - xm.constructor 任何实例对象都拥有一个constructor属性指向 实例的构造函数
    - 构造函数 内部不去加方法 原因是 省内存空间的分配
    - 任何函数
    