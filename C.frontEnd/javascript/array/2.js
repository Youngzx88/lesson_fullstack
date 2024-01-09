const arr = [1,2,3]
arr.forEach(item=>{
  console.log(item)
})
arr.forEach(function(item,index,arr){
  arr[index] += this.a
},{a:3})
console.log(arr)//[ 4, 5, 6 ]

const mapArr = [1,3,4]
const arr2 = mapArr.map(item=>{
  return item + 3
})
console.log(arr2)//[4,6,7]

const filterArr = [1,2,3,4,5]
const newArr = filterArr.filter(item=>{
  return item > 3
})
console.log(newArr)//[4,5]

const reduceArr = [1,2,3,4,5,6]
const num = reduceArr.reduce((prev,next,index) => {
  console.log("prev,next,index",prev,next,index)
  return prev = prev + next
  // 每次需要显示的返回prev
})
console.log(num);//21

// 不给第二个参数prev就是number，可以显示的指定prev是什么
const reduceArr2 = [1,2,3,4,'yzx','yy']
const obj = reduceArr2.reduce((prev,next,index) => {
  prev[reduceArr2[index]] = next
  return prev
},{})
console.log(obj)

// 甚至可以这样指定prev为一个数组
const reduceArr3 = [1,2,3,4,6,9]
const nArr = reduceArr2.reduce((prev,next,index) => {
  prev[index] = next + '-' +index
  return prev
},[])
console.log(nArr)//[ '1-0', '2-1', '3-2', '4-3', 'yzx-4', 'yy-5' ]