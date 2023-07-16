# 1、常用的 Nest CLI

- nest new project-name
- npm run start:dev(访问`http://localhost:3000/`)

- nest g controller cat
- nest g service cat
- nest generate resource xxx (快速创建一个 CRUD)

# 2、支持静态资源

- main.ts 是负责启动 Nest 的 ioc 容器的，调用下 useStaticAssets 来支持静态资源的请求：
- 注意要给 create 方法传入 NestExpressApplication 的泛型参数才有 useStaticAssets 这些方法

- useStaticAssets() 是 Nest.js 中用于配置静态资源的一个方法，它接收两个参数：第一个参数：它是一个字符串，表示静态资源所在的目录的路径。第二个参数（可选）：它是一个对象，用于配置一些额外的选项

- 这句话的意思是将项目根目录下的 public 文件夹设置为存放静态资源的地方，并且所有这些静态资源的 URL 都会以 /static 开头。

- 其中，app.useStaticAssets() 是 Nest.js 提供的一个方法，用于配置静态资源的访问。

- join(**dirname, '..', 'public') 是使用 Node.js 的 path 模块的 join 方法，用于拼接路径。**dirname 是 Node.js 中的一个全局变量，表示当前文件所在的目录。'..' 表示上一级目录，'public' 表示 public 文件夹。所以整个表达式的意思就是获取到项目根目录下的 public 文件夹的路径。

- { prefix: '/static'} 是一个选项对象，其中的 prefix 属性用于设置静态资源的 URL 前缀。在这里，所有的静态资源的 URL 都会以 /static 开头。例如，如果你有一个在 public 文件夹中的图片文件 img.jpg，那么你可以通过访问 /static/img.jpg 来获取这个图片。

```ts
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets(join(__dirname, '..', 'public'), { prefix: '/static' })
  await app.listen(3000)
}
bootstrap()
```

# 3、尝试访问接口

- 首先要知道访问的 5 种方式
  - url param
  - query
  - form-urlencoded(参数放在 body，需要编码)
  - form-data(参数放在 body，用 boundary 分割)
  - json(就不说了)
- url param 是 url 中的参数，Nest 里通过 :参数名 的方式来声明，然后通过 @Param(参数名) 的装饰器取出来注入到 controller

  ```ts
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }
  ```

  ```html
  <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>

  <body>
    <script>
      async function urlParam() {
        const res = await axios.get('/person/1')
        console.log(res)
      }
      urlParam()
    </script>
  </body>
  ```

- query:query 是 url 中 ? 后的字符串，需要做 url encode。在 Nest 里，通过 @Query 装饰器来取：参数通过 params 指定，axios 会做 url encode，不需要自己做。

  ```ts
  @Controller('api/person')
  export class PersonController {
    @Get('find')
    query(@Query('name') name: string, @Query('age') age: number) {
      return `received: name=${name},age=${age}`
    }
  }
  ```

  ```html
  <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
  <body>
    <script>
      async function query() {
        const res = await axios.get('/api/person/find', {
          params: {
            name: '光',
            age: 20,
          },
        })
        console.log(res)
      }
      query()
    </script>
  </body>
  ```

- form urlencoded：直接用 form 表单提交数据就是这种，它和 query 字符串的方式的区别只是放在了 body 里，然后指定下 content-type 是 application/x-www-form-urlencoded。因为内容也是 query 字符串，所以也要用 `encodeURIComponent` 的 api 或者 `query-string` 库处理下。

  - 用 Nest 接收的话，使用 @Body 装饰器，Nest 会解析请求体，然后注入到 dto 中。
  - dto 是 data transfer object，就是用于封装传输的数据的对象：

  ```html
  <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
  <script src="https://unpkg.com/qs@6.10.2/dist/qs.js"></script>
  <body>
    <script>
      //用qs将表单数据encode
      //指定请求头的content-type为x-www-form-urlencoded
      async function formUrlEncoded() {
        const res = await axios.post(
          '/person',
          Qs.stringify({
            name: '光',
            age: 20,
          }),
          {
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
          }
        )
        console.log(res)
      }

      formUrlEncoded()
    </script>
  </body>
  ```

  ```ts
  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }
  ```

