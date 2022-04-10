# es6
1. let const var
2. 作用域
3. for of
4. 字符串模板
5. Object.create()
    代替 传统的面向对象 Function+prototype

- 函数背后的底层实现由[call]和[constructor]两部分
    1. 普通函数来运行
        - this指向全局并不正确:在函数内可以访问到全局的变量
        - 启用了严格模式:undefined(js运行的更专业)
    2. 对象的方法来使用的话
        - this指针,通过构造函数来完成对象的
    3. 函数是箭头函数的话
        - 简便 优雅 直率
        - 只有call 没有constructor
        - 没有this(this会是外层作用域里的this):只能new
        - 没有arguments数组
        - 没有prototype

    3. left变量名=值
        - 赋值 值是简单数据类型
        - 引用式赋值 



        