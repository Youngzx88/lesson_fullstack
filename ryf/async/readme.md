- 同一时刻只能做一件事是队列的缺点
- 与js的运行方式相关 js单线程语言
    - 优点：好理解
    - 缺点：低效
- 线程：代码执行的最小单元
- 加入数据请求 fetch/ajax，js单线程，同步的话会给页面显示带来什么问题？
    1. 滚动/在页面发生交互的时候，由于数据请求已经在发生，假如ajax同步，会阻塞当前js单线程，scroll不会响应
    2. 假如所有任务都是同步，页面僵死
    3. setTimeout被设置为异步任务
