# 回调函数

- 正常的思路

```js
function a () {
  // todo task 1
  function b () {
    // continue task 1
    // todo 
    // task 1 is finished
  }
  b()
}

a()
```

- 回调的思路

```js
function a (callBack) {
  //  todo task1 
  //  var res = task1 done

  a(function (res) {
    // get res 
    // 继续做下一个task
  })
}
// 例如onMounted
function onMounted (callback) {
  // todo
  callback()
}
onMounted(() => {
  // 自己写回调内容的东西
})

```

- 为什么不这么写？

```js
//以下为伪代码
function getUserInfo(user){
  var res = ....(user);
  return [preInfo,nowInfo]
}
// 这一步污染了全局
const [preInfo , nowInfo] = getUserInfo(user);
function infoNext (nowInfo) {
  ...doSomeThingBy(nowInfo)
}
// 其次若getUserInfo是异步函数的话，在后面就拿不到nowInfo了
```

- 为了更好的集成性，以及考虑到异步函数

```js
//以下为伪代码
function getUserInfo(user,callBack){
  var res = ....(user);
  callBack = function (res) {
    // ...
  }
}
// 不论getUserInfoi是不是异步，都可以按顺序执行callBack
```

```js
function calc(obj,callback){
  const {a,b} = obj;
  const sum = a + b * 2;
  callback && callback(sum);
}

const numOpt = {
  a:3,
  b:5
}
calc(numOpt,(res)=>{
  console.log("i get callBack num",res)  //13
})
```

- 回调来做验证

```js

function compute (validator) {
  return function (a,b,type){
    var {isError,errorMsg} = validator(a,b)
    if(isError){
      throw new Error(errorMsg);
    }

    switch(type){
      case '+':
        return a+b;
      case '-':
        return a-b;
      case '*':
        return a*b;
      case '/':
        return a/b;
      default:
        break;
    }
  }
}

var compute = compute(validator);

console.log(compute(1,2,'+'));

function validator (a,b) {
  if(a > 50 && b > 30) {
    return {
      isError:true,
      errorMsg:"a需要小于50，b需要小于30"
    }
  }else{
    return {
      isError:false,
      errorMsg:''
    }
  }
}
```

- 优化一下回调函数

```js
function compute (a,b,callback) {
  let res = a + b * 2 - 1;
  typeof callback == 'function'  && callback(res)
}

compute(32,2,(res)=>{
  console.log("compute以后的数是:",res)
})

compute(32,2,1);//第三个参数不是函数不执行
```

- promise 与 callback 之间的区别
  - promise 主要是解决了异步与同步之间的顺序问题
  - 并不是说解决了所谓的回调地狱，因为回调的写法可以被程序设计所改善，链式的调用也并没有高级多少
  - promise的出现也让异步的函数没必要使用回调函数，因为在.then中也可以拿到res
  - 其他情况都可以用callback
  - promise里面的任何代码与外面的语句都是同步执行的，只有promise.then（）的这一条是异步的(微任务)
