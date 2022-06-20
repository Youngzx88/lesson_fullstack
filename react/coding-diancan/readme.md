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

- 幻灯片功能
    1. 使用了Swiper
    2. 全局引用css
    3. 固定的html结构
        - `.swiper-container>.swiper-wrapper>.swiper=slide{n}`
        - `.swiper-pagination`分页
    4. 组件挂在以后,useeffect
        - 实例化幻灯片功能 `new Swiper('.btn-swiper')`
    ```jsx
    export default function Banners({banners}) {
    useEffect(()=>{
        new Swiper('.btn-banners',{
        loop:true,
        pagination:{
            el:'.swiper-pagination'
        }

        })
    })
    return (
        <BannersWrapper>
        <div className="btn-banners swiper-container">
            <div className="swiper-wrapper">
            <div className="swiper-slide">1</div>
            <div className="swiper-slide">2</div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
        </BannersWrapper>
        )
    }
    ```

- 仿站原则与做法
    1. 想去哪家公司就仿哪家
    2. 首页面 一摸一样 但又不用完全实现所有功能
    3. 不重要的功能 切页面
    4. 不要让动态部分撑开页面的感觉，给固定高度
    5. styled-components生成的类名为什么乱码

- css in js类名逻辑
    1. 多人协作的时候，类名有概率发生冲突
    2. 页面级别组件，`npm`第三方组件， 通用组件，样式组件...
    3. `styled-components`生成`hash`类名：样式又上去了，但绝对不重复
    4. 最外层就好，内层会通过`外层.内层类名`即可
    5. 在jsx中直接写`className`就没有这个效果，可以通过类似`styled components`等`css in js`的第三方库