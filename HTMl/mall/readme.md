# 电商界面开发

- html css js 位置 意义？
1. html+Css 完成静态页面的显示,越快越好
    - css 放到head html +css 允许并行下载和执行
    - 下载html html DOM树
    - 下载css

2. js放到尾部来
    - 加入放到head里 下载＋运行时间 拖慢页面的加载
    - js下载并执行完后才会恢复html下载

3. defer
    - 异步
    - 文件的大小，下载的速度和标签的顺序不一样
    - defer确保执行的顺序和标签的顺序一致
    - defer脚本会在文档渲染完毕后，

4. DOMContentLoaded事件  DOM文档加载步骤：
   - 解析html结构 
   - 加载外部脚本和样式表文件
   - 解析并执行脚本代码
   - 构造HTML DOM模型   //DOMContentLoaded执行点
   - 加载图片等外部文件
   - 页面加载完毕  //load


5. js事件 分不同时期等级
    - DOM级事件onload onclick事件里包含on
    - DOM2级事件addEventListener( 'click ' , callback);


6. async(chrome新班没有去执行)
    - async的设置，会使得script脚本异步的加载并在允许的情况下执行
    - asynd的执行，并不会按着script在页面中的顺序来执行，而是谁先加载完谁执行。
    - DOMContentLoaded事件的触发并不受async脚本加载的影响，在脚本加载完之前，就已经触发了DOMContentLoaded。



- 电商应用（页面开发)
1. 界面能力良好，原子级别(html标签+css排版)2．组件（页面开发的思维提升，工具)
2. 组件（页面开发的思维提升，工具)
    - css命名技巧
    - 用一堆的html+css组成了一个组件，一个展示功能和能力的集合，复用
    - 有个框架提供了这些组件的化 70%的工作不用做了
3. 做项目
    - 调研weui移动端最nb的ui框架
    - 界面能力丰富业务│