- formData:Nest 解析 form data 使用 `FilesInterceptor` 的拦截器，用 `@UseInterceptors` 装饰器启用，然后通过 `@UploadedFiles` 来取。非文件的内容，同样是通过 `@Body` 来取。

  - 这一步需要`npm i -D @types/multer`,引入相关类型声明。
  - 在代码中，`AnyFilesInterceptor` 的配置对象 `{ dest: 'uploads/' }` 指定了文件上传的目标目录。dest 是目标的意思，uploads/ 就是你的目标文件夹。所以，上传的文件会被保存到 'uploads/' 这个目录下。
  - 当有文件通过 POST 请求上传到 '/file' 这个路径时，AnyFilesInterceptor 拦截器会接管这个请求，处理上传的文件，并将文件保存到 'uploads/' 文件夹。

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
    </head>
    <body>
      <input id="fileInput" type="file" multiple />
      <script>
        const fileInput = document.querySelector('#fileInput')

        async function formData() {
          const data = new FormData()
          data.set('name', '光')
          data.set('age', 20)
          data.set('file1', fileInput.files[0])
          data.set('file2', fileInput.files[1])

          const res = await axios.post('/person/file', data, {
            headers: { 'content-type': 'multipart/form-data' },
          })
          console.log(res)
        }

        fileInput.onchange = formData
      </script>
    </body>
  </html>
  ```

  ```ts
  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
      dest: 'uploads/'
  }))
  body2(@Body() createPersonDto: CreatePersonDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`
  }
  ```

## 4、IOC是什么？什么用？

- 关系错综复杂
  - 后端系统中，会有很多对象：
    - Controller 对象：接收 http 请求，调用 Service，返回响应
    - Service 对象：实现业务逻辑
    - Repository 对象：实现对数据库的增删改查
    - 此外，还有数据库链接对象 DataSource，配置对象 Config 等等。
- 这就导致了创建这些对象是很复杂的，你要理清它们之间的依赖关系，哪个先创建哪个后创建。

  ```ts
  const config = new Config({ username: 'xxx', password: 'xxx'});

  const dataSource = new DataSource(config);

  const repository = new Repository(dataSource);

  const service = new Service(repository);

  const controller = new Controller(service);
  ```

- 要经过一系列的初始化之后才可以使用 Controller 对象。

- 而且像 config、dataSource、repository、service、controller 等这些对象不需要每次都 new 一个新的，一直用一个就可以，也就是保持单例。

- 解决这个痛点的方式就是 IOC（Inverse Of Control）。

- 之前我们手动创建和组装对象不是很麻烦么，我能不能在 class 上声明依赖了啥，然后让工具去分析我声明的依赖关系，根据先后顺序自动把对象创建好了，然后组装起来呢？(IOC的实现思路)
  - 它有一个放对象的容器，程序初始化的时候会扫描 class 上声明的依赖关系，然后把这些 class 都给 new 一个实例放到容器里。
  - 创建对象的时候，还会把它们依赖的对象注入进去，这样不就完成了自动的对象创建和组装么？
  - 这种依赖注入的方式叫做 Dependency Injection，简称 DI。
  - 而这种方案为什么叫 IOC 也很容易理解了，本来是手动 new 依赖对象，然后组装起来，现在是声明依赖了啥，等待被注入。
  - 从主动创建依赖到被动等待依赖注入，这就是 Inverse Of Control，反转控制。
  - 在 class 上声明依赖的方式，大家都选择了装饰器的方式（在 java 里这种语法叫做注解）。

- 那为什么只有controller使用的是@Controller.其他的使用的是@Injectable()?
  - 因为 Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明。
  - 而 Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。

- 然后在 AppModule 里引入：
  - 通过 @Module 声明模块，其中 controllers 是控制器，只能被注入。
  - providers 里可以被注入，也可以注入别的对象，比如这里的 AppService。
  - 那么 nest 就会从 AppModule 开始解析 class 上通过装饰器声明的依赖信息，自动创建和组装对象。

- 所以 AppController 只是声明了对 AppService 的依赖，就可以调用它的方法了：
  - nest 在背后自动做了对象创建和依赖注入的工作。
  - nest 还加了模块机制，可以把不同业务的 controller、service 等放到不同模块里。

- ps：当 import 别的模块后，那个模块 exports 的 provider 就可以在当前模块注入了。
  - 比如 OtherModule 里有 XxxService、YyyService 这两个 provider，导出了 XxxService。在你的例子中，YyyService没有被OtherModule模块导出，所以你不能在AppModule模块中使用YyyService。你只能在OtherModule模块内部使用YyyService。
  - 那当 AppModule 引用了 OtherModule 之后，就可以用它 exports 的 XxxService 来注入了。
  YyyService 没有在 exports 导出，只可以在模块内注入。

# 5、调试nest.js

- 调试node
  - 调试命令 node --inspect-brk index.js
  - 他自己起了一个ws服务
  - 我们用调试客户端连上，访问chrome://inspect/#devices，inspect
  - 可以看到代码在首行停止了，作用域和调用栈也在右边

## 5.1、nest start --debug

- 调试nestjs同理
  - nest start 有个 --debug 的选项，原理就是 node --inspect。
  - nest start --debug
  - 在项目里写好debugger的位置

## 5.2、VSCode Debugger

- vscode调试面板create launch.json file会创建.vscode/launch.json
- 然后输入 node，快速创建一个 node 调试配置
- 在 vscode 里调试代码，最爽的是可以边改代码边调试。比如你调试的过程中修改了代码，然后点击重新调试，就可以马上看到改动之后的效果
- VS Code 的 debugger 的Attach 模式是指将 debugger 附加到一个已经运行的进程上，而不是由 debugger 启动一个新的进程。在 Attach 模式下，你需要先手动启动你的应用程序，然后再在 VS Code 中启动 debugger，并附加到你的应用程序的进程上。这样，你就可以在 VS Code 中调试你的应用程序了。
- 先运行nest start --debug,选择nodejs的attach,点击运行

## 5.3、npm scripts(更好的方案)

- 这里 type 为 node 和 pwa-node 都行的，pwa-node 据说功能多一丢丢
- 同样是在vscode/launch.json，选择Node.js: Launch via npm
- runtimeExecutable代表执行什么命令，args 传参数。
- 要指定 console 为 integratedTerminal，也就是用 vscode 的内置终端来打印日志，不然默认会用 debug console 跑，那个没有颜色

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch via NPM",
      "request": "launch",
      "runtimeArgs": [
        "run",
        "start:dev"
      ],
      "runtimeExecutable": "npm",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "type": "node"
    }
  ]
}
```

## 5.4、logpoint

- 有的时候只想打印日志，不想断住，又不想加 console.log 污染代码，这时候可以用 logpoint

## 5.5、条件断点

## 5.6、异常断点

- 再就是异常断点，可以在没有处理的异常处自动断住
