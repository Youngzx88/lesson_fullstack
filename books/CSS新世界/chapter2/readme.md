# 需要提前了解的知识

### 1、几个常见的数据类型
- < shape-box >: 
    - < box >
    - margin-box
- < basic-shape >:  
    - inset()
    - circle()
    - ellipse()
    - polygon()
    - path()
- < image > : 
    - < url >
    - < gradient >
    - element()
    - image(),
    - image-set()
    - cross-fade()
    - paint()

### 2、学会看懂css属性值定义语法
- 关键字
    - 通用关键字(仅对部分css属性支持)：auto,none,ease
    - 全局关键字:inherit,initial,unset,revert
- 数据类型
    - <>
- 符号
    - 字面符号：，/
    - 组合符号: &&;||;|;[]
    - 数量符号：*;+;？;{A,B};#;!
```css
linear-gradient([<angle> | to <side-or-corner>,]? <color-stop-list>)
```

### 3、了解css全局关键字属性
- inherit
```css
input,textarea{
    font-family:inherit;
}
```
- initial
    - 注意initial不是设置成修改css前的样式，而是css文档中的默认值,甚至会抹去浏览器自带的样式
- unset
    - 如果当前使用的css属性是有继承特性的，等同于inherit关键字
    - 如果没有继承特性，等同于initial
- revert
    - 可以将当前元素的样式还原成浏览器内置的样式

### 4、CSS新特性渐进增强处理技巧
#### 4.1、CSS浏览器兼容性
- 利用属性值的语法差异实现渐进增强的效果
```css
.icon-loading{
    /* 这一条所有浏览器都能识别 */
    background:url(xxx.git);
    /* IE10+识别,可以覆盖上一行的background识别 */
    /* 因为线性渐变函数只有IE10+才能用,所以这一行IE9是无法识别的 */
    background:url(xxx.gif),linear-gradient(transiparent,transparent);
}
```
#### 4.2、借助伪类或伪元素
> IE浏览器的区分
- 区分IE9
    - 伪类或者伪元素,因为伪类是IE9才可以使用的
    ```css
    _::before,.some-class{

    }
    ```
- 区分IE10
    - 可以使用从IE10才开始支持的表单验证相关的伪类，如:required,:optional,:invalid
    ```css
    _:required,.some-class{

    }
    ```
- 区分IE11
    - 可以用-ms-backdop伪元素，这是一个从IE11才开始支持的伪元素
    ```css
    _::ms-backdrop,.some-class{

    }
    ```
- 区分IE12
    - 可以用@supports
- 区分IE13+
    - 可以用:in-range，:out-of-range

> 浏览器类型的区分
- 火狐(类前加-moz-私有前缀的伪类或伪元素)
```css
_::-moz-progress-bar,.some-class{

}
```
- webkit浏览器(类前加-webkit-私有前缀的伪类或伪元素)
```css
_::-webkit-progress-bar,.some-class{
    
}
```
- chrom(类前加-ms-私有前缀的伪类或伪元素)
```css
_::-ms-progress-bar,.some-class{
    
}
```
- 火狐(类前加-moz-私有前缀的伪类或伪元素)
```css
_::-moz-progress—bar,.some-class{
    
}
```

### 5、@supports规则下的渐进增强处理
- @supports是CSS中的常见@规则，可以用来检测当前浏览器是否支持某个CSS新特性，这是最规范、最正统的CSS渐进增强处理方法，尤其适合多个CSS属性需要同时处理的场景
> 缺陷
- IE不能用

#### 5.1、从@supports规则常用语法说起
```css
@supports (display: flex){
    .outer{
        display: flex;
    }
}
/* 如果浏览器支持display:flex 则匹配.item类名的元素就设置flex:1 */
@supports (display: flex){
    .item {flex :1}
}
```
```html
<body>
    <div class="outer">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
</body>
```
> 粗略了解@supports语法
- 其实是不停的递归< supports-condition >嵌套< supports-condition >数据类型
- 所以supports规则的复杂条件判断就是把合法的逻辑语句放在括号里不断嵌套
```css
/* 支持弹性不支持网格 */
@supports(display:flex) and (不支持网格布局) {}
@supports(display:flex) and (not (display:grid)) {}
```

#### 5.2、@supports规则完整语法细节
```css
@supports <supports-condition>{

}
```
> 在现代浏览器中,每一个逻辑判断的语法的合法性是独立的
```css
/* 合法 */
@supports (display: flex) or (anything;) {}
```
> 浏览器还提供了css.supprots()接口,让我们可以在JavaScript代码中检测当前浏览器是否支持某个css属性
```javascript
CSS.supports(propertyName,value)
```
> @supprots规则的花括号可以包含其他@规则,甚至是包含@supports规则自身
```css
@supports(){
    @media(){

    }
    @supports(){

    }
    @keyframes colorful{

    }
}
```