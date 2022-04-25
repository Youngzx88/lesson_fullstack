function Person(){
    var arr = arguments;
    // 第一种情况，传入的可能是对象(null也为Object;特判一下arr[0])
    if(typeof arr[0] === 'object' && arr[0]){
        if(arr[0].name){
            this.name = arr[0].name;
        }
        if(arr[0].age){
            this.age = arr[0].age;
        }
    }else{
        // 否则进来的就是正常的属性值
        if(arr[0]){
            this.name = arr[0];
        }
        if(arr[1]){
            this.age = arr[1]
        }
    }
}
Person.prototype.toString = function(){
    console.log("学生姓名"+ this.name + "学生年龄" + this.age);
}
const p1 = new Person({name:'Youngzx',age:'18'});
const p2 = new Person("ywt",10);

p1.toString();//学生姓名Youngzx学生年龄18
p2.toString();//学生姓名ywt学生年龄10