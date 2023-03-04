# 前端是代码界的导演

- html为演员，css为化妆师，js为动作导演

## 1.css选择器

    1. 标签选择器
    2. 类名选择器 class 一类元素
    3. id 选择器 # 一个元素 唯一的
    4. []属性选择器
    5. plate+apple选择下一个兄弟，即 plate 元素的后一个元素
    6. plate>apple选中指定父元素的指定子元素,即父元素 plate 中的子元素 apple
    7. bento~pickle选择下边的所有兄弟，即 bento 下边的所有 pickle 兄弟
    8. first-child：所有子元素中第一个；p:first-child 所有子元素中第一个p元素；div p:first-child 所有在div中的第一个p标签
    9. span:nth-of-type(6n+2) 从span:nth-of-type(2)开始
    10. p span:only-of-type 选择一个被p包含的仅有一个span的span标签
    11. div:empty 选择所有空div标签
    12. a[href] [type] ：a[for]
    13. plate[for^=S],bento[for^=S]选中 for 的属性值以 S 开头的元素
    14. bento[for$=o],plate[for$=o]选中 for 的属性值以 o 结尾的元素

## 2.使用多个规则嵌套

    1. 选择越来越准确
    2. 优先级 权重计算公式
        标签 1分
        类名 10分
        id 100分
        行内样式
        !important无限大

- emmet使用css 选择器作为快捷输入的规则
