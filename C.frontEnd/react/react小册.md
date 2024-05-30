# React

## 1. 常用 hooks

- useState
- useEffect
- useLayoutEffect
  - 因为 js 的执行是和选择是阻塞的，useEffect 的 effect 函数会在操作 dom 之后异步执行
  - 这些逻辑会以单独的宏任务或者微任务的形式存在，然后进入 Event Loop 调度执行
  - 打开 Permormance 工具，可以看到 Event Loop 的详情
  - 这样就会导致页面闪动，因为有可能页面渲染完，useEffect 的逻辑还没有执行完
  - 因此，useLayoutEffect 就是为了解决这个问题而生的，浏览器会等待 effect 逻辑执行完毕，在执行渲染
  - 但是要注意 promise 和 settimeout 之类的是不一样的，promise 会阻塞等待结果，setTimeout 的回调函数会被放入事件队列中，等待当前的同步代码执行完毕后才会执行
- useReducer
  - 在修改值之前需要执行一些固定的逻辑呢
  - 如果是复杂的深层对象的修改，可以用 immer 来优化。
  - 因为无论是 useState 还是 useReducer 如果返回原始对象是不会修改的
- useRef
  - 用于保存 dom 的引用
  - 但是修改值，不会触发重新渲染，还是需要配合 useState 使用
- forwardRef + useImperativeHandle
  - 从子组件传递 ref 到父组件，就需要 forwardRef 了，也就是把组件内的 ref 转发一下
  - 不过被 forwardRef 包裹的组件的类型就要用 React.forwardRefRenderFunction 了
  - 有的时候，不是想把原生标签暴露出去，而是暴露一些自定义内容。这时候就需要 useImperativeHandle 的 hook 了：它有 3 个参数，第一个是传入的 ref，第二个是是返回新的 ref 值的函数，第三个是依赖数组。
- useContext
  - 跨任意层组件传递数据，我们一般用 Context。
  - 用 createContext 创建 context，在 Aaa 里面使用 xxxContext.Provider 修改它的值，然后在 Ccc 里面用 useContext 取出来。

  ```jsx
  import { createContext, useContext } from 'react'
  const countContext = createContext(111);

  function Aaa() {
  return <div>
  <countContext.Provider value={222}>
  <Bbb></Bbb>
  </countContext.Provider>

    </div>
  }

  function Bbb() {
  return <div><Ccc></Ccc></div>
  }

  function Ccc() {
  const count = useContext(countContext);
  return <h2>context 的值为：{count}</h2>
  }

  export default Aaa;
  ```

- memo + useMemo + useCallback
  - 对于没有变化过的自组件可以用memo包裹，防止重复渲染，props 变的时候，才会重新渲染被包裹的组件，注意memo是高阶组建
  - memo 是防止 props 没变时的重新渲染，useMemo 和 useCallback 是防止 props 的不必要变化。
  - useMemo 用于缓存计算结果，useCallback 用于缓存函数。

## 2. hook必包陷阱

- 这段代码因为每次引用的都是useEffect第一次执行时候count的值，所以永远是1

  ```jsx
  import { useEffect, useState } from 'react';

  function App() {

      const [count,setCount] = useState(0);

      useEffect(() => {
          setInterval(() => {
              console.log(count);
              setCount(count + 1);
          }, 1000);
      }, []);

      return <div>{count}</div>
  }

  export default App;
  ```

- 解决方式
  - setState(pre=>pre+1):这样可以拿到最新的count引用
  - useReducer：因为useReducer不是直接修改引用值，而是通过action
  - 将count设置为effect的副作用
  - useRef：ref.current 的值改了不会触发重新渲染

- 与定时结合并要正确log(封装useRef为一个新的hook)

  ```jsx
  import { useEffect, useState, useRef } from 'react';

  function useInterval(fn: Function, time: number) {
      const ref = useRef(fn);
      ref.current = fn;//确保每次用到最新的setState函数

      let cleanUpFn: Function;

      useEffect(() => {
          const timer = setInterval(() => ref.current(), time);

          cleanUpFn = ()=> {
              clearInterval(timer);
          }
      }, []);

      return () => {
          cleanUpFn();
      }
  }

  function App() {
      const [count, setCount] = useState(0);

      const updateCount = () => {
          setCount(count + 1);
      };

      useInterval(updateCount, 1000);

      return <div>{count}</div>;
  }

  export default App;
  ```

