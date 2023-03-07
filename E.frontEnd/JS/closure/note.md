# 闭包

## 1.闭包基础

- 闭包实际就是内部函数被返回到外部并保存时，一定会产生闭包
- 闭包会产生原来的作用域链不释放
- 过渡的闭包可能会导致内存泄漏或加载过慢

- 例子

```js
function test1(){
  function test2(){
    a = 5
    var b = 2;
    console.log(a);
  }
  var a = 1;
  return test2();
}
var c = 3;
var test3 = test1();
test3();
//1.GO { test1:test1(){} , c:undefined , test3:function}
//2.test1 的 AO { test2:test2(){} , a:1 }, test1的scope chain变为test1的AO-》GO
//3.test2 的 AO { b: 1 } ,test2的scope chain变为 test2 AO-》 test1 AO -》 GO
//4. return test2以后 ， test1的作用域链变为 初始状态 即 scope chain 变为 Go，自己的AO引用被砍断，但是test1的AO并没有被销毁，因为test2的scope chain中仍然有test1的AO
//5. test3 接受了 test1的返回，即是test2, 此时test2的scope chain仍然保存了 test1 的 AO，所以 a 并未被销毁
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
