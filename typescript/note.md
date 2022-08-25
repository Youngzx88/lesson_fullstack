## 1、原始类型与对象类型
> 1.1、内置原始类型
```js
const name: string = 'yzx';
const age: number = 22;
const male: boolean = false;
const undef: undefined = undefined;
const nul: null = null;
const obj: object = { name, age, male };
const bigintVar1: bigint = 9007199254740991n;
const bigintVar2: bigint = BigInt(9007199254740991);
const symbolVar: symbol = Symbol('unique');
```
> 1.2、null 与 undefined
- 在 JavaScript 中，null表示“这里有值，但是个空值”
- undefined 表示“这里没有值”。
- 而在 TypeScript 中，null 与 undefined 类型都是有具体意义的类型。也就是说，它们作为类型时，表示的是一个有意义的具体类型值。
- 这两者在没有开启 strictNullChecks 检查的情况下，会被视作其他类型的子类型，比如 string 类型会被认为包含了 null 与 undefined 类型

> 1.3、void
- <a href="javascript:void(0)"//> 清除缓存</a/>
- 这里的 `void(0)` 等价于 void 0，即`void expression` 的语法。void 操作符会执行后面跟着的表达式并返回一个 undefined，如你可以使用它来执行一个`立即执行函数（IIFE）`：
```js
void function iife() {
  console.log("Invoked!");
}();
```
- 能这么做是因为，void 操作符强制将后面的函数声明转化为了表达式，因此整体其实相当于：
```js
void((function iife(){})())。
```
- 在这里，func1 与 func2 的返回值类型都会被隐式推导为 void，只有显式返回了 undefined 值的 func3 其返回值类型才被推导为了 undefined。但在实际的代码执行中，func1 与 func2 的返回值均是 undefined。
- 虽然 func3 的返回值类型会被推导为 undefined，但是你仍然可以使用 void 类型进行标注，因为在类型层面 func1、func2、func3 都表示“没有返回一个有意义的值”。
```js
function func1() {}
function func2() {
  return;
}
function func3() {
  return undefined;
}
```
> 1.4、数组类型
- 数组同样是我们最常用的类型之一，在 TypeScript 中有两种方式来声明一个数组类型：
```js
const arr1: string[] = [];
const arr2: Array<string> = [];
```
- 这两种方式是完全等价的，但其实更多是以前者为主，如果你将鼠标悬浮在 arr2 上，会发现它显示的类型签名是 string[]。数组是我们在日常开发大量使用的数据结构，但在某些情况下，使用 元组（Tuple） 来代替数组要更加妥当，比如一个数组中只存放固定长度的变量，但我们进行了超出长度地访问：
```js
const arr3: string[] = ['y', 'z', 'x'];
console.log(arr3[599]);
```
- 这种情况肯定是不符合预期的，因为我们能确定这个数组中只有三个成员，并希望在越界访问时给出类型报错。这时我们可以使用元组类型进行类型标注：
```js
const arr4: [string, string, string] = ['y', 'z', 'x'];
console.log(arr4[599]);
```
- 在这种情况下，对数组合法边界内的索引访问（即 0、1、2）将精确地获得对应位置上的类型。同时元组也支持了在某一个位置上的可选成员：
```js
const arr6: [string, number?, boolean?] = ['yzx'];
// 下面这么写也可以
// const arr6: [string, number?, boolean?] = ['yzx', , ,];
```
> 1.5、对象类型
- 首先我们使用 interface 声明一个结构，然后使用这个结构来作为一个对象的类型标注即可
```js
interface IDescription {
  name: string;
  age: number;
  male: boolean;
}

const obj1: IDescription = {
  name: 'linbudu',
  age: 599,
  male: true,
};
```
- 这里的“描述”指：
  - 每一个属性的值必须一一对应到接口的属性类型
  - 不能有多的属性，也不能有少的属性，包括直接在对象内部声明，或是 `obj1.other = 'xxx'`这样属性访问赋值的形式
> 1.6、修饰接口属性
- 类似于上面的元组可选，在接口结构中同样通过 ? 来标记一个属性为可选：
```js
interface IDescription {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription = {
  name: 'linbudu',
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};
```