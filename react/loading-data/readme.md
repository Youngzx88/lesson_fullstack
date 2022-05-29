- 前端在300端口
- json-server数据库服务在package.json中配置在1234端口
- 文章列表显示到页面
    ```js
    fetch('http://localhost:1234/posts')
        .then(()=>{
            //json数组->jsx数组->{}
            //setPosts useState响应式
        }
    )
    ```