# es6新的数据类型
- 大数据数值表示范围

- js简单数据类型
    - string 
    - boolean
    - number 
    - undefined 
    - null
    - bigint
- 大数据时代，es6推出了新的简单数据类型BigInt
- 适合大数相加,准确,不适合'/',舍去小数

- 两种新建方式
    1. 1n
    2. BigInt("1")
- 不支持隐式类型转换,可以使用强制类型转换
    - BigInt(3)
    - number和BigInt相加,报错,不能混,使用强制类型转换
    

img设置float , img 脱离文档流居于左侧
- 浮动元素不只影响自己(脱离文档流)，它会影响周围的元素对齐（左|右）进行环绕
- block(p 兄弟 不受影响：由背景可知) img离开了文档流，所以block会无视img
- 会影响inline元素(文本文字)围绕floatr元素来实现浮动布局。
- 文字环绕效果是浮动典型的应用

# float元素特性
1. 块级框
    - 不管是行内还是块级，如果被设置了浮动，浮动元素会生成一个块级框
    - 拥有块级设置宽高的能力
    - 一旦浮动，立刻会像inline元素一样产生包裹性
    - 不换行，做多列式布局

2. 高度塌陷
    - block宽度是100%, 但是高度是随着内容撑起来的
    - 解决方式
        1. 给父级元素设置足够的高度(不建议使用)
        2. 给父级中最后一个多加一个空的div,并用clear(不建议增加空div) both清除两边的边框,在去掉margin和padding值
        3. 在父级元素中增加一个overflow: hidden ;
        4. 在父元素后增加一个伪类(推荐使用)