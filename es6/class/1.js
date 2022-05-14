class Dog{
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }
    // es6在面向对象(class),让js更像C++，java等大型面向对象语言，拥有传统面向对象编程能力
    static info(){
        console.log('A dog is better than a cat by 10 times');
    }
    // description(){
    //     return`${this.name} is a ${this.breed} type of dog`;
    // }
    get description(){// get description 读取属性
        return`${this.name} is a ${this.breed} type of dog`;
    }
    set nicknames(value){
        this.nick = value.trim();
    }
    get nicknames(){
        return this.nick.toUpperCase();
    }
}

Dog.info();
const sunny = new Dog('sunny','Gloden Doodle');
// console.log(sunny.description());
console.log(sunny.description);

sunny.nicknames = 'water';
console.log(sunny.nicknames);