- typescript是js的超级
  1. ts可以提供类型化的js：
      - `let yzx: Person  yzx.name yzx.sex`
    
- 如何使用ts完成子组件UI开发
  1. 后缀为.tsx
  2. prop-types可以放弃了
  3. 子组件接住父组件的props传递
      - 接口 interface
      - 子组件里定义：ts提供的高级面向对象功能,传统的面向对象思想
      - ```tsx
        export const HelloComponent:React.FC<Props> = (props) => {...}
        ```
  4. <>泛型 泛指内部的类型 关心的核心 `props：Props`(函数参数`props`需要实现`Props`接口)
  5. ts如java先编译，再运行的；js node 1.js 脚本语言
  
  - change事件的typescript化
    1. `e:React.ChangeEvent< HTMLInputElement >`来自@types/react
    2. 子组件像父组件 报告 调用函数 ；复杂性带给父组件
    3. 父组件 接受 子组件传过来的value
        - 子组件onChange语义改成onNameUpdated