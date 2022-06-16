- react 项目初始化之优化
    1. git版本控制系统也是工程化的一部分
    2. 开源思维 找+供
    3. 加速
- 页面layout
    1. 页面级别组件共享布局方案
        - header + 动态路由组件(Routes,Route,Path) + footer

- header组件的版本化及配置
    1. 页面中layout固定功能，不属于页面组件的内部，属于layout
    2. BOM location.pathname第一个版本
    3. useLocation
    4. 封装配置文件PageTitle

- footer
    1. npm i font-awesome@4.7.0:方便，但是没有定制性
    2. 先快实现，再慢优化
    3. 放在assets/font

- tabbar底栏组件
    1. 属于App 不属于任何一个页面组件
    2. Link location active 
    3. flex：1 + flex-direction

- 切页面之前移动端先自适应页面
    - html+fontsize动态计算
    - 不要用px，多用rem