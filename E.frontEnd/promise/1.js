setTimeout(() => { //定时器1
  console.log(9);
}, 0)
new Promise((resolve) => {
  resolve();
}).then(() => { // (宏任务1中的微任务1）碰到Promise,将then的回调函数放入宏任务1的微任务队列中等待,线程继续往下.
  console.log(5)
})
console.log(3); 
console.log("====")
new Promise((resolve)=>{
  //这里面是同步执行的
  console.log(1);
  resolve();
}).then(()=>{//.then进入微任务
  console.log(2);
})