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
- <a href="javascript:void(0)"> 清除缓存</a>
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
- 除了标记一个属性为可选以外，你还可以标记这个属性为只读：readonly。很多同学对这一关键字比较陌生，因为以往 JavaScript 中并没有这一类概念，它的作用是防止对象的属性被再次赋值。
- 其实在数组与元组层面也有着只读的修饰，但与对象类型有着两处不同。
  - 你只能将整个数组/元组标记为只读，而不能像对象那样标记某个属性为只读。
  - 一旦被标记为只读，那这个只读数组/元组的类型上，将不再具有 push、pop 等方法（即会修改原数组的方法），因此报错信息也将是类型 xxx 上不存在属性“push”这种。这一实现的本质是只读数组与只读元组的类型实际上变成了 ReadonlyArray，而不再是 Array。


```js
interface IDescription {
  readonly name: string;
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
- 假设新增一个可选的函数类型属性，然后进行调用：`obj2.func()` ，此时将会产生一个类型报错：不能调用可能是未定义的方法。但可选属性标记不会影响你对这个属性进行赋值，如：
- 即使你对可选属性进行了赋值，TypeScript 仍然会使用接口的描述为准进行类型检查，你可以使用类型断言、非空断言或可选链解决`waiting after`
```js
obj2.male = false;
obj2.func = () => {};
```
> 1.7、type 与 interface
- 用 type（Type Alias，类型别名）来代替接口结构描述对象
- interface 用来描述对象、类的结构，而类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型。
- 但大部分场景下接口结构都可以被类型别名所取代，因此，只要你觉得统一使用类型别名让你觉得更整齐，也没什么问题。

> 1.8、object、Object 以及 { }
- object、Object 以及{}（一个空对象）这三者
- 首先是 Object 的使用。在 TypeScript 中就表现为 Object 包含了所有的类型
```js
// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;

const tmp4: Object = 'yzx';
const tmp5: Object = 599;
const tmp6: Object = { name: 'yzx' };
const tmp7: Object = () => {};
const tmp8: Object = [];
```
- 和 `Object` 类似的还有 `Boolean`、`Number`、`String`、`Symbol`，这几个装箱类型（Boxed Types） 同样包含了一些超出预期的类型。以 `String` 为例，它同样包括 `undefined、null、void`，以及代表的 拆箱类型（Unboxed Types） `string`，但并不包括其他装箱类型对应的拆箱类型，如 boolean 与 基本对象类型，我们看以下的代码：
```js
const tmp9: String = undefined;
const tmp10: String = null;
const tmp11: String = void 0;
const tmp12: String = 'yzx';

// 以下不成立，因为不是字符串类型的拆箱类型
const tmp13: String = 599; // X
const tmp14: String = { name: 'yzx' }; // X
const tmp15: String = () => {}; // X
const tmp16: String = []; // X
```
- 在任何情况下，你都不应该使用这些装箱类型。
- `object` 的引入就是为了解决对 `Object` 类型的错误使用，它代表所有非原始类型的类型，即数组、对象与函数类型这些：
```js
const tmp17: object = undefined;
const tmp18: object = null;
const tmp19: object = void 0;

const tmp20: object = 'linbudu';  // X 不成立，值为原始类型
const tmp21: object = 599; // X 不成立，值为原始类型

const tmp22: object = { name: 'linbudu' };
const tmp23: object = () => {};
const tmp24: object = [];
```
- 最后`{}`，一个奇奇怪怪的空对象，如果你了解过`字面量类型`，可以认为`{}`就是一个对象字面量类型（对应到字符串字面量类型这样）。否则，你可以认为使用{}作为类型签名就是一个合法的，但内部无属性定义的空对象，这类似于 Object（想想 new Object()），它意味着任何非 null / undefined 的值：
- 虽然能够将其作为变量的类型，但你实际上无法对这个变量进行任何赋值操作
```js
const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
const tmp26: {} = null;
const tmp27: {} = void 0; // void 0 等价于 undefined

