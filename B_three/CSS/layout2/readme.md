### js一切皆对象，css中一切皆盒子
- 视觉格式化模型Visual Formating Model 决定的
    - 哪些规则？box是怎么样以你看到的方式显示在document上
    1. 一般盒子尺寸的宽度不包括外内边距
    2. box-sizing：border-box 宽度是包含在边框以内的所有，所以内容的宽度要减去边框和边距

- 盒子模型尺寸(box-sizeing:border-box) + 定位(position:absolute,float) + 盒子类型 + 兄弟元素(float Flex) + 其他因素

### 盒子类型
- 盒子类型由什么决定？ **display**
     - 两种显示类型来划分对display的理解
     - outer display type 对外显示，决定了该元素本身是如何布局的，**既参与何种格式上下文**
        1. block-level-box:block,list-item,table,flex,grid
        2. inline-level-box: inline,inline-block,inline-table,inline-felx,inline-grid
     - inner display type 对内显示,盒子看成容器。规定子元素如何布局，**格式化能力**
        1. BFC 块级格式化上下文
        2. 弹性格式化上下文 FFC：Flex Format Context
        3. GFC：Grid Format Context
        4. IFC：Inline Format Context

- block；inline；inline-block
    -  Block
        - 占满一行，默认继承父元素的宽度
        - 设置宽高
        - 设置padding 和 margin
    - inline
        - 不会占满一行，宽度随着内容变化，多个inline实现从左到右顺序排列显示，一行放不下则自动换行
        - 不可以设置宽高
        - margin-top,padding-top(垂直方向)不生效 
    - inline-block
        - 不会占满一行，宽度随着内容变化
        - w h
        - 设置padding margin

- 格式化上下文 Formatting Context
    - 页面中的一块渲染区域，规定渲染区域内部的子元素是如何排版和相互作用的
    - 不同类型的格子有不同格式化上下文
        - BFC 块级格式上下文
        - IFC 行内格式化上下文
        - FFC 弹性格式化上下文
        - GFC 栅栏格式化上下文呢

- grid和flex的区别
    - grid适合分列布局，但是兼容性不好


### BFC的渲染规则
- 内部盒子会在垂直方向，一个接一个放置
- 盒子垂直方向的距离由margin决定，属于同一个BFC的两个相邻盒子的margin会发生重叠
- BFC的区域不会与float盒子重叠
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响刀外面的元素。反之也如此
- 计算BFC高度时，浮动元素也参与其中
### 如何创建BFC？
1. 根元素html
2. 非溢出的可见元素:overflow:hidden
3. 设置浮动: float属性不为none
4. 设置定位: position为absolute或fixed
5. 定义成块级的非块级元素： display除了block和inline都可以
