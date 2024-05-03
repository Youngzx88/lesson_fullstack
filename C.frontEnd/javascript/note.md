# js

## 1、原型链

- Object -> Function -> 自定义函数
- 对开发的影响
  - 用instanceOf判断是不是真数组(例子)
  - Object.getProtoTypeOf(x):返回x对象的隐式原型(不常用)
  - 学会创建空原型对象
  - Object.setProtoTypeOf(obj,null):设置隐式原型为null;obj.\__proto__ = null

## 2、this指向

- 运行时候才知道this的指向
  - 通过new调用，指向新对象
  - 直接调用，指向全局对象
  - 通过对象调用，指向前面的对象  
  - call，apply，call的第一个参数，apply的第一个参数

## 3、标准库

- 略

## 4、webAPi

- BOM
  - window
  - setTimeout
  - ...
- DOM
  - 拿到dom，修改dom
  - 事件，事件的默认行为，传播机制
  - 事件委托：动态，大量；可以委托在父节点上

## 5、callback

## 6、正则

- 创建正则
  - new RegExp('规则','标识')
  - 规则
    - 匹配所有`var reg = /ab123/g`,匹配全文中所有ab123字符
    - 匹配其中一个`/[123]/i`,只会匹配123这个字符串中在被校验字符串中的其中一个，例如a1b2c3，匹配到1
    - 匹配所有字母`/[a-z]/gi`,`[a-zA-Z]/g`
    - 取非`/^[a-z]/g`非小写
    - \d,\D,\s,\S,\w,\W,^开始,$结束
    - 连续的规则(量词)
      - 一个数字紧跟一个字母`/\d[a-zA-Z]`
      - 规则出现几次`/(\d[a-zA-Z]){3}`
    - 匹配邮箱
  - 标识
    - i：ignore
    - g：global全局匹配
- 校验正则
  - reg.test('字符串)

## 7、解析html

- 读取html源代码
  - 遇到css或js停止解析，转去解析css或js
  - load和domContentLoaded
    - load需要所有资源全部加载完成才会被出发
    - domContentLoaded只要dom拿到就可以了
  - 浏览器一边生成dom树，一边计算dom树种每个节点的样式规则，最终形成渲染树
  - 进行布局重排：重排会集中更新，但是如果读取高度会导致强制重排
  - 进行重新绘制

## 7、异常