const tmp28: {} = 'linbudu';
const tmp29: {} = 599;
const tmp30: {} = { name: 'linbudu' };
const tmp31: {} = () => {};
const tmp32: {} = [];
```
- 最后，为了更好地区分 `Object、object 以及{}`这三个具有迷惑性的类型，我们再做下总结：
  - 在任何时候都不要，不要，`不要`使用 Object 以及类似的装箱类型。
  - 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 `object`。但我更推荐进一步区分，也就是使用 `Record<string, unknown>` 或` Record<string, any>` 表示对象，`unknown[]` 或 `any[]` 表示数组，(...args: any[]) => any表示函数这样。
  - 我们同样要避免使用`{}`。`{}`意味着`任何非 null / undefined` 的值，从这个层面上看，使用它和使用 `any` 一样恶劣。

> 1.9、unique symbol
- `Symbol` 在 JavaScript 中代表着一个唯一的值类型，它类似于字符串类型，可以作为对象的属性名，并用于避免错误修改 对象 / Class 内部属性的情况。而在 TypeScript 中，symbol 类型并不具有这一特性，一百个具有 symbol 类型的对象，它们的 symbol 类型指的都是 TypeScript 中的同一个类型。为了实现“独一无二”这个特性，TypeScript 中支持了 unique symbol 这一类型声明，它是 symbol 类型的子类型，每一个 unique symbol 类型都是独一无二的。
```js
const uniqueSymbolFoo: unique symbol = Symbol("yzx")

// 类型不兼容
const uniqueSymbolBar: unique symbol = uniqueSymbolFoo
```
- 在 JavaScript 中，我们可以用 Symbol.for 方法来复用已创建的 Symbol，如 Symbol.for("yzx") 会首先查找全局是否已经有使用 linbudu 作为 key 的 Symbol 注册，如果有，则返回这个 Symbol，否则才会创建新的 Symbol 。
- 在 TypeScript 中，如果要引用已创建的 unique symbol 类型，则需要使用类型查询操作符 typeof 
```js
declare const uniqueSymbolFoo: unique symbol;

const uniqueSymbolBaz: typeof uniqueSymbolFoo = uniqueSymbolFoo
```

## 2、字面量类型 与 枚举
> 2.1、类型不够精准
- 这里的 code 与 status 实际值会来自于一组确定值的集合，比如 code 可能是 10000 / 10001 / 50000，status 可能是 "success" / "failure"。而上面的类型只给出了一个宽泛的 number（string），此时我们既不能在访问 code 时获得精确的提示，也失去了 TypeScript 类型即文档的功能。
```js
interface IRes {
  code: number;
  status: string;
  data: any;
}
//使用联合类型加上字面量类型
interface Res {
  code: 10000 | 10001 | 50000;
  status: "success" | "failure";
  data: any;
}
```

> 2.2、字面量类型
- `"success"` 不是一个值吗？为什么它也可以作为类型？在 TypeScript 中，这叫做字面量类型（Literal Types），它代表着比原始类型更精确的类型，同时也是原始类型的子类型（关于类型层级，我们会在后面详细了解）。
- 字面量类型主要包括字符串字面量类型、数字字面量类型、布尔字面量类型和对象字面量类型，它们可以直接作为类型标注
- 所以字面量类型比原始类型更精确
```js
interface Tmp {
  bool: true | false;
  num: 1 | 2 | 3;
  str: "y" | "z" | "x"
}
```
- 联合类型的常用场景之一是通过多个对象类型的联合，来实现手动的互斥属性，即这一属性如果有字段1，那就没有字段2：
```js
interface Tmp {
  user:
    | {
        vip: true;
        expires: string;
      }
    | {
        vip: false;
        promotion: string;
      };
}

declare var tmp: Tmp;

if (tmp.user.vip) {
  console.log(tmp.user.expires);
}
```
- 我们也可以通过类型别名来复用一组字面量联合类型：
```js
type Code = 10000 | 10001 | 50000;

type Status = "success" | "failure";
```

> 2.3、枚举
```js
export default {
  Home_Page_Url: "url1",
  Setting_Page_Url: "url2",
  Share_Page_Url: "url3",
}
//枚举,如果你没有声明枚举的值，它会默认使用数字枚举，并且从 0 开始，以 1 递增：
enum PageUrl {
  Home_Page_Url = "url1",
  Setting_Page_Url = "url2",
  Share_Page_Url = "url3",
}
const home = PageUrl.Home_Page_Url;
//在数字型枚举中，你可以使用延迟求值的枚举值，比如函数：
const returnNum = () => 100 + 499;

