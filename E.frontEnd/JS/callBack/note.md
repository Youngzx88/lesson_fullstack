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
