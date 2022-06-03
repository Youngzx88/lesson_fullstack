# 第五章、原型

### 5.1、Prototype
0. 上代码！
    ```js
    var myObject = { 
        a:2 
    };
    myObject.a; // 2
    ```
1. 当你试图引用对象的属性时会触发`Get`操作，比如`myObject.a`。对于默认的`Get`操作来说，第一步是检查对象本身是否有这个属性，如果有的话就使用它
2. 但是如果 a 不在 myObject 中，就需要使用对象的`Prototype`链了。 对于默认的`Get`操作来说，如果无法在对象本身找到需要的属性，就会继续访问对象的`Prototype`链（proxy除外）
    ```js
    //Object.create()：
    var anotherObject = { 
        a:2 
    };// 创建一个关联到 anotherObject 的对象
    var myObject = Object.create( anotherObject ); 
    myObject.a; // 2
    ```

3. 使用 for..in 遍历对象时原理和查找`Prototype`链类似，任何可以通过原型链访问到 并且是`enumerable`的属性都会被枚举。使用`in`操作符来检查属性在对象 中是否存在时，同样会查找对象的整条原型链（无论属性是否可枚举）

#### 5.1.1、Object.prototype
- 原型链的尽头
#### 5.1.2、属性设置和屏蔽
- `myObject.foo = "bar";`运行后发生了什么？
1. 如果`myObject`对象中包含名为`foo`的普通数据访问属性，这条赋值语句只会修改已有的属性值
2. 如果`foo`不是直接存在于`myObject`中`Prototype`链就会被遍历，类似`Get`操作。 如果原型链上找不到`foo`,`foo`就会被直接添加到`myObject`上。
3. 然而，如果`foo`存在于原型链上层，赋值语句`myObject.foo = "bar"`的行为就会有些不同。稍后我们会进行介绍。
4. 如果属性名`foo`既出现在`myObject`中也出现在`myObject`的`Prototype`链上层，那 么就会发生屏蔽`myObject`中包含的`foo`属性会`屏蔽`原型链上层的所有`foo`属性，因为 `myObject.foo`总是会选择原型链中`最底层的foo`属性。
    - 如果 foo 不直接存在于 myObject 中而是存在于`原型链上层`时 myObject.foo = "bar" 会出现的三种情况。
        1. 如果在Prototype链上层存在名为 foo 的`普通数据访问属性`并且`没有被标记为只读`（writable:false），那就会直接在 myObject 中添加一个名为 foo 的新属性，它是屏蔽属性。
        2. 如果`在Prototype链上层存在foo`，但是它`被标记为只读`（writable:false），那么 无法修改已有属性或者在 myObject 上创建屏蔽属性。如果运行在严格模式下，代码会 抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。
        3. 如果`在Prototype链上层存在 foo` 并且它`是一个 setter`，那就一定会调用这个 setter。foo不会被添加到（或者说屏蔽于）myObject，也不会重新定义foo这 个 setter。
        4. 总而言之并不是所有情况，向原型链上已经存在的属性复制，就一定会触发屏蔽，只有第一种会！！！
        5. 第二种情况可能是最令人意外的，`只读属性`会`阻止`Prototype链下层 `隐式创建（屏蔽）同名属性`。这样做主要是`为了模拟类属性的继承`。你可以把原型链上层的 foo 看作是父类中的属性，它会被 myObject 继承（复 制），这样一来 myObject 中的 foo 属性也是只读，所以无法创建。但是一定 要注意，实际上并不会发生类似的继承复制。这个限制只存在于 = 赋值中，使用`Object. defineProperty(..)`并不会受到影响。

### 5.2、类