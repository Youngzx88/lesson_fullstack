// map接受一个数组并对每个数组元素应用一个回调函数，并返回一个新数组
const names = ['yzx','ywt','zwt'].map(item => {return `handsome${item}`})
const ages = ['19','18','17']
ages.map(item=>`handsome${item}`)

//因为返回的新数组等于names了，而第二个map返回的并不等于ages
console.log("names",names)
console.log("ages",ages)