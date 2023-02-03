var Cat = {
    //不用new(对象字面量)
    name:'大毛',
    makeSound:function(){
        console.log('miao');
    }
}
var garfield = {
    name:'tom',
    makeSound:function(){
        console.log('喵喵喵')
    }
}
//通过这种方式创建对象
var tom = Object.create(Cat);
tom.name='Tom';
console.log(tom.name);
tom.makeSound();
console.log("========");
console.log(tom.__proto__);//{ name: '大毛', makeSound: [Function: makeSound] }   找到原型里的属性方法
console.log(tom.__proto__.constructor);//[Function: Object] 找到构造器