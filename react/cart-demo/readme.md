- 购物车逻辑分析
    - Cart主组件
    - 通过antd引入一个List组件(设置header，footer，datasource，renderItem遍历每一个CarItem组件)
    - CarItem组件：checkbox+item
    - useState状态：cartData数据，total总金额，checkAll全选状态；
    - useEffect维护：carData状态(所有的变化都归因于carData的变化)

- 拿远端接口数据并过滤