// enum draft {
//   name = 0,
//   age = 1
// }

// console.log(draft.age)
// console.log(draft[0])
// console.log(draft[draft.age])

// function myhandle<T>(input: T): T {
//   return input
// }


// console.log(myhandle('Youngzx'))

// type resCode = T extends 200 |300 |400 |500 ? 'success' : 'false'


// const resCodeCondition = (data:string): => {

// }


type Factory<T> = {
  name: T,
  age: T,
  grade : unknown
}
interface obj2<T>{
  name: T,
  age: T,
  grade : unknown
  //暂时不知道的类型 ，后面可以用as指定类型
}

type obj3 = {name: unknown}
const Youngzx:obj2<string> = {
  name:'youngzx',
  age:'19',
  grade: 19
}

const my:obj3 = {name: 12 as number}



my.name  = "string"