enum Items {
  Foo = returnNum(),
  Bar = 599,
  Baz
}
//如果你使用了延迟求值，那么没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后（如上例），或者放在第一位：
```
- 枚举和对象的重要差异在于，对象是单向映射的，我们只能从键映射到键值。而枚举是双向映射的，即你可以从枚举成员映射到枚举值，也可以从枚举值映射到枚举成员：
```js
//obj[k] = v 的返回值即是 v，因此这里的 obj[obj[k] = v] = k 本质上就是进行了 obj[k] = v 与 obj[v] = k 这样两次赋值。
enum Items {
  Foo,
  Bar,
  Baz
}

const fooValue = Items.Foo; // 0
const fooKey = Items[0]; // "Foo"
//但需要注意的是，仅有值为数字的枚举成员才能够进行这样的双向枚举，字符串枚举成员仍然只会进行单次映射：
```
> 2.4、常量枚举
- 常量枚举和枚举相似，只是其声明多了一个 const
```js
const enum Items {
  Foo,
  Bar,
  Baz
}

const fooValue = Items.Foo; // 0
//对于常量枚举，你只能通过枚举成员访问枚举值（而不能通过值访问成员）。同时，在编译产物中并不会存在一个额外的辅助对象（如上面的 Items 对象），对枚举成员的访问会被直接内联替换为枚举的值。以上的代码会被编译为如下形式：
const fooValue = 0 /* Foo */; // 0
```
> 2.5、类型控制流分析中的字面量类型
- 除了手动声明字面量类型以外，实际上 TypeScript 也会在某些情况下将变量类型推导为字面量类型，看这个例子：
- 要解答这个现象，需要你回想 let 和 const 声明的意义。我们知道，使用 let 声明的变量是可以再次赋值的，在 TypeScript 中要求赋值类型始终与原类型一致（如果声明了的话）。因此对于 let 声明，只需要推导至这个值从属的类型即可。而 const 声明的原始类型变量将不再可变，因此类型可以直接一步到位收窄到最精确的字面量类型，但对象类型变量仍可变（但同样会要求其属性值类型保持一致）。
```js
let indentifer = "Youngzx";//const indentifer: Youngzx
//你会发现，使用 const 声明的变量，其类型会从值推导出最精确的字面量类型。而对象类型则只会推导至符合其属性结构的接口，不会使用字面量类型：
const info = {
  name: string,
  age: 18,
  profile: {
    job:"程序员";
  }
}
// const info = {
//   name: string,
//   age: number,
//   profile: {
//     job:string;
//   }
// }
//
```

## 3、函数重载与面向对象
> 3.1、函数

- 如果说变量的类型是描述了这个变量的`值类型`，那么函数的类型就是描述了`函数入参类型`与`函数返回值类型`，它们同样使用:的语法进行类型标注。我们直接看最简单的例子
```js
function add(num1:number,num2:number): number{
  return num1+num2;
}
console.log(add(1,3))
```
- 这里的 (name: string) => number 看起来很眼熟，对吧？它是 ES6 的重要特性之一：箭头函数。但在这里，它其实是 TypeScript 中的函数类型签名。而实际的箭头函数，我们的类型标注也是类似的：
```js
// 方式一
const foo = (name: string): number => {
  return name.length
}

// 方式二
const foo: (name: string) => number = (name) => {
  return name.length
}
```

> 3.2、void类型
- 在 TypeScript 中，一个没有返回值（即没有调用 return 语句）的函数，其返回类型应当被标记为 void 而不是 undefined，即使它实际的值是 undefined。
- 在 TypeScript 中，undefined 类型是一个实际的、有意义的类型值，而 void 才代表着空的、没有意义的类型值。 相比之下，void 类型就像是 JavaScript 中的 null 一样。因此在我们没有实际返回值时，使用 void 类型能更好地说明这个函数没有进行返回操作。但在上面的第二个例子中，其实更好的方式是使用 `undefined` ：
```js
// 没有调用 return 语句
function foo(): void { }

