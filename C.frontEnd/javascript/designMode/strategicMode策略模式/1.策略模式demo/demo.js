// 这样写十分的复杂
// function calRetirementAge(age) {
//   if(age <= 30){
//     throw new Error("no Stratrgy for now");
//   }
//   if(age >= 40 && age < 50){
//     return 65
//   }
//   if(age >= 50 && age < 60){
//     return 60
//   }
//   if(age >= 60){
//     return 55
//   }
// }
// console.log(calRetirementAge(40))
// console.log(calRetirementAge(50))
// console.log(calRetirementAge(60))
// console.log(calRetirementAge(30))

class RetirementStrategy {
  constructor() {
    this.strategies = {};
    this.strategies[40] = 65;
    this.strategies[50] = 60;
    this.strategies[60] = 55;
  }
  getRetirementAge(age){
    if(this.strategies[age] != undefined){
      return this.strategies[age]
    }else{
      throw new Error("no Strategy for now")
    }
  }

}

const strategy = new RetirementStrategy();

console.log(strategy.getRetirementAge(40)); // 输出 65
console.log(strategy.getRetirementAge(50)); // 输出 60
console.log(strategy.getRetirementAge(60)); // 输出 55
console.log(strategy.getRetirementAge(30)); // 抛出异常 "no Strategy for now"
