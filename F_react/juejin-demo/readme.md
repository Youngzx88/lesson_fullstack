- 单页应用 SPA 
    1. BrowserRouter/HashRouter包着App
    2. 路由思维先于组件化思维
    3. 设计路由 mysql id自增 动态参数 params(时间戳➕随机数)
        - mongodb NOSQL 非关系型数据库 hashCode
        - https://juejin.cn/book/6844733800300150797/section/6844733800363065351
        ```jsx
        <!-- 一级路由 -->
        <Route path="/post/:1429794690704221" element={<Detail/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <!-- 二级路由 -->
        <Route path="/user/:id/posts" element={<UserPosts/>}/>
        ```