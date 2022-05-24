// 事件 异步 
// 订阅公众号？ 1000人 
// setTimeout  addEventListener  订阅关系
let eventEmiter = {
    list: {
        'article': []
    }, // 所有的订阅者
    on(event, fn) {
        // 订阅关系 数组？ 
        this.list[event].push(fn);
        // console.log(this.list[event]);
    },
    emit(event, title) {
        this.list[event].forEach(fn => {
            fn(title);
        })
    }
};

function user1(content) {
    console.log('用户1订阅了', content)
}
function user2(content) {
    console.log('用户2订阅了', content)
}
// 先订阅 再推送图文  异步
// on 代表订阅
eventEmiter.on('article', user1);
eventEmiter.on('article', user2);  

// emit 代表发布内容
setTimeout(()=>{
    eventEmiter.emit('article', 'JavaScript 发布-订阅模式')  
},5000)
