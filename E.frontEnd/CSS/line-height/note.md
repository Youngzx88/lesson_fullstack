# line-height

- 什么是基线？是文字基准线
- line-heigh是两行之间的基准线高度
- 修改line-height不止是每一行之间的距离变化，实际上是每一行的上面和下面都变高了：行距
- 行距=lineHeight-fontSize，一行上面和下面的部分叫做半行距
  - light-height > font-size : 行距 > 0
  - light-height = font-size : 行距 = 0
  - light-height < font-size : 行距 < 0
- line-height 单位
  - px：line-height为50，fontSize为20，行距则为负的
  - 数字：2，3等价于200%，300%，最终line-height = 2 * font-size
  - 百分比：同数字
- 垂直居中
  - 真正影响垂直居中的是line-height，因为line-height控制行距
  - 行距 = line-height - font-size,要让半行距有多的话，只能用line-height-font-size>0
  - 这样半行距才能平分
