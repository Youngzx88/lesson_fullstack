# 策略模式

## 策略模式是什么？

- 在多分支结构当中，我们往往要写许多复杂的`if`，`else`
- 每次如果要新增一种情况又要去匹配新的条件，而且需要对原有的代码进行修改，这是一种不好的行为，策略模式的出现帮我们解决了这个问题
- 策略模式就是有`Strategy`抽象类，这个类中定义一些抽象的方法
- 定义一些具体的`实现类`，去实现`Strategy`的抽象方法，这个实现类就是把原本`if`，`else`的`条件`和`执行内容`整合到一个实现方法当中
- 然后需要调用的时候，直接调用`实现类`

```js
// 不用策略模式的写法
function calRetirementAge(age) {
  if(age <= 30){
    throw new Error("no Stratrgy for now");
  }
  if(age >= 40 && age < 50){
    return 65
  }
  if(age >= 50 && age < 60){
    return 60
  }
  if(age >= 60){
    return 55
  }
}
console.log(calRetirementAge(40))
console.log(calRetirementAge(50))
console.log(calRetirementAge(60))
console.log(calRetirementAge(30))
// 用策略模式的写法
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

```
