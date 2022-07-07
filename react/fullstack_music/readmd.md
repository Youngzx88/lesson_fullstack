# fullstack全栈
1. 前端方向vite/js 工程化生成单页应用

2. 后端使用 开源的Neteasecloud
    - 删除.git文件夹，防止git冲突

3. 前端和后端怎么交流？
    - axios api -> 
    - frontend UI组件 需要数据(fastmock 假数据)  8080
    - backend api接口 3000

4. react 全家桶到位
    - react组件化 Mvvm响应式
    - react-router路由
    - redux数据流管理
      - 前端 -》 api -》redux -》后端
      - npm i redux react-redux

5. react是声明式的UI开发框架
    - 那么多的组件好复杂，好多API一样
    - 可以用组件来声明功能，更好读  
    - 原来react-router，react-router-dom
    - 现在加上redux + react-redux

6. 数据仓库的搭建过程
    1. 从`react-redux`中解构`Provider`，声明给应用添加数据管理功能
    2. `store`专有目录下，通过`createStore`创建仓库实例
    3. `createStore`方法接受`reducer`函数

7. - reset
        1. 使用syuled-components提供的createGlobalStyle 全局样式()
   - adpter
   - axios功能点
        1. 网络请求千千万，api axios 把单例干
        2. 统一了vue,react native，app三端的请求库
        3. 每个请求，域名+端口 部分，没必要重复
        4. 为了切换请求域名的需要
        5. 拦截器`interceptors`:`interceptors.response.use`,`interceptors.request.use`
            ```js
            <!-- response做拦截，可以解构好axios传过来的数据，处理错误 -->
            axiosInstance.interceptors.response.use(
            res=> res.data,
            err=>{
                console.log(err,"网络错误啦")
            }
            )
            <!-- request，可以设置一些登陆验证,登陆时服务器会给我们一个授权码，token
                我们每次请求时，需要手工带上，通过拦截器，Authorization授权信息
             -->
            interceptors.request.use()

            ```
    - 组件数据管理功能被剥夺
        1. redux数据管理更专业
            - store，store/index.js
            - reducer集合交给store
            - combineReducers提供reducer
            - 各个模块，文章，评论，用户模块
            - reducer还可以多次运行
            - dispatch一个他想要的action
            - 页面会自动更新
            - connect mapStateToProps获取状态，mapDispatchToProps触发状态的改变
        2. mapStateToProps状态读操作
        3. mapDispatchToProps写操作
            - 状态不可修改，redux起因
            - 有法可依
            - dispatch getRankList 异步action redux-thunk支持
                - data dispatch(changeRankList) 同步action
            - dispatch({type:'',data})在action
            - reducer根据type重新计算
            - 状态发生改变，应用了状态的地方MVVM
            
8. 小项目没必要用redux
    - 如果你在想要不要用redux，那就不要用
    - 如果足够复杂，模块化reducer迁移到pages相应模块下，pages/store新的目录架构
    - store中央src/store + 模块化 @pages/store{n}

9. 修改状态有固定流程
    - 属于actionCreators
    - 一般标配两个action，一个同步，一个异步
    - action对象固定格式 {type:}
    - type 方便我们把action为什么要改变记录下来
    - 从init-》到任何action状态,都是可被追溯的

10. style-components
    - 页面播放歌曲的动态高度，props传参
    - ${函数} 函数的返回值
    - 页面的播放状态

11. 移动端一般必须better-scroll生成的scroll组件
    1. 滚动体验更好
    2. 下拉刷新，上拉加载更多
    3. 是用了神三元封装的Scroll组件
    4. 移动端加载更多的标配

12. 数据管理跨页面级别的组件
    1. redux可以用来共享数据
    2. 父子组件共享 props
    3. 爷孙，难搞，redux connect 一下，跨层级

13. redux架构思路
    1. 数据管理和组件，在有了redux后，更是平级关系，/pages /store
    2. 模块化数据管理，每个模块reducer+action 下放到页面路由模块中
    3. 每个模块都提供index.js灵魂，所有的reducer，action，constants都一起export清单文件
    
14. react组件渲染原理
    1. 挂载
    2. 当状态更新时，mvvm，jsx从头到尾重新编译
    3. recommend中，多个重要子组件，Slider等
    4. 给相对独立组件加memo，只要外界给他的props没有变，则不会更新
    5. 热更新，页面局部

15. memo组件性能优化
    1. 带props的子组件
    2. 父组件数据复杂，多项改变状态的地方
    3. 父组件改变没有影响到子组件

16. styled-components原则
    1. 最外层容器styled-components接管
        - Wrapper/Container
    2. List + ListItem

17. 图片延迟加载
    1. react-lazyload声明式组件LazyLoad + placeholder包住原来的图片
    2. Scroll onScroll react-lazyload 去 forceCheck

18. 复杂组件业务分析
    1. 这个阶段我们要刻意练习复杂组件
        - 搜索
        - 登录
    2. redux的设计思路
        - api请求的肯定redux了
        - 跨模块共享状态没问题
    3. 热词
        - 建议

19. 三元react风格
    1. 命名风格
        - api请求 ： getxxxRequest
        - 页面级别组件中 getXXXDispatch
        - action ： 异步 getxxx
        - action ： 同步 changexxx
        - actionTypes ： set_XXX
    2. redux流程风格
        - 分析页面，看透业务，网络请求和状态，XHR
        - mapStateToProps需要哪些状态
        - store模块 defaultStore
        - reduce case 修改
        - constants写完了
        - 
20. CSSTransition页面交互组件
    1. 给页面的路由切换带来动画效果
    2. 来自react-transition-group
    3. in + 私有的useState(show)
    4. 初始时，show false 在内存，useEffect 节点挂在在浏览器上:show true
    5. classNames fly 
    6. fly-enter先立马上，opacity 0，translate: transfrom (100%,0,0)-》fly-enter-active
    7. fly-exit 

21. 界面技巧
    1. 带有后退，第二按钮 页面 弹性布局 flex align-items：center
    2. input搜索用户体验：focus自动聚焦
        - useRef() 生成一个对象：dom关联对象 `{current:null}`
        - jsx dom `ref={refObj}`
        - useEffect current 被关联成功了：从null-》真实对象
        - `refobject.current.focus()`
    3. 清除功能
        - style-loader行内样式 display：动态

22. useMemo用法 以及 吹牛指南：
    1. input change事件需要debounce的
    2. debounce 的计算结果 useMemo的前提条件，缓存计算结果
    3. react父组件，有mvvm更新，通知所有的子组件
    4. 组件是一个函数，函数要重新运行，jsx重新运行
    5. debounce 只需要一次计算结果，结果缓存就好，没必要重新计算
    6. 如useEffect如果万一计算结果过时了？第二个参数`[ handleQuery ]`本身不会变，表达对useMemo理解的地方

23. 内外双修query
    1. 页面级别组件query为action display作准备
    2. useEffect query
    3. hooks是react编程风格
    4. useEffect query 父组件报告通信
    