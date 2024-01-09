# 迭代

## for in

- for...in 循环是用于遍历`对象`中的属性的语句，通常用于枚举对象的属性名

## for of

- for...of 循环是用于遍历可迭代对象的语句，通常用于遍历数组、字符串等集合类型的数据
- for...of 循环只能遍历`可迭代对象`中的元素，不能遍历对象的属性
- 需要`可迭代对象`中有`Symbol(symbol.iterator)`属性，在`symbol`下定义保证唯一

- 到底什么可以让for of去调用其prototype属性上的[symbol.iterator]

```js
// generation:生成一个迭代器，.next()就会迭代一次
function * generation(iterableObject) { //生成器 生成迭代器
  /*
  *generation([1,2,3])
  *iterator.next() -> { value: 1 , done: false} -> value 1
  *iterator.next() -> { value: 2 , done: false} -> value 2
  *iterator.next() -> { value: 3 , done: false} -> value 3
  *iterator.next() -> { value: undefined , done: true} -> 迭代结束
  */
  for(let i = 0; i< iterableObject.length; i++){
    yield iterableObject[i];//产出值后停下来
  }
}

const iterator = generation([1,2,3,4]);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }
```

```js
// es5实现yield
function  generation2(iterableObject) { //生成器 生成迭代器
  /*
  *generation([1,2,3])
  *iterator.next() -> { value: 1 , done: false} -> value 1
  *iterator.next() -> { value: 2 , done: false} -> value 2
  *iterator.next() -> { value: 3 , done: false} -> value 3
  *iterator.next() -> { value: undefined , done: true} -> 迭代结束
  */
  let index = 0;
  function next() {
    return index < iterableObject.length ? { value: iterableObject[index++],done:false } : { value: undefined, done: true}
  }
  return {
    next
  }
}

const i2 = generation2([2,3,4])
console.log(i2.next());
console.log(i2.next());
console.log(i2.next());
console.log(i2.next());
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }
```
