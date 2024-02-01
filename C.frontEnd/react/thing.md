## setState 到底是异步还是同步？

- 在函数组件中，dispatch 更新效果和类组件是一样的，但是 useState 有一点值得注意，就是当调用改变 state 的函数 dispatch，在本次函数执行上下文中，是获取不到最新的 state 值的
- 函数组件更新就是函数的执行，在函数一次执行过程中，函数内部所有变量重新声明，所以改变的 state ，只有在下一次函数组件执行时才会被更新。所以在如上同一个函数执行上下文中，number 一直为 0，无论怎么打印，都拿不到最新的 state 。
- 在使用 useState 的 dispatchAction 更新 state 的时候，记得不要传入相同的 state，这样会使视图不更新。比如下面这么写

```js
export default function Index() {
  const [state, dispatchState] = useState({ name: 'alien' })
  const handleClick = () => {
    // 点击按钮，视图没有更新。
    state.name = 'Alien'
    dispatchState(state) // 直接改变 `state`，在内存中指向的地址相,state不会被改变
  }
  return (
    <div>
      <span> {state.name}</span>
      <button onClick={handleClick}>changeName++</button>
    </div>
  )
}
//解决问题： 把上述的 dispatchState 改成 dispatchState({...state}) 根本解决了问题，浅拷贝了对象，重新申请了一个内存空间。
```

- 类组件中的 setState 和函数组件中的 useState 有什么异同？
  - 相同点：首先从原理角度出发，setState 和 useState 更新视图，底层都调用了 scheduleUpdateOnFiber 方法，而且事件驱动情况下都有批量更新规则。
  - 不同点：
    - 在不是 pureComponent 组件模式下， setState 不会浅比较两次 state 的值，只要调用 setState，在没有其他优化手段的前提下，就会执行更新。但是 useState 中的 dispatchAction 会默认比较两次 state 是否相同，然后决定是否更新组件。
    - setState 有专门监听 state 变化的回调函数 callback，可以获取最新 state；但是在函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用。
    - setState 在底层处理逻辑上主要是和老 state 进行合并处理，而 useState 更倾向于重新赋值。

## 生命周期

- 对于 useEffect 执行， React 处理逻辑是采用异步调用 ，对于每一个 effect 的 callback， React 会向 setTimeout 回调函数一样，放入任务队列，等到主线程任务完成，DOM 更新，js 执行完成，视图绘制完毕，才执行。所以 effect 回调函数不会阻塞浏览器绘制视图。
- useLayoutEffect 和 useEffect 不同的地方是采用了同步执行
- 首先 useLayoutEffect 是在 DOM 更新之后，浏览器绘制之前，这样可以方便修改 DOM，获取 DOM 信息，这样浏览器只会绘制一次，如果修改 DOM 布局放在 useEffect ，那 useEffect 执行是在浏览器绘制视图之后，接下来又改 DOM ，就可能会导致浏览器再次回流和重绘。而且由于两次绘制，视图上可能会造成闪现突兀的效果。
- componentDidMount 替代方案:

  ```js
  React.useEffect(() => {
    /* 请求数据 ， 事件监听 ， 操纵dom */
  }, []) /* 切记 dep = [] */
  ```

  ```js
   React.useEffect(()=>{
        /* 请求数据 ， 事件监听 ， 操纵dom ， 增加定时器，延时器 */
        return function componentWillUnmount(){
            /* 解除事件监听器 ，清除定时器，延时器 */
        }
  },[])/* 切记 dep = [] *
  ```

- componentWillUnmount 替代方案

  ```js
  React.useEffect(() => {
    /* 请求数据 ， 事件监听 ， 操纵dom ， 增加定时器，延时器 */
    return function componentWillUnmount() {
      /* 解除事件监听器 ，清除定时器，延时器 */
    }
  }, []) /* 切记 dep = [] */
  ```
