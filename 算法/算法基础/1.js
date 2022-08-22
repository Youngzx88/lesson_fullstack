var x = [12,32,34];
var y = [33,34,64];
var z = [41,42,74];
function mySort(x,y,z){
  var res1 = x.sort((a,b)=>{
    return b-a;
  })
  var res2 = y.sort((a,b)=>{
    return b-a;
  })
  var res3 = z.sort((a,b)=>{
    return b-a;
  })
  return  [res1[0],res2[0],res3[0]].sort((a,b)=>{
    return a-b
  })
}

console.log(mySort(x,y,z));