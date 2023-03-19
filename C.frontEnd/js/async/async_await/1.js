
function sleep(t){

}
//完成了一个具有同步sleep功能的代码段
//java php都有内置sleep函数，js没有
//js是单线程语言，脆弱，不允许有
const t1 = + new Date()
console.log(t1);   
while(+ new Date() - t1 <= 3000){
    console.log("----");
}
console.log(+new Date());