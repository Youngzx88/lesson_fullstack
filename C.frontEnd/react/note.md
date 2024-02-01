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
