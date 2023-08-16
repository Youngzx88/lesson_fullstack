// 1. 错误的写法，这样写实际是让modifiedPerson的引用指向了originalPerson
// 修改modifiedPerson，实际是在修改originalPerson
const originalPerson = { name: 'Alice', age: 30 };

// modifiedPerson 实际上是引用了 originalPerson 对象。
// 当你将 originalPerson 赋值给 modifiedPerson 时，它们两者都指向了相同的内存位置，即同一个对象。
// 因此，当你修改 modifiedPerson 的 age 属性时，实际上是在修改原始的 originalPerson 对象。
const modifiedPerson = originalPerson;
modifiedPerson.age = 31;
console.log(originalPerson.age); // 输出 31，但预期应该是 30

// 2. 正常的写法,保持了原来对象的不可变性
const originalPerson2 = { name: 'Alice', age: 30 }
const modifiedPerson2 = { ...originalPerson2, age: 31 }
console.log(originalPerson2)
console.log(modifiedPerson2)

// 3. 使用immer的写法
import { produce } from 'immer'
const originalPerson3 = { name: 'Alice', age: 30 }
const modifiedPerson3 = produce(originalPerson3 ,draft=> {
  draft.age = 33
})

console.log('originalPerson3', originalPerson3)//30
console.log('modifiedPerson3', modifiedPerson3)//33
