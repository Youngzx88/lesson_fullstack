//创建单例 singleton
//立即执行函数是创建闭包的手段之一
// let CreateSingleton = (function(){
//     console.log('创建单例');
//     //多了一层作用域
//     return function(name){//constructor
//         this.name = name;
//     }
// })()

// let singleton = new CreateSingleton('杨仲鑫');
// console.log(singleton.name);

let CreateSingleton = (function(){
    let instance;//实例
    return function(name){
        if(instance){//之前实例化过
          return instance;
        }
        this.name = name;
        return instance = this;
    }
})()

let singleton = new CreateSingleton('杨仲鑫');
console.log(singleton.name);//杨仲鑫

let singleton2 = new CreateSingleton('ywt');
console.log(singleton2.name);//杨仲鑫

console.log(singleton == singleton2);