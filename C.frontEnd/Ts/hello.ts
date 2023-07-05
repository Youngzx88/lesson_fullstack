console.log("hello typescript222")
console.log("hello typescript333")
console.log("hello typescript444")

interface Foo{
  name:string,
  age:number
}
interface Joo{
  name:string,
  title:string
}
let foo:Foo = {
  name: 'wuhu',
  age: 19
}
let joo:Joo = {
  name: 'yy',
  title: 'sb'
}
// console.log(foo = joo)

declare let foo2:Foo;
declare let joo2:Joo;
// console.log(foo2 = joo2)

interface obj1 {
  name: string,
  age:number
}

type obj2 = {
  name: string,
  age:number
}

var youngzx:obj1 = {
  name:"Youngzx",
  age:12,
};

console.log(youngzx)

var yuwant:obj2 = {
  name:'yuwant',
  age:18
}
console.log(yuwant)

interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
}