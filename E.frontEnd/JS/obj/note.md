# 对象

## 1、对象属性/方法的增删改

- 增：新`.`出一个对象，或者在对象中直接添加
- 删：delete(注意删除方法不要加())
- 改：直接重新赋值

## 2、this的使用

- 指向构造出来实例的对象
`AO = { this: {} }`

## 3、创建对象的方式

- 对象字面量
- 自定义构造函数

  ```js
  //构造函数以大写为规范
  //构造函数以大写为规范
  function Teacher(){
    this.name = '顶真';
    this.sex = '男';
    this.smoke = function () {
      console.log(this.name+",性别:",this.sex,"在抽烟");
    }
  }

  var zhangSan = new Teacher()
  zhangSan.name = "zhangSan";
  zhangSan.smoke()
  ```

- 系统自带的构造函数`var obj = new Object()`

## 4、构造函数的正确使用方式

- 看一看vue的写法

```js
var app = new Vue {
  el: '#app',
  data: {
    message: "hello world"
  }
}
```

- 正确的使用方式应该是传一个对象进去,这样别人在使用的时候就可以不局限于某个位置具体要放什么变量。

```js
function Teacher2 (opt){
  this.name = opt.name;
  this.age = opt.age;
}

var t1 = new Teacher2({name:'zs',age:18})
console.log(t1)
```

## 5、new的作用

- new的作用就是在scpoe中创建AO，并把this赋值

## 6、包装类

- 原始值，没有自己的属性和方法
- new Number
- new String
- new Boolean

var num = 3;
console.log(num.length);//相当于new Number(num).length
//包装以后用完立即销毁包装类
```
