const forest = {
    location: 'sweden',
    animals: 3,
    animalsType: ['lions','tigers','Bears']
};

// 解构
// const {location }= forest
// console.log(location);

//如果命名重复了！
const { location: lo,animals,animalsType,nickname = '小名'} = forest;
console.log(lo,nickname);

//解构对象属性的数组(已经解构了animalsType)
const [lions,tigers,bears] = animalsType;
console.log(lions,tigers,bears);
