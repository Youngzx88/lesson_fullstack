###  question1
- Promise的理解
    1. Promise是一个类，es6提供的异步代码同步化的解决方案
    2. new Promise构造函数执行过程都是同步任务 Promise state: pending(等待)
    3. p1.then()是一个异步任务，会进入到event loop当中 Promise state: fullfilled(已经完成)
    4. 原来的单线程执行栈 同步代码执行完后，程序进入idle
    5. 去event loop找，pending则不执行，fullfilled则执行

### question2
- 进阶理解
    1. js执行都看成任务 event事件loop循环
    2. 全局作用域,没有必要进入event loop,程序会进入idle状态,会自动去`轮询`event loop中有没有需要执行的异步任务(reslove:标记下一轮任务状态为fullfiled)
    3. `promise.then` event loop `微任务`的身份进入，稍后的新的event队列中
    4. event loop中，`微任务先执行，宏任务后执行`
    5. js就是依靠 `单线程 + 同步任务｜异步任务 + event loop` 运行的简单高效