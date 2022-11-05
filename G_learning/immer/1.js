// 1. 基本数据类型
let a = 3
let b = 4
b = a
b = 8
console.log(a)//3
console.log(b)//8
// 2. 引用数据类型arr
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [3, 4, 5, 6, 7]
arr2 = arr1
arr2[0] = 99
console.log(arr1)//[ 99, 2, 3, 4, 5 ]
console.log(arr2)//[ 99, 2, 3, 4, 5 ]
// 3. 引用数据类型对象
let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = {}
obj2 = obj1
obj2.d = 5
console.log(obj1)//{ a: 1, b: 2, c: 3, d: 5 }
// 4. 浅拷贝是指，一个新的对象对原始对象的属性值进行精确地拷贝，如果拷贝的是基本数据类型，拷贝的就是基本数据类型的值；如果拷贝的是引用数据类型，拷贝的就是内存地址。如果其中一个对象的引用内存地址发生改变，另一个对象也会发生变化。
// object.assign 是 ES6 中 object 的一个方法，该方法可以用于 JS 对象的合并。我们可以使用它来实现浅拷贝。
let target = { a: 1 }
let object2 = { b: { d: 2 } }
let object3 = { c: 3 }
Object.assign(target, object2, object3)
console.log(target)  // {a: 1, b: {d : 2}, c: 3}
object2.b.d = 666
console.log(target) //{ a: 1, b: { d: 666 }, c: 3 }
// 扩展运算法
let obj3 = { a: 1, b: 2, c: 3, f: { a: 3 } }
let obj4 = { d: [1, 2, 3], ...obj3 }
obj3.f.a = [24, 6, 6]
console.log("obj3", obj3)//obj3 { a: 1, b: 2, c: 3, f: { a: [ 24, 6, 6 ] } }
console.log("obj4", obj4)//obj4 { d: [ 1, 2, 3 ], a: 1, b: 2, c: 3, f: { a: [ 24, 6, 6 ] } }
// 5. 深拷贝,基本数据拷贝值，引用数据类型在堆内存中开辟一块内存用于存放复制的对象，并把原有的对象类型数据拷贝过来，这两个对象相互独立，属于两个不同的内存地址，修改其中一个，另一个不会发生改变。
let obj5 = {
  a: 0,
  b: {
    c: 0
  }
}
console.log(JSON.stringify(obj5))//{"a":0,"b":{"c":0}}
console.log(JSON.parse(JSON.stringify(obj5)))//{ a: 0, b: { c: 0 } }
let obj6 = JSON.parse(JSON.stringify(obj5))
console.log("obj5", obj5)
console.log("obj6", obj6)