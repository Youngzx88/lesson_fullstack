# JS送花
## talk in js

1. js运行在浏览器代理中(url),宿主环境(window 全局对象)
    - typeof window 对象 生而知之
    - a b name 全局作用域
    - c 声明在函数中 函数 局部作用域

2. es6 let const var的区别
    - 相同 属于声明所在的作用域,直接用变量名来访问
    - 相同点都是全局的
    - var会自动挂载在window底下(其实是副作用，不太好,用let取代)
    - let const 不会挂载在window对象上
