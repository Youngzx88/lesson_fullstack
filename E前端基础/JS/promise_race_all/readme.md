- 脚本文件中定义了Promise

- async.html
1. 首先创建了两个函数，代码的执行从21行开始
2. 函数里的同步代码async1 start
3. 之后碰到await，他会阻塞async1后面代码的执行，放到event loop当中
4. 等待主线程之后的代码执行，进入idle状态后，才会运行