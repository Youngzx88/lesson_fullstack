- react全家桶
    1. react-router;react;react-dom(后面两个项目初始化的时候就已经安装了)
    2. npm i react-router react-router-dom
        - http://localhost:3000/users/100 id为100的用户小家
        - /users/:id params
        - /users?id=1 querystring
    3. vite创建的react项目脚手架 web server是以index.html在的根目录作为http://localhost:3000/src/assets/img/user.png
        - src是react开发的根路径App.jsx
    4. 组件跳转
        - /user跳转到/User
            1. 用`BrowserRouter`包裹`app`组件
            2. 
             ```jsx
            <Routes>
            <Route path='/user' element={<User/>}></Route>
            </Routes>
            ```
            3. 先有路由-》页面级别的组件
            4. Link类a标签的组件
        - /user跳转到/address 组件
