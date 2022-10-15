function objectFactory(){
    //Person运行一下 apply(p);
    let obj = {};//1.
    // var Constructor = arguments.shift();//伪数组没有arguments
    var Constructor = [].shift.call(arguments);//从队头移除并赋值
    // console.log(Constructor.prototype);{}
    obj.__proto__ = Constructor.prototype;//2.
    Constructor.apply(obj,arguments);//3.
    var ret = Constructor.apply(obj,arguments);
    return (typeof ret ===  'object') ? (ret || obj) : obj;
}
function Person(name,age){
    this.name = name;
    this.age = age;
    //return null;如何满足？
    return {
        name,
        age,
        bb:'11'
    }
}

// const p = new Person('养中心',19);
let p = objectFactory(Person,'yzx',18);
console.log(p);//{ name: 'yzx', age: 18, bb: '11' }


//手写实现new无非就是
//1. 创建一个空对象（一直构造函数为Constructor）
//2. 把对象继承至 构造函数的prototype上
//3. 执行构造函数，并让this指向新对象