// 调用了 return 语句，但没有返回值
function bar(): void {
  return;
}
```

> 3.3、可选参数与rest参数
- 在很多时候，我们会希望函数的参数可以更灵活，比如它不一定全都必传，当你不传入参数时函数会使用此参数的默认值。正如在对象类型中我们使用 ? 描述一个可选属性一样，在函数类型中我们也使用` ? `描述一个可选参数：
- 需要注意的是，可选参数必须位于必选参数之后。毕竟在 JavaScript 中函数的入参是按照位置（形参），而不是按照参数名（名参）进行传递。当然，我们也可以直接将可选参数与默认值合并，但此时就不能够使用` ? `了，因为既然都有默认值，那肯定是可选参数啦。
- 在某些情况下，这里的可选参数类型也可以省略，如这里原始类型的情况可以直接从提供的默认值类型推导出来。但对于联合类型或对象类型的复杂情况，还是需要老老实实地进行标注。
```js
// 在函数逻辑中注入可选参数默认值
function foo1(name: string, age?: number): number {
  const inputAge = age || 18; // 或使用 age ?? 18
  return name.length + inputAge
}

// 直接为可选参数声明默认值
function foo2(name: string, age: number = 18): number {
  const inputAge = age;
  return name.length + inputAge
}
```

> 3.4、重载
- 在某些逻辑较复杂的情况下，函数可能有多组入参类型和返回值类型：
- 在这个实例中，函数的返回类型基于其入参 bar 的值，并且从其内部逻辑中我们知道，当 bar 为 true，返回值为 string 类型，否则为 number 类型。而这里的类型签名完全没有体现这一点，我们只知道它的返回值是这么个联合类型。
- 要想实现与入参关联的返回值类型，我们可以使用 TypeScript 提供的函数重载签名（Overload Signature），将以上的例子使用重载改写：
```js
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}
//上面的例子用重载重写
function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number
```
- 这里我们的三个 `function func` 其实具有不同的意义：
`function func(foo: number, bar: true): string`，重载签名`一`，传入 bar 的值为 true 时，函数返回值为 string 类型。
`function func(foo: number, bar?: false): number`，重载签名`二`，不传入 bar，或传入 bar 的值为 false 时，函数返回值为 number 类型。
f`unction func(foo: number, bar?: boolean): string | number`，函数的`实现签名`，会包含重载签名的所有可能情况。
- 这里有一个需要注意的地方，拥有多个重载声明的函数在被调用时，是按照重载的声明顺序往下查找的。因此在第一个重载声明中，为了与逻辑中保持一致，即在 bar 为 true 时返回 string 类型，这里我们需要将第一个重载声明的 bar 声明为必选的字面量类型。

> 3.5、异步函数、Generator 函数等类型签名
- 对于`异步函数`、`Generator 函数`、`异步 Generator 函数`的类型签名，其参数签名基本一致，而返回值类型则稍微有些区别：
- 其返回值必定为一个 Promise 类型，而 Promise 内部包含的类型则通过泛型的形式书写，即 Promise <T/>
```js
async function asyncFunc(): Promise<void> {}

function* genFunc(): Iterable<void> {}

async function* asyncGenFunc(): AsyncIterable<void> {}
```

> 3.6、Class
- 过时暂不去了解

## 4、内置类型：any，unknown，never
> 4.1、any
- 你可以在 any 类型变量上`任意地`进行操作，包括赋值、访问、方法调用等等，此时可以认为类型推导与检查是被完全禁用的
  - 如果是`类型不兼容报错`导致你使用 any，考虑用`类型断言`替代，我们下面就会开始介绍类型断言的作用。
  - 如果是`类型太复杂`导致你不想全部声明而使用 any，考虑将这一处的类型去`断言为你需要的最简类型`。如你需要调用 foo.bar.baz()，就可以先将 foo 断言为一个具有 bar 方法的类型。
  - 如果你是想表达一个`未知类型`，更合理的方式是使用 `unknown`。
  - unknown 类型和 any 类型有些类似，一个 unknown 类型的变量可以再次赋值为任意其它类型，但只能赋值给 any 与 unknown 类型的变量：
```js
// 被标记为 any 类型的变量可以拥有任意类型的值
let anyVar: any = "linbudu";

anyVar = false;
anyVar = "linbudu";
anyVar = {
  site: "juejin"
};

anyVar = () => { }

