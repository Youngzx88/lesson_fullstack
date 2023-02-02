# css底层
CSS StyleSheet rules key: value

- 继承
font-size color 减少很多操作
- css所有属性都有继承的能力？
    - 可继承
        1. 字体相关：font-size font-family font-weight font-style,-webkit-font-smoothing,font-size-adjust
        2. 文本相关：color，text-align，text-decoration,text-indent,text-shadow,lettewwr-spaceing,word-spacing,white-space,line-height,
        3. 列表相关：list-style，list-style-image，list-style-type，list-style-position
        4. 其他属性：visibility，opacity，cursy
    - 不可继承
        1. 定位、display... 和布局相关的就不会继承
- 文档流的概念
    - 文档(html document) + 流(水) ，像水一样，能够自适应所在的容器
    - 块级 行排列 默认占满整行 多个块级盒子 从上到下排列
    - 行内(内联) 列排列
    - 当一行放不下的时候，会自动切换到下一行继续排列
    - 文档流 + 盒模型 + 布局 ...

- 脱离文档流
    - position(absolute fixed)，float,display
    - 脱离文档流指节点脱离正常文档流后，在文档流中的其他节点忽略该节点并填补原先空间

- margin重叠问题
    - 两个块级相邻元素，margin重叠 原则来自那里？ BFC
    1. 两个块级处于同一个上下文环境中
    2. 块级盒子在垂直方向上，一个个的放置 BFC

- 根元素 html body 最大的创建了BFC的元素 BLock Format Content 

- 如何创建BFC
    1. 根元素 html/body 最大的
    2. 非溢出的可见元素 overflow 不为 visible
    3. 设置浮动 
    4. 设置定位 position
    5. display: inline-block/table-cell/table-caption/flex/inline-fkex/grid/inline-grid

- 页面展示 = 文档流 + 盒子模型 + BFC + 布局