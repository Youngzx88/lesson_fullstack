function test(person){
    // person.age = 26;//可读性不好
    //person改成了新对象的地址
    // person = {
    //     name:'yyy',
    //     age:30
    // }
    let obj ={
        ...person
    }
    obj.age = 26;
    // return person
}
//对象 堆内存 地址
const p1 = {
    name: 'yzx',
    age: 22
}
const p2 = test(p1);//person的值被test的返回值刷新了
//但是p1不是const吗为什么可以变？
//实际上p1并没有改变，他的地址还是不变的，只是返回的东西不一样了
console.log(p1);//{ name: 'yzx', age: 26 }
// console.log(p2);//{ name: 'yyy', age: 30 }

//修改过后
//{ name: 'yzx', age: 26 }
//{ name: 'yzx', age: 26 }