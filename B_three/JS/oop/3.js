var Cat ={
    //es6
    createNew(name){
        var cat = {};
            //属性和方法
            cat.name = name;
            cat.makeSound = function(){
                console.log('喵喵喵');
            }
            return cat;
    }
}
//还是不适用于实例化不多的对象，实例化多的对象还是用prototype
var tom = Cat.createNew('阿来');
console.log(tom.name);
tom.makeSound();
