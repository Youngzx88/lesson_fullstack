- tsc --init 初始化一个 ts 项目
- tsc -w 持续坚听

- 变量声明

```ts
let dan: string = 520
const button: HTMLButtonElement = document.querySelector('button') //直接写报错，因为有可能为null
//解决方式1:类型断言
const button: HTMLButtonElement = document.querySelector(
  'button'
) as HTMLButtonElement
//解决方式2:联合类型
const button: HTMLButtonElement | null = document.querySelector('button')
```

- async 函数

  - 返回 promise<T>,T 表示具体返回的范型

- 按钮点击事件
  - button?.addEventListener<'click'>('click', getData)
