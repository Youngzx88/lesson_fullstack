# React

## 1. 常用hooks

- useState
- useEffect
- useLayoutEffect
  - 因为js的执行是和选择是阻塞的，useEffect的effect函数会在操作dom之后异步执行
  - 这些逻辑会以单独的宏任务或者微任务的形式存在，然后进入 Event Loop 调度执行
  - 打开 Permormance 工具，可以看到 Event Loop 的详情
  - 这样就会导致页面闪动，因为有可能页面渲染完，useEffect的逻辑还没有执行完
  - 因此，useLayoutEffect 就是为了解决这个问题而生的，浏览器会等待effect逻辑执行完毕，在执行渲染
