# 对象克隆

## 对象的克隆

- 如下的例子，因为PersonB得到是PersonA的地址，所以修改personB会影响PersonA

```js
var personA = {
  name: 'yzx',
  age: 18
}

var personB = personA

personB.grade = '7'

console.log("personA",personA);//personA { name: 'yzx', age: 18, grade: '7' }
console.log("personB",personB);//personB { name: 'yzx', age: 18, grade: '7' }
```

- 进行修改，让personB有自己的地址空间即可

```js
var personC = {
  name: 'yzx',
  age: 18
}

var personD = {}

for(var key in personC){
  personD[key] = personC[key]
}
personD.grade = '7'

console.log("personC",personC);//personC { name: 'yzx', age: 18 }
console.log("personD",personD);//personD { name: 'yzx', age: 18, grade: '7' }
```

## 浅拷贝

- 拷贝对象当中的引用值并无法被修改
- 上面的例子就是浅拷贝

```js
var personE = {
  name: 'yzx',
  age: 18,
  union: {
    grade: 1
  }
}

var personF = {}
// 而且循环的时候prototype中的自定义属性也会被循环遍历出来 
for(var key in personE){
  // 解决循环的时候把原型中的自定义属性剔除
  if(personE.hasOwnProperty(key)) personF[key] = personE[key]
}
personE.union.grade = 7
// 修改对象中的对象()
console.log("personE",personE);//personE { name: 'yzx', age: 18, union: { grade: 7 } }
console.log("personF",personF);//personF { name: 'yzx', age: 18, union: { grade: 7 } }

```

- 封装浅拷贝为函数

```js
var personX = {
  name: 'yzx',
  age: 18,
  union: {
    grade: 1
  }
}
var X2 = normalClone(personX)
function normalClone (Target,Origin) {
  Target = Target || {} 
  for(var key in Origin){
    Target[key] = Origin[key]
  }
  return Target
}
console.log("personX",personX);//personX { name: 'yzx', age: 18, union: { grade: 1 } }
console.log("x2",X2);//x2 { name: 'yzx', age: 18, union: { grade: 1 } }
```

## 深拷贝

- 深拷贝的思想主要是复制对象中的引用值

```js
var obj = {
  name: 'yzx',
  age: 18,
  children: {
    first: "one",
    second: "second",
    third: "third",
  },
  books: ["b1","b2","b3"]
}
Object.prototype.num = 1;
function deepClone(origin,target){
  var target = target || {};
  for(var key in origin){
    // 先筛选自己的属性，防止原型链上的也被复制过来了
    if(origin.hasOwnProperty(key)){
      // 在这里判断是否是引用属性的值(对象里面套对象)
      if(typeof(origin[key]) === 'object' && origin[key] !== null){
        if(Object.prototype.toString.call(origin[key]) === '[object Array]'){
          target[key] = [];
          deepClone(origin[key],target[key],)
        }else{
          target[key] = {};
          deepClone(origin[key],target[key],)
        }
      }else{
      // 如果是原始值
        target[key] = origin[key]
      }
    }
  }
  return target;
}

var obj2 = deepClone(obj)
obj2.children.fourth1 = "whuu"
obj2.books.push("123")
console.log("obj",obj)
console.log("obj2",obj2)
```

- 工作中的便捷写法(JSON)

```js

//deepClone
var obj = {
  name: 'yzx',
  age: 18,
  children: {
    first: "one",
    second: "second",
    third: "third",
    inner: {
      here: "here is inner"
    }
  },
  books: ["b1","b2","b3"]
}

var obj2 = JSON.parse(JSON.stringify(obj));
obj2.children.fourth = "fourth"
obj2.children.inner.there = "there"
obj2.books.push("xxx")

console.log("obj",obj)
console.log("obj2",obj2)
```
