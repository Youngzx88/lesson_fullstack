(function test1(){
  console.log(1);
})();//1

var test2 = function(){
  console.log(2)
}()//2

// function test3(){
//   console.log(3)
// }()//报错

console.log("============")

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

console.log("===========")

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