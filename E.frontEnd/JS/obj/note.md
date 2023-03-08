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

- 自定义构造函数
  - 系统自带的构造函数`var obj = new Object()`
  - 这样生成的对象的`prototype`的`constructor`指向`Object`的

- `Object.create`(对象/对象实例/null);
  - 作用就是指定一个自己想要的`prototype`
  - 用这种方式来实现继承
  - 如果填`null`，则生成的对象不继承与`Object`

```html
<script>
  var obj = {}
  var obj2 = new Object();
  function OBJ(){

  }
  var obj3 = new OBJ();
  var obj4 = Object.create(OBJ.prototype)
  console.log("obj",obj)//prototype的constructor指向Object()
  console.log("obj2",obj2)//prototype的constructor指向Object()
  console.log("obj3",obj3)//prototype的constructor指向OBJ()
  console.log("obj4",obj4)//prototype的constructor指向OBJ()
</script>
```

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

```js
var num = 3;
console.log(num.length);//相当于new Number(num).length
//包装以后用完立即销毁包装类
```

## 7、call&apply

- 作用：改变this指向
- call：后面接受参数
- apply：后面接受数组

```js
function test(){
  console.log("1")
}
test() 
//等价于 
test.call()

function Car(brand,color){
  this.brand = brand;
  this.color = color;
}
var newCar = {}
// 改变car的this指向为newCar
Car.call(newCar,"Benz","red");
console.log(newCar);//{brand:"Benz",color:"red"};

var newAnotherCar = {}
// 改变car的this指向为newAnotherCar
Car.apply(newAnotherCar,["Mazda","yellow"])
```

## 8、继承

- 为什么写法都是这样？解答

```js
var tea = new Teacher();
Student.prototype = tea;
// 如果是 Student.prototype = Teacher.prototype
// 在修改 Student.prototype上的属性/方法的时候，会同步修改Teacher原型上的
```

- 如何可以不污染父类？(不生成父类对象实现继承)
  - 使用中间变量

```js
function Teacher (name,age) {
  this.name = name;
  this.age = age
}
function Buffer(){}
Buffer.prototype = Teacher.prototype;
// 不能先new再修改原型指向，那样实例仍然保留原来原型的引用
var buf = new Buffer();
var student = new Student()
Student.prototype = buf;
// 这样即可
```

- 封装继承工具函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    function Teacher(){};
    function Student(){};
    inherit(Student,Teacher)
    var t = new Teacher();
    var s = new Student();
    console.log("t",t);
    console.log("s",s);
    function inherit(target,origin){
      // 声明中间类
      function Buffer () {}
      // 中间类的原型指向要继承的Origin的原型
      Buffer.prototype = origin.prototype;
      // 子类的原型指向Buffer的实例
      target.prototype = new Buffer();
      // 因为这个时候Target.prototype.constructor指向的是Buffer(),修改回来
      target.prototype.constructor = target;
      // 方便看继承于哪个对象给子类的原型上新增一个super_class属性
      target.prototype.super_class = origin
    }
  </script>
</body>
</html>
```

- 更优秀的封装继承工具函数

```html
<body>
  <script>
    function Teacher(){};
    function Student(){};
    inherit(Student,Teacher)
    var t = new Teacher();
    var s = new Student();
    console.log("t",t);
    console.log("s",s);
    // 立即执行函数+匿名函数+闭包
    var inherit = (function(){
      var Buffer = function(){}
      return function(target,origin){
        Buffer.prototype = Origin.prototype;
        target.prototype = new Buffer();
        target.prototype.constructor = target;
        target.prototype.super_class = origin
      }
    })

  </script>
</body>
</html>
```

## 9、常用的模块化开发/插件开发

- window.method = 立即执行函数{function(opt){这里面返回你要的数据}}()
