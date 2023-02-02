//js脚本 直接运行(不用编译)
//1. Promise构造函数会立即运行，第一个参数(函数)立即运行
//2. p1 Promise{ status: Pending } 
//3. p1 status无法从Pending->Fulfilled
const p1 = new Promise((resolve,reject) => {
    console.log('立即打印') 
    resolve()
})
p1.then(()=>{
    console.log('p1解决了')
})