// 标记为具体类型的变量也可以接受任何 any 类型的值
const val1: string = anyVar;
const val2: number = anyVar;
const val3: () => {} = anyVar;
const val4: {} = anyVar;
//any 就像是 “我身化万千无处不在” ，所有类型都把它当自己人。而 unknown 就像是 “我虽然身化万千，但我坚信我在未来的某一刻会得到一个确定的类型” 
```
> 4.2 、never
- 将鼠标悬浮在类型别名之上，你会发现这里显示的类型是"yzx" | 599 | true | void。`never 类型被直接无视掉了`，而 void 仍然存在。这是因为，void 作为类型表示一个空类型，就像没有返回值的函数使用 void 来作为返回值类型标注一样，void 类型就像 JavaScript 中的 null 一样代表“这里有类型，但是个空类型”。
- 在编程语言的类型系统中，never 类型被称为 `Bottom Type`，是整个类型系统层级中`最底层`的类型。和 null、undefined 一样，它是所有类型的子类型，但只有 never 类型的变量能够赋值给另一个 never 类型变量。
```js
type UnionWithNever = "yzx" | 599 | true | void | never;
```
- 但在某些情况下使用 never 确实是符合逻辑的，比如一个只负责抛出错误的函数：
- 在类型流的分析中，一旦一个返回值类型为 never 的函数被调用，那么下方的代码都会被视为无效的代码（即无法执行到）：
```js
function justThrow(): never {
  throw new Error()
}
```
- 我们也可以显式利用它来进行类型检查，即上面在联合类型中 never 类型神秘消失的原因。假设，我们需要对一个联合类型的每个类型分支进行不同处理：
```js
declare const strOrNumOrBool: string | number | boolean;

if (typeof strOrNumOrBool === "string") {
  console.log("str!");
} else if (typeof strOrNumOrBool === "number") {
  console.log("num!");
} else if (typeof strOrNumOrBool === "boolean") {
  console.log("bool!");
} else {
  throw new Error(`Unknown input type: ${strOrNumOrBool}`);
}
```

> 4.3、类型断言：警告编译器不准报错
- 类型断言能够显式告知类型检查程序当前这个变量的类型，可以进行类型分析地修正、类型。它其实就是一个将变量的已有类型更改为新指定类型的操作，它的基本语法是 `as NewType`，你可以将 `any / unknown` 类型断言到一个具体的类型：
- 还可以 as 到 any 来为所欲为，跳过所有的类型检查
- 也可以在联合类型中断言一个具体的分支
```ts
let unknownVar: unknown;
(unknownVar as { foo: () => {} }).foo();

const str: string = "linbudu";
(str as any).func().foo().prop;
```

> 4.4、双重断言
- 如果在使用类型断言时，原类型与断言类型之间差异过大，也就是指鹿为马太过离谱，离谱到了指鹿为霸王龙的程度，TypeScript 会给你一个类型报错
- 此时它会提醒你先断言到 unknown 类型，再断言到预期类型，就像这样：
```ts
const str: string = "yzx";

// 从 X 类型 到 Y 类型的断言可能是错误的，blabla
(str as { handler: () => {} }).handler()

(str as unknown as { handler: () => {} }).handler()
```

> 4.5、非空断言
- 非空断言其实是类型断言的简化，它使用` ! `语法，即 `obj!.func()!.prop` 的形式标记前面的一个声明一定是非空的（实际上就是剔除了 `null` 和 `undefined` 类型），比如这个例子
```ts
declare const foo: {
  func?: () => ({
    prop?: number | null;
  })
};

foo.func().prop.toFixed();

//func 在 foo 中不一定存在，prop 在 func 调用结果中不一定存在，且可能为 null，我们就会收获两个类型报错。如果不管三七二十一地坚持调用，想要解决掉类型报错就可以使用非空断言：

foo.func!().prop!.toFixed();
```

## 5、类型工具
> 5.1、类型别名
- 类型别名可以说是 TypeScript 类型编程中最重要的一个功能，从一个简单的函数类型别名，到让你眼花缭乱的类型体操，都离不开类型别名。虽然很重要，但它的使用却并不复杂
- 我们通过 type 关键字声明了一个类型别名 A ，同时它的类型等价于 string 类型。类型别名的作用主要是对一组类型或一个特定类型结构进行封装，以便于在其它地方进行复用。
- 在类型别名中，类型别名可以这么声明自己能够接受泛型（我称之为泛型坑位）。一旦接受了泛型，我们就叫它工具类型
```ts
type A = String
//抽离
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);
//复用
const status: StatusCode = 502;
//抽离一组联合类型
type StatusCode = 200 | 301 | 400 | 500 | 502;
type PossibleDataTypes = string | number | (() => unknown);

