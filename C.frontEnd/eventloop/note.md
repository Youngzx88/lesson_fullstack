# Event Loop 基础

## JavaScript 是一种单线程语言，这意味着它一次只能执行一个任务。然而，为了实现非阻塞的异步操作，JavaScript 依赖于 Event Loop

## 关键组件

1. ==Call Stack（调用栈）==：调用栈是一个数据结构，记录了我们在程序执行时所有调用的函数。JavaScript 引擎依赖调用栈来管理函数的执行顺序。
Web APIs：

2. ==浏览器提供了一些额外的 API==，比如 setTimeout、DOM 事件、AJAX 请求等。这些 API 不是 JavaScript 引擎的一部分，而是由浏览器提供的环境。

3. ==Task Queue（任务队列）==：当异步任务完成后，其回调函数会被添加到任务队列中。任务队列是一种 FIFO（先进先出）结构，任务会按顺序进入队列并等待执行。

4. ==Event Loop（事件循环）==：Event Loop 是一个不断循环的过程，它检查调用栈是否为空，如果为空，则从任务队列中取出第一个任务并将其放入调用栈执行。

## 执行顺序

1. ==同步任务==：所有的同步任务都在调用栈中执行。调用栈是一个后进先出（LIFO）的结构，当一个函数被调用时，它会被推入栈顶；当函数执行完毕，它会从栈顶弹出

2. ==异步任务==：异步任务（例如定时器、网络请求、事件监听器等）会先由 Web APIs 处理。处理完成后，其回调函数会被推入任务队列。记住是处理完成后才推入任务队列例如setTimeOut在时间到了以后才会推到任务队列

3. ==事件循环==：如果调用栈为空，事件循环会检查任务队列是否有待处理的任务。如果任务队列不为空，事件循环会从队列中取出第一个任务并将其放入调用栈执行

## 宏任务

- 除了宏任务（Macrotasks），还有一种任务类型叫微任务（Microtasks），例如 Promise 的回调和 MutationObserver。微任务的优先级高于宏任务。

- 每个宏任务完成后，Event Loop 会立即处理所有的微任务，然后再开始下一个宏任务

- 常见宏任务：setTimeout，setInterval，setImmediate（仅 Node.js），I/O 操作，UI 渲染任务，MessageChannel

- 常见的微任务：Promise 的回调函数，MutationObserver，process.nextTick（仅 Node.js）

- MutationObserver：MutationObserver 是一个用于监听 DOM 变化的接口。它可以监视一个 DOM 元素及其子树的变化，并在变化发生时触发回调函数。