function objectFactory(){
    //Person运行一下 apply(p);
    let obj = {};
    // var Constructor = arguments.shift();//伪数组没有arguments
    var Constructor = [].shift.call(arguments);//从队头移除并赋值
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
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
console.log(p.bb);//undefined