let obj = {
    age:18
}
obj.age
obj.age = "ssssss";//赋值的同时，监听，介入一下
// p代理
let p = new Proxy(obj,handler);
p.age = 'sss';