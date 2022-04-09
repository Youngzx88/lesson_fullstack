const obj = {
    name: '杨仲鑫',
    food: '甜品',
    sex:'男'
}
//const food = obj.food;

//es6提供了优雅的api解构
let {name,food} = obj;
console.log(name,food);
//let不允许声明同一个变量

// function introduce(name,age){
//     console.log(`${name},旅梦的好朋友,大佬,最喜欢的食物是${food}`);
// }
// introduce(obj.name,obj.food);

function introduce({name,age}){
    console.log(`${name},旅梦的好朋友,大佬,最喜欢的食物是${food}`);
}
introduce(obj);
