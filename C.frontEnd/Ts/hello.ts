console.log('hello typescript222')
console.log('hello typescript333')
console.log('hello typescript444')

interface Foo {
  name: string
  age: number
}
interface Joo {
  name: string
  title: string
}
let foo: Foo = {
  name: 'wuhu',
  age: 19,
}
let joo: Joo = {
  name: 'yy',
  title: 'sb',
}
// console.log(foo = joo)

declare let foo2: Foo
declare let joo2: Joo
// console.log(foo2 = joo2)

interface obj1 {
  name: string
  age: number
}

type obj2 = {
  name: string
  age: number
}

var youngzx: obj1 = {
  name: 'Youngzx',
  age: 12,
}

console.log(youngzx)

var yuwant: obj2 = {
  name: 'yuwant',
  age: 18,
}
console.log(yuwant)

interface Tmp {
  mixed: true | string | 599 | {} | (() => {}) | (1 | 2)
}

type First<Tuple extends unknown[]> = Tuple extends [infer T, ...infer R]
  ? T
  : never

type res = First<[1, 2, 3]>

const a: res = 1

// 把一个类型的值(value)映射到另一个类型
type MapType<T> = {
  [k in keyof T]: [T[k], T[k], T[k]]
}
type bType = MapType<{ a: number; b: string }>
// 例如把{a:1,b:'x'} => {a:[1,1,1],b:['x','x','x]}
const a2: bType = { a: [1, 2, 3], b: ['1', 'w', 's'] }

// 把一个类型的键(key)映射到另一个类型
type MapKeyType<T> = {
  // 这里是因为索引类型(对象/class)可以用string，number和symbol作为key
  // 但是这样就把key的类型收缩为只有string类型了
  [Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: [
    T[Key],
    T[Key],
    T[Key]
  ]
}
type bTYoe = MapKeyType<['1', 'x']>
// 这个错误发生是因为类型[1,2,'a']的键不只包括"0","1","2"，
//还包括数组的所有方法名，如"map", "reduce", "length"等。
//而你在定义MapKeyType时，要求所有的键都要有对应的值，包括这些方法名。所以在你定义bTYoe时，除了"0","1","2"外，还应该包括所有数组的方法名。
// const a3: bTYoe = {
//   '0label ': [1, 1, 1],
//   '1label ': [2, 2, 2],
//   '2label ': ['a', 'a', 'a'],
//   'lengthlabel ': [3, 3, 3],
// }

//解决这个问题的方法是，在定义MapKeyType时，只包括T的属性，而不包括它的方法。
//这可以通过使用Extract<keyof T, string>来实现，
//这个类型表示的是T的所有字符串键。
//这样MapKeyType就只会包括"0","1","2"，而不会包括"map", "reduce"等方法名。
type MapKeyType2<T> = {
  [
    k in Extract<keyof T, string>
    as `${k & string}label `
  ]: [T[k],T[k],T[k]]
}

// 想提取promise里面的类型？
type P = Promise<'ajksdhjak'>
// Typescript 类型的模式匹配是通过 extends 对类型参数做匹配
// 结果保存到通过 infer 声明的局部类型变量里
// 如果匹配就能从该局部变量里拿到提取出的类型。
type GetValueType<P> = P extends Promise<infer Value> ? Value : never;
// type getPType = Promise<'Yang'> extends Promise<infer value> ? value : never
const p1:GetValueType<P> = 'ajksdhjak'


// 数组类型想提取第一个元素的类型怎么做呢？
const arr = ['a',1,3]
type GetArrFirstValueType<arr extends unknown[]> = arr extends [infer firstType,...unknown[]] ? firstType :never
// 用它来匹配一个模式类型，提取第一个元素的类型到通过 infer 声明的局部变量里返回。
// 但是这个只能匹配精确的字面量，需要匹配类型的话我们要给泛型定义至类型层级
const a4:GetArrFirstValueType<[9,2,3]> = 9
// 如下
const a5:GetArrFirstValueType<[number,string,boolean]> = 241


// 数组类型想提取第一个元素的类型怎么做呢？
type GetArrLastValueType<arr extends unknown[]> = arr extends [...unknown[],infer lastType] ? lastType :never
const a6:GetArrLastValueType<[9,2,3]> = 3
// 如下
const a7:GetArrLastValueType<[number,string,boolean]> = true

// 取剩余的数组，比如取去掉了最后一个元素的数组
type GetArrSaveValueType<arr extends unknown[]> = arr extends [...infer arrType,unknown] ? arrType :never
const a8:GetArrSaveValueType<[9,2,3]> = [9,2]
// 如下
const a9:GetArrSaveValueType<[number,string,boolean]> = [3,'a']


// 做这种题，先要考虑最后返回的是什么类型，然后再去推导
type startWitchType<str extends string,preFix extends string> = 
str extends `${preFix}${string}` ? true :false

const s1:startWitchType<'youngzx','c'> = false 

// 替换字符串
// 声明要替换的字符串 Str、待替换的字符串 From、替换成的字符串 3 个类型参数，通过 extends 约束为都是 string 类型。
// 用 Str 去匹配模式串，模式串由 From 和之前之后的字符串构成，把之前之后的字符串放到通过 infer 声明的局部变量 Prefix、Suffix 里。
// 用 Prefix、Suffix 加上替换到的字符串 To 构造成新的字符串类型返回。
type ReplaceStr<originalStr extends string,strWhoReplace extends string,replaceStr extends string> = 
originalStr extends `${infer pre}${strWhoReplace}${infer next}` ? `${pre}${replaceStr}${next}` : originalStr
const a10 = 'youngzx'
const b:ReplaceStr<'youngzx','ng','cj'> = 'youcjzx'