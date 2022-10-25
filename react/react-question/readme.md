- react添加事件
    - jsx声明式UI
    - js中一切皆对象，css中一切皆盒子
    - react中一切皆组件
        1. css，html，js封装，特定的功能，方便复用
        2. 组件化，开发思想
    - npm run dev和rollup一样都是编译打包
    
1. 案例1
-  有一只狗，不允许别人摸，一旦摸就会叫会跑，这只狗两秒后会停下，不叫了，完成Dog组件的开发，用户点击时执行bark run方法。

2. 案例2
- 电脑Computer
- 显示器
    - 电脑状态 status 开着的还是关的
    - on 显示器里显示 显示器亮了 off 显示器关了

- 关键点
    - html DOM 树
    - JSX不是静态的，JSX支持占位 逻辑 数据驱动的页面
    - [值,修改值的方法] = useState(默认值)，修改值后组件会立即更新