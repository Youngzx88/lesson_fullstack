# 1、express的hello world

```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## 2、express-generator

- 通过express-generator可以快速创建一个应用的骨架

```js
npx express-generator
```

- npm start启动运行

## 3、app.METHOD(PATH, HANDLER)

- get

```js
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```

- post

```js
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```

- put

```js
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```

- delete

```js
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

## 4、利用 Express 托管静态文件

- 如果要使用多个静态资源目录，请多次调用 express.static 中间件函数：
  - 这样，在访问静态资源时，Express会先在public目录中查找对应的文件，如果找不到则会在files目录中查找。如果两个目录中都没有找到对应的文件，则会返回404错误。
  - 需要注意的是，如果两个目录中存在同名的文件，Express会优先返回第一个目录中的文件。因此，在指定多个静态资源目录时，需要确保文件名不重复，以避免出现意外的情况。
  - 你提供给 express.static 函数的路径是相对于启动 node 进程的目录的。如果你从另一个目录运行 express 应用程序，最好使用要提供服务的目录的绝对路径

  ```js
  app.use(express.static('public'))
  app.use(express.static('files'))
  const path = require('path')
  app.use('/static', express.static(path.join(__dirname, 'public')))
  ```

## 5、额外的express例子

- 连接数据库

```js
// 创建数据库连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'myData',
  insecureAuth: true // 添加此选项
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL');
    // 在这里执行其他操作
  }
});

```

- 创建接口

```js
const query = 'SELECT * FROM users';

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM student';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});

```