## 3. React组件如何写Ts类型

- JSX类型
  - JSX.ELement：不包含string,number,null等
  - React.ReactElement
  - ReactNode > ReactElement > JSX.Element
  - ReactNode这种方式并没有明确指出 `Add` 是一个React组件，它只是一个返回 `React.ReactNode` 的函数。虽然在实际使用中，你可以将它作为组件，在JSX中使用 `<Add />`，但从类型系统的角度来说，它不会自动获得 `children` 属性，除非你在 `PropsType` 中显式定义它。
  - 所以这是为什么不能在箭头函数中直接返回 `FunctionComponent` 类型，因为你返回的是组件的渲染结果，而不是组件本身。而第二种方式，你声明了一个组件，它能接受 `PropsType` 类型的props，并返回一个组件的渲染结果。
- 函数类型的组件
  - React.FunctionComponent<xxxProps>
  - `React.FunctionComponent`（或 `React.FC`）是另一种类型，专门用于描述函数组件的类型。它自动地为组件提供了 `children` 的声明，并且假设组件会返回有效的渲染输出。
  - 即使props中没有children属性，只要是用了React.FunctionComponent，，TypeScript会自动假设你的组件可以接受 `children` 属性，即使你没有在组件的props类型定义中显式声明这个属性。这就是所谓的隐式 `children`。
- useState类型：默认推导
- useRef类型：useRef 我们知道，可以保存 dom 引用或者其他内容。所以它的类型也有两种。保存 dom 引用的时候，参数需要传个 null
  - 而保存别的内容的时候，不能传 null，不然也会报错，说是 current 只读
  - 当传入 null 的时候，返回的是 RefObject，它的 current 是只读的
  - 这很合理，因为保存的 dom 引用肯定不能改呀
  - 而不传 null 的时候，返回的 MutableRefObject，它的 current 就可以改了

- useForwardRef，useImperativeHandle
  - 因为useForwardRef是要传入额外的参数，所以它不是 FunctionComponent 类型，而是专门的 ForwardRefRenderFunction 类型
  - useImperativeHanlde可以有两个类型参数，一个是 ref 内容的类型，一个是 ref 内容扩展后的类型，一般没必要写，因为传进来的 ref 就已经是有类型的了，直接用默认推导的就行。

- useReducer：useReducer<Reducer<Data,Action>>()
- useCallback 的类型参数是传入的函数的类型
- useMemo 的类型参数是传入的函数的返回值类型
- useContext 的类型参数是 Context 内容的类型：
- CSSProperties：有时候组件可以通过 props 传入一些 css 的值，比如加一个 color 参数，或者styles参数，这样会给到css属性提示

  ```ts
  type CccProps = PropsWithChildren<{
    content: ReactNode,
    color: CSSProperties['color']
  }>
  ```

- HTMLAttributes：如果你写的组件希望可以当成普通 html 标签一样用，也就是可以传很多 html 的属性作为参数，那可以继承 HTMLAttributes
  - HTMLAttributes是其中一些 onClick、onMouseMove 等事件处理函数的类型参数：
  - 当然，继承 HTMLAttributes 只有 html 通用属性，有些属性是某个标签特有的，这时候可以指定 FormHTMLAttributes、AnchorHTMLAttributes 等

  ```ts
  interface MyComponentProps extends HTMLAttributes<HTMLDivElement> {}
  ```

- EventHandler:很多时候，组件需要传入一些事件处理函数，比如 clickHandler
  - 这种参数就要用 xxxEventHandler 的类型，比如 MouseEventHandler、ChangeEventHandler 等，它的类型参数是元素的类型。

  ```ts
  interface CProps {
    clickHandler: MouseEventHandler<HTMLDivElement>
  }
  ```

## 4、受控&非受控

- value 由用户控制就是非受控模式，由代码控制就是受控模式(onChange或ref)
- 受控模式每次 setValue 都会导致组件重新渲染
- 其实绝大多数情况下，非受控就可以了，因为我们只是要拿到用户的输入，不需要手动去修改表单值(并且可以减少渲染)
- 除了原生表单元素外，组件也需要考虑受控和非受控的情况。比如日历组件：它的参数就要考虑是支持非受控模式的 `defaultValue`，还是用受控模式的 `value + onChange`。