## 数组的解构赋值

- ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
- 这种写法属于模式匹配

```js
let [foo, [[bar], baz]] = [1, [[2], 3]]
foo // 1
bar // 2
baz // 3
```

- 如果解构不成功，变量的值就等于 undefined。

```js
let [foo] = []
let [bar, foo] = [1]
```

- 不完全结构

```js
let [a, [b], d] = [1, [2, 3], 4]
a // 1
b // 2
d // 4
```

- 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。

```js
// 报错
let [foo] = 1
let [foo] = false
let [foo] = NaN
let [foo] = undefined
let [foo] = null
let [foo] = {}
```

- 解构赋值允许指定默认值。

## 对象的解构

- 解构不仅可以用于数组，还可以用于对象。

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
foo // "aaa"
bar // "bbb"
```

- 数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```js
let { bar, foo } = { foo: 'aaa', bar: 'bbb' }
foo // "aaa"
bar // "bbb"
let { baz } = { foo: 'aaa', bar: 'bbb' }
baz // undefined
```

- 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

```js
// 例一
let { log, sin, cos } = Math
// 例二
const { log } = console
log('hello') // hello
```

- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

- 默认值生效的条件是，对象的属性值严格等于 undefined。

```js
var { x = 3 } = { x: undefined }
x // 3
var { x = 3 } = { x: null }
x // null
```

- 如果要将一个已经声明的变量用于解构赋值，必须非常小心。

```js
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error
```

- 上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首

```js
// 正确的写法
let x
;({ x } = { x: 1 })
```
