import * as react from 'react'

//定义一个接口，父子组件间用，子组件需要实现props里面规定的接口属性和方法
//ts 语法能力 面向对象的能力更牛逼
//ts 可以让我们和java一样
interface Props{
  userName: String;
  age: Number;
}
//接口和组件结合，组件要实现接口
//React.FC类型定义由@types/react提供
const HelloComponent:React.FC<Props> = (props) => {
  return (
    <h2>
      <>
      hello user : {props.userName}!
      </>
      <br />
      <>
      年纪：{props.age}
      </>
    </h2>
  )
}

export default HelloComponent