const os = require('os');

const homedir = os.homedir();

console.log(homedir);
// 调试命令 node --inspect-brk index.js
// 他自己起了一个ws服务
// 我们用调试客户端连上，访问chrome://inspect/#devices，inspect

// 可以看到代码在首行停止了，作用域和调用栈也在右边