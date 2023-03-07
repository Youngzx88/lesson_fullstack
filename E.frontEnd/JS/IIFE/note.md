# 立即执行函数

- 立即执行函数，只能是表达式才能被执行符号执行,函数名会被自动忽略掉
- 例子1

```js
(function test1(){
  console.log(1);
})();//1

var test2 = function(){
  console.log(2)
}()//2

function test3(){
  console.log(3)
}()//报错

+ function test4(){//让函数声明变为表达式，+-&&||!
  console.log(4)
}()//4
```

- 例子2

```js
function test(){
  var arr = [];
  for(var i = 0 ; i < 10 ; i++){
    // 在这里令每一个arr[i]都等于了一个匿名函数，但是并未执行
    arr[i] = function(){
      console.log(i);
    }
  }
  return arr
  //return出去的时候i已经变为10了，且形成了闭包
}
var myArr = test()
for(var j = 0 ; j < 10 ; j++){
  // 每次打印都为10
  myArr[j]()
}
```

- 例子2变

```js
function test3(){
  for(var x = 0 ; x < 10 ; x++){
    // 在这里令每一个arr[i]都等于了一个匿名函数，但是并未执行
    ((function(){
      console.log(x);
    })())
  }
  //return出去的时候i已经变为10了，且形成了闭包
}
test3() //0123456789
```

- 例子3

```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</body>
<script>
  var liArr = document.querySelectorAll('li')
  // 遍历去赋值点击事件，但是无论点哪个都是5
  for(var i = 0 ; i < 5 ; i ++){
    // 这里是的函数并未执行，所以只有当i = 5的时候，才会跳出for循环去执行
    liArr[i].onclick = function(){
      console.log(i)
    }
  }
</script>
</html>
```

- 例子3 变

```html
<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</body>
<script>
  var liArr = document.querySelectorAll('li')
  for(var i = 0 ; i < 5 ; i ++){
    // 用立即执行函数包裹
    (function(j){
      liArr[j].onclick = function(){
        console.log(j)
      }
    })(i)
  }
```

- 例子4

```js
var a = 10;
if(function b(){}){//函数声明作为表达式，不为false，表达式忽略函数名，所以后面的b为undefined
  function b(){
    a += typeof(b)
  }
}
console.log(a);//10undefined
```

- 插件开发
  - 写一个立即执行函数
  - 在立即执行函数当中写一个功能类
  - return到window.xxx
  - 在window既可new出功能类实例来