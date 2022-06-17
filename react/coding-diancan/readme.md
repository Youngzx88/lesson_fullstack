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
    1. html+fontsize动态计算
    2. 不要用px，多用rem

- 城市选择功能(路由参数传递)
    1. city.json 接口提供 下一个版本使用配置文件
    2. 接口都放在api request下，方便管理
    3. link to 复杂版本 接受一个对象
        ```jsx
        // queryString 通过参数search传递
            return <Link className="city_name" to={{pathname:"/home"||'/',search:`name=${item.nm}`}} key={item.id}>
                        {item.nm}
                    </Link>

        // 另一边用import { useSearchParams } from 'react-router-dom'拿到对应的参数
        const [search] = useSearchParams();
        const cityName = search.get(`name` || '');
        ```
    4. 子组件不做数据请求，都放在父组件中，父组件通过参数传递修改状态
    5. 子组件不做复杂状态，用props传递