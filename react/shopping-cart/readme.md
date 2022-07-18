- 购物车里的商品数据 你是怎么打理？
    1. 从商品详情页 购买 1 
    2. 请求出来 
    3. 写死  数组 

1. 写死购物车数据， 简化
2. 购物车模块reducer 设计
    cart 

- 购物车
    - redux 大点项目 数据管理
    - 财务

- redux核心使命是数据管好
    1. 计算正确 初始状态 + reduce 重新计算 更新页面状态 MVVM
    2. 所有的状态 留下来，不被引用式赋值影响，便于react-dev-tool logger
    3. redux的状态迁移是可以被追溯的
        ```jsx
        {
            ...state,
            stateA: 1
        }
        - Object.assign({},state,{list:[...list]})
        - ImmutableJS 作业
        ```
    
- reducer 设计完成，store就基本完成了
    财务数据管理
    1. 提供商品的默认值 default
    2. 商品 添加到购物车 check:true
    3. 选中 不选 case CHECK_GOODS
    4. CHANGE_GOODS_NUM status 不好分析 add
        - add 