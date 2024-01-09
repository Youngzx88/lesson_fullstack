# 异步之数据请求

1. xhr 与 fetch 关系？
    - 功能都是一样的 xhr 旧时代，fetch es6
    ```javascript
    fetch('http://127.0.0.1:3000/posts')
    //二进制文件流
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })
    ```
    ```javascript
    xhr.addEventListener('readystatechange', function(event) {
            if (event.target.readyState === 4) {
                document.getElementById('posts').innerHTML = 
                JSON.parse(event.target.responseText).map(item =>`
                    <li>
                        ${item.id} ${item.title} ${item.author} 
                    </li>
                `)
            }
        })
    ```