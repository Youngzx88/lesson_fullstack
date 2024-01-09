const arr = []
for(var i = 0 ; i < 5; i++){
  arr[i] = function ()  {
    console.log(i)
  }
}
arr[0]()//5
arr[1]()//5
arr[2]()//5
arr[3]()//5

//================================

const arr2 = []
for(var i = 0 ; i < 5; i++){
  // 相当于把i传递进去了,i在IIFE当中有自己的作用域
  (function (i){
    arr[i] = function ()  {
      console.log(i)
    }
  })(i)
}
arr[0]()//0
arr[1]()//1
arr[2]()//2
arr[3]()//3

//================================

const arr3 = []
for(let i = 0 ; i < 5; i++){
  arr[i] = function ()  {
    console.log(i)
  }
}
arr[0]()//0
arr[1]()//1
arr[2]()//2
arr[3]()//3