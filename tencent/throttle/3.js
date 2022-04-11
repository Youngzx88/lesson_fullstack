function sayHi(){
    console.log('hello',this.name);
}
var person2={
    name:'Christina',
    sayHi:sayHi
}
var person1={
    name:"YvettLau",
    friend:person2
}
person1.friend.sayHi()
//当函数作为对象的方法时，this指向对象，当前对象是person2

var obj=person1.friend;
obj.sayHi();
