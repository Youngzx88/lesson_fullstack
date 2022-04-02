# 前端是代码界的导演

- html为演员，css为化妆师，js为动作导演

## 1.css选择器
    1. 标签选择器
    2. 类名选择器 class 一类元素
    3. id 选择器 # 一个元素 唯一的
    4. []属性选择器
    5. '>'   子元素
    6. 空格选择器div p内部 无论多少级别 DOM树状结构
    7. 兄弟节点
    8. ~ * ： ...

## 2.使用多个规则嵌套
    1. 选择越来越准确
    2. 优先级 权重计算公式
        标签 1分
        类名 10分
        id 100分
        行内样式
        !important无限大
- emmet使用css 选择器作为快捷输入的规则

## 3.flex布局
```css
#pond {
  display: flex;
}
```

### 3.1、属性justify-content(水平方向的移动)
```css
justify-content:
/*
参数:
flex-start:默认值。从行首起始位置开始排列
flex-end:从行尾位置开始排列。
center:居中排列。
space-between：均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点。
space-around:均匀排列每个元素，每个元素周围分配相同的空间。
*/
```
### 3.2、属性align-items(垂直方向的移动)
```css
align-items:
/*
flex-start:元素位于容器的开头。
flex-end:元素位于容器的结尾。
center:元素位于容器的中心。
baseline:元素位于容器的基线上。
stretch:默认值，元素被拉伸以适应容器。
*/
```
### 3.3、属性flex-direction
```css
flex-direction:
/*
row: 默认值。灵活的项目将水平显示。
row-reverse: 与 row 相同，但是以相反的顺序。
column:灵活的项目将垂直显示。
column-reverse:与 column 相同，但是以相反的顺序。
*/
```
**注意：**
当“方向”为柱时，justify-content变为垂直方向，align-items变为水平方向。 

### 3.4、属性order
- 有时，颠倒容器的行或列顺序是不够的。在这些情况下，我们可以将order属性应用于单个项目。默认情况下，项的值为0，但我们也可以使用此属性将其设置为正整数值或负整数值
- order:的数值是根据自己的相对位置来决定的
```css
order:
/*
number:默认值是 0。规定灵活项目的顺序。
*/
```
### 3.5、属性align-self
- align-self 属性定义flex子项单独在侧轴（纵轴）方向上的对齐方式。
```css
align-self:
/*
stretch：元素被拉伸以适应容器。
center：元素位于容器的中心。
flex-start：元素位于容器的开头
flex-end：元素位于容器的结尾。
baseline：元素位于容器的基线上。
*/
```
### 3.5、属性flex-wrap 
- flex-wrap 属性规定flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向
```css
flex-wrap:
/*
nowrap：默认值。规定灵活的项目不拆行或不拆列。
wrap：规定灵活的项目在必要的时候拆行或拆列。
wrap-reverse :规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。
*/
```
### 3.6、属性flex-flow
- flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性。
```css
flex-flow:
/*
参数为flex-direction和flex-warp的连接
eg: row wrap,column wrap
*/
```

### 3.7、属性align-content
- 在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）
```css
align-content:
/*
stretch:默认值。元素被拉伸以适应容器。
center:元素位于容器的中心。
flex-start:元素位于容器的开头。
flex-end:元素位于容器的结尾。
space-between:元素位于各行之间留有空白的容器内。
space-around:元素位于各行之前、之间、之后都留有空白的容器内。
*/
```
- 与align-items的区别
1. align-items适用于单行情况下
2. align-content设置子项在侧轴上的排列方式并且只能用于子项出现换行的情况(多行)，在单行下是没有效果的。