const status: StatusCode = 502;
//抽离一个函数类型
type Handler = (e: Event) => void;

const clickHandler: Handler = (e) => { };
const moveHandler: Handler = (e) => { };
const dragHandler: Handler = (e) => { };
//声明一个对象类型，就像接口那样：
type ObjType = {
  name: string;
  age: number;
}
//在类型别名中，类型别名可以这么声明自己能够接受泛型（我称之为泛型坑位）。一旦接受了泛型，我们就叫它工具类型
type Factory<T> = T | number | string;
const foo: Factory<boolean> = true;
//虽然现在类型别名摇身一变成了工具类型，但它的基本功能仍然是创建类型，只不过工具类型能够接受泛型参数，实现更灵活的类型创建功能
```
> 5.2、联合类型与交叉类型
- 联合类型`|`
- 交叉类型`&`
```ts
interface NameStruct {
  name: string;
}

interface AgeStruct {
  age: number;
}

type ProfileStruct = NameStruct & AgeStruct;

const profile: ProfileStruct = {
  name: "linbudu",
  age: 18
}
```
- 对于对象类型的交叉类型，其内部的同名属性类型同样会按照交叉类型进行合并
```ts
type Struct1 = {
  primitiveProp: string;
  objectProp: {
    name: string;
  }
}

type Struct2 = {
  primitiveProp: number;
  objectProp: {
    age: number;
  }
}

type Composed = Struct1 & Struct2;

type PrimitivePropType = Composed['primitiveProp']; // never
type ObjectPropType = Composed['objectProp']; // { name: string; age: number; }

