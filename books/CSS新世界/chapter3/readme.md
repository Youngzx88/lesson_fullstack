# 第三章、从增强已有的css属性开始

## 3.1、贯穿全文的尺寸体系
- fit-content
- fill-available
- min-content
- max-content
### 3.1.1、width:fit-content
**1、样式表现：尺寸收缩但不会超出包含块级元素的尺寸限制**
- 对于内联元素可以用`display: inline-block`来收缩
- 对于块级元素可以用`display: table`来收缩

**2、为什么还要fit-content?**
1. 保护元素原始的display值,例如`li`元素设置成了`display:table`前面的项目符号就不会出现;:marker伪元素也会失效
2. 让尺寸有了确定的值
    - css有不少布局需要有明确的尺寸才能实现,典型的例子就是绝对定位元素使用` margin:auto`需要设置具体的`width`或`height`
    - 很多时候绝对定位元素的尺寸是不固定的,最终的尺寸回根据内容自动变化,用`transform`？
    - 但是如果有`animation`动画关键帧种的css语句优先级最高,会干扰原本的`transform`
    - 更好的方法就是用`fit-content`:元素自适应,同时完全居中,不用担心属性冲突

**3、兼容性问题**
- `IE`和`Edge`不支持
- `chrome`和`safari`支持,为保险起见＋ `-webkit-` 前缀
- 对于`firefox`需要`-moz-`前缀：虽然在语法上支持但是没有效果
- `min-width`和`max-width`可以正确渲染`fit-content`，但是`max-height`和`min-height`可以设置但是没用，并不是bug而是只有在`垂直排版`的时候height相关的属性才能准确渲染
```css
.parten {
    writing-mode: vertical-rl;
}
.child {
    max-height: fit-content;
}
```

### 3.1.2、strech，available,fill-available关键字究竟用哪个?
- 首先这三个作用一致,就是让元素的尺寸自动填满可用空间
    - `stretch`:弹性拉伸，最新规范定义的关键字，替换之前的`fill-available`和`available`
    - `available`:指可用空间，是`firefox`浏览器使用的关键字，要配合`-moz-`使用
    - `fill-available`:指填充可用空间，`webkit`浏览器使用的关键字，需要配合`-webkit-`私有前缀来使用
1. strech的使用场景