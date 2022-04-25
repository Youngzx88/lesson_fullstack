function Person(name , age){
    this.name = name;
    this.age = age;
}
//在原型上增加方法
Person.prototype.hi = function(){
    console.log('Hi,my name is' + this.name + 'i am' + this.age + 'years old now');
}

function Student(name,age,className){
    Person.call(this,name,age);
    this.className = className;
}

// 通过Object.create实现继承
// 如果直接让Student.prototype = Person.prototype 后续对Student的方法增加会影响Person的
// Object.create(Person.prototype) 创建一个空对象，这个空对象指向原型Person.prototype，这样就可以修改Student的属性和方法不影响Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.hi = function(){
    console.log('Hi,my name is' + this.name + 'i am' + this.age + 'years old now,and from' + this.className);
}

var Youngzx = new Student("Youngzx","22","1821812");
Youngzx.hi();

