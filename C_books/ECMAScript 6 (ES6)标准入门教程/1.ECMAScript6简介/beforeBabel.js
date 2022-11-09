import 'core-js'
import 'regenerator-runtime'

const arr = [1,2,3,4,5,6]
arr.map(item=>console.log(item))

//新的api需要polyfill
console.log(Array.from(arr,item = item * 2))