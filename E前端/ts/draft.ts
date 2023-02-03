enum draft {
  name = 0,
  age = 1
}

console.log(draft.age)
console.log(draft[0])
console.log(draft[draft.age])

function myhandle<T>(input: T): T {
  return input
}


console.log(myhandle('Youngzx'))

type resCode = T extends 200 |300 |400 |500 ? 'success' : 'false'


const resCodeCondition = (data:string): => {

}

