class Animal{
    constructor(name){
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    eat(food){
        this.belly.push(food);
        return this
    }
    drink(){
        this.thirst -= 10;
        return this
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);//通过父类添加
        this.breed = breed;
    }
    bark(){
        console.log('BARK BARK BARK');
        return this
    }
}
const sunny = new Dog('sunny');
console.log(sunny.name);
sunny.bark().eat('rice');
console.log(sunny.belly);