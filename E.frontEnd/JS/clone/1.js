var personA = {
  name: 'yzx',
  age: 18
}

var personB = personA

personB.grade = '7'

console.log("personA",personA);//personA { name: 'yzx', age: 18, grade: '7' }
console.log("personB",personB);//personB { name: 'yzx', age: 18, grade: '7' }

console.log("==================");

var personC = {
  name: 'yzx',
  age: 18,
}

var personD = {}

for(var key in personC){
  personD[key] = personC[key]
}
personD.grade = '7'

console.log("personC",personC);//personC { name: 'yzx', age: 18 }
console.log("personD",personD);//personD { name: 'yzx', age: 18, grade: '7' }

console.log("==================");

var personE = {
  name: 'yzx',
  age: 18,
  union: {
    grade: 1
  }
}

var personF = {}

for(var key in personE){
  personF[key] = personE[key]
}
personE.union.grade = 7

console.log("personE",personE);//personE { name: 'yzx', age: 18, union: { grade: 7 } }
console.log("personF",personF);//personF { name: 'yzx', age: 18, union: { grade: 7 } }

console.log("==================");

var personX = {
  name: 'yzx',
  age: 18,
  union: {
    grade: 1
  }
}
var X2 = normalClone(personX)
function normalClone (Target,Origin) {
  Target = Target || {} 
  for(var key in Origin){
    Target[key] = Origin[key]
  }
  return Target
}
console.log("personX",personX)
console.log("x2",X2)