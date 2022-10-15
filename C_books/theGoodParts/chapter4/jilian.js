function Person() {
    this.name = '';
    this.age = 0;
    this.weight = 10;
   }
   Person.prototype = {
    setName:function(name){
     this.name = name;
     return this;
    },
    setAge:function(age){
     this.age = age;
     return this;
    },
    setWeight:function(weight) {
     this.weight = weight;
     return this;
    }
   }
   var p = new Person();
   p.setName('Joh').setAge(26).setWeight(80);
   console.log(p); // {name: "Joh", age: 26, weight: 80}
   
   