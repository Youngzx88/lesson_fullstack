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
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }


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