//声明一个简单、有实际意义的工具类型：
type MaybeNull<T> = T | null;
//类似的还有 MaybePromise、MaybeArray
type MaybeArray<T> = T | T[];
// 函数泛型我们会在后面了解~
function ensureArray<T>(input: MaybeArray<T>): T[] {
  return Array.isArray(input) ? input : [input];
}
```
- 总结一下交叉类型和联合类型的区别就是，联合类型只需要符合成员之一即可`（||）`，而交叉类型需要严格符合每一位成员`（&&）`。

> 5.3、索引类型
- 索引类型指的不是某一个特定的类型工具，它其实包含三个部分：`索引签名类型`、`索引类型查询`与`索引类型访问`。
- 唯一共同点是，它们都通过索引的形式来进行类型操作，但`索引签名类型是声明`，`后两者`则是`读取`

- 1、`索引签名类型`
  - 在这个例子中我们声明的键的类型为 `string（[key: string]）`，这也意味着在实现这个类型结构的变量中只能声明字符串类型的键
  - 在这个例子中我们声明的键的类型为 `string（[key: string]）`，这也意味着在实现这个类型结构的变量中只能声明字符串类型的键
  - 但由于 JavaScript 中，对于 `obj[prop]`形式的访问会将数字索引访问转换为字符串索引访问，也就是说， `obj[599]` 和 `obj['599']` 的效果是一致的。因此，在字符串索引签名类型中我们仍然可以声明数字类型的键。类似的，`symbol` 类型也是如此：
  ```ts
  interface AllStringTypes {
    [key: string]: string;
  }

  type PropType1 = AllStringTypes['linbudu']; // string
  type PropType2 = AllStringTypes['599']; // string

  const foo: AllStringTypes = {
    "linbudu": "599",
    599: "linbudu",
    [Symbol("ddd")]: 'symbol',
  }
  ```
- 2、`索引类型查询`
  - 刚才我们已经提到了索引类型查询，也就是 `keyof` 操作符。严谨地说，它可以将对象中的所有键转换为对应字面量类型，然后再组合成联合类型。注意，这里并不会将数字类型的键名转换为字符串类型字面量，而是仍然保持为数字类型字面量。
  ```js
  interface Foo {
    linbudu: 1,
    599: 2
  }

  type FooKeys = keyof Foo; // "linbudu" | 599
  ```
- 3、`索引类型访问`
  - 在 JavaScript 中我们可以通过 obj[expression] 的方式来动态访问一个对象属性（即计算属性），expression 表达式会先被执行，然后使用返回值来访问属性。而 TypeScript 中我们也可以通过类似的方式，只不过这里的 expression 要换成类型。接下来，我们来看个例子：
  ```ts
  interface NumberRecord {
    [key: string]: number;
  }

  type PropType = NumberRecord[string]; // number
  ```
- 4、`映射类型`
  - 不同于索引类型包含好几个部分，映射类型指的就是一个确切的类型工具。看到映射这个词你应该能联想到 JavaScript 中数组的 map 方法，实际上也是如此，映射类型的主要作用即是基于键名映射到键值类型。概念不好理解 
  ```ts
  //把一个对象所有的属性映射为string
  type Stringfy<T> = {
    [K in keyof T]: string
  }
  type Foo = {
    name: string,
    age: number,
    grade: string,
    sex: boolean
  }
  var newFoo:Stringfy<string>
  ```
  - 拿到属性映射为string其实没有什么很大的意义，但是同时也可以拿到值
  ```ts
  type clone<T> = {
    [K in keyof T]: T[K];
  }
  ```
  - 这里的`T[K]`其实就是上面说到的`索引类型访问`，我们使用键的字面量类型访问到了键值的类型，这里就相当于克隆了一个接口。需要注意的是，这里其实只有`K in `属于`映射类型`的语法，`keyof T` 属于 `keyof 操作符`，`[K in keyof T]`的`[]`属于`索引签名`类型，`T[K]`属于`索引类型`访问。

> 5.4、类型查询操作符：typeof
  - ts中存在两种功能不同的typeof操作符，最常见的就js中，用于检查变量类型的`tyoeof`
  - 第二种就是用于类型查询，typeof，返回的是一个`ts类型`
  ```ts
  const str = "linbudu";

  const obj = { name: "linbudu" };

  const nullVar = null;
  const undefinedVar = undefined;

  const func = (input: string) => {
    return input.length > 10;
  }

  type Str = typeof str; // "linbudu"
  type Obj = typeof obj; // { name: string; }
  type Null = typeof nullVar; // null
  type Undefined = typeof undefined; // undefined
  type Func = typeof func; // (input: string) => boolean
  ```
  - typeof 返回的类型就是当你把鼠标悬浮在变量名上时出现的推导后的类型，并且是最窄的推导程度（即到字面量类型的级别）。你也不必担心混用了这两种 typeof，在`逻辑代码`中使用的 typeof 一定会是 JavaScript 中的 typeof，而`类型代码`（如类型标注、类型别名中等）中的一定是类型查询的 typeof 。同时，为了更好地避免这种情况，也就是隔离类型层和逻辑层，类型查询操作符后是`不允许使用表达式的`
  ```js
  const isInputValid = (input: string) => {
    return input.length > 10;
  }

  // 不允许表达式
  let isValid: typeof isInputValid("linbudu");
  ```
> 5.5、类型守卫
- TypeScript 中提供了非常强大的类型推导能力，它会随着你的代码逻辑不断尝试收窄类型，这一能力称之为类型的控制流分析（也可以简单理解为类型推导）。
```ts
//原来的写法，再往下走不能过滤
function isString(input: unknown): boolean {
  return typeof input === "string";
}
//TypeScript 引入了 is 关键字来显式地提供类型信息
function isString(input: unknown): input is string {
  return typeof input === "string";
}
function foo(input: string | number) {
  if (isString(input)) {
    // 正确了
    (input).replace("y z x", "yzx")
  }
  if (typeof input === 'number') { }
  // ...
}
```
> 5.6、基于 in 与 instanceof 的类型保护
```ts
interface Foo {
  foo: string;
  fooOnly: boolean;
  shared: number;
}

interface Bar {
  bar: string;
  barOnly: boolean;
  shared: number;
}

function handle(input: Foo | Bar) {
  if ('foo' in input) {
    input.fooOnly;
  } else {
    input.barOnly;
  }
}
```

## 6. 泛型
- 泛型方便我们不限定入参
- `extends`用于精确入参类型，类似三元运算符