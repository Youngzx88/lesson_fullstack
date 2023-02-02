// 被标记为 any 类型的变量可以拥有任意类型的值
let anyVar: any = 1
var b: number = 3

const add = (a: number, b: number): number => {
  return a + b
}

const all: number = add(30, 99)
console.log(all)
