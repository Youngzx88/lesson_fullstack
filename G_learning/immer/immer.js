import produce from 'immer'
//普通浅拷贝
let obj1 = { a: 1, b: 2, c: 3, d: { f: 4 } }
let obj2 = obj1
obj2.d.f = 100
console.log(obj1)//{ a: 1, b: 2, c: 3, d: { f: 100 } }
console.log(obj2)//{ a: 1, b: 2, c: 3, d: { f: 100 } }
//immer深拷贝，一个源obj1，需要拷贝的obj4
let obj3 = { a: 1, b: 2, c: 3, d: { f: 4 } }
let obj4 = produce(obj1, draft => {
  draft.d.f = 99
})
// 可以配合useState的修改
let obj5 = produce(draft => {
  draft.d.f = 100
})
console.log(obj3)//{ a: 1, b: 2, c: 3, d: { f: 4 } }
console.log(obj4)//{ a: 1, b: 2, c: 3, d: { f: 99 } }
console.log(obj5)//[Function (anonymous)]