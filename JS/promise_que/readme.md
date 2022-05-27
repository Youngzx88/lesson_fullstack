###  question1
- Promise的理解
    1. Promise是一个类，es6提供的异步代码同步化的解决方案
    2. new Promise构造函数执行过程都是同步任务 Promise state: pending(等待)
    3. p1.then()是一个异步任务，会进入到event loop当中 Promise state: fullfilled(已经完成)
    4. 原来的单线程执行栈 同步代码执行完后，程序进入idle
    5. 去event loop找，pending则不执行，fullfilled则执行