class Animal{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`${this.name}打招呼`)
    }
}

class Dog extends Animal{
    constructor(name,type){
        super(name);
        this.type = type;
    }
    sayHi(){
        console.log(`${this.name}汪汪汪`);
    }
}

const dog = new Dog('大毛','打不打多');
console.log(dog);