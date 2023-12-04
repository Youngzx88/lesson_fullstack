# 1、常用的 Nest CLI

- nest new project-name
- npm run start:dev(访问`http://localhost:3000/`)

- nest g controller cat
- nest g service cat
- nest generate resource xxx (快速创建一个 CRUD)

# 2、支持静态资源

- main.ts 是负责启动 Nest 的 ioc 容器的，调用下 useStaticAssets 来支持静态资源的请求：
- 注意要给 create 方法传入
  NestExpressApplication 的泛型参数才有 useStaticAssets 这些方法

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

## 4、IOC 是什么？什么用？

- 关系错综复杂
  - 后端系统中，会有很多对象：
    - Controller 对象：接收 http 请求，调用 Service，返回响应
    - Service 对象：实现业务逻辑
    - Repository 对象：实现对数据库的增删改查
    - 此外，还有数据库链接对象 DataSource，配置对象 Config 等等。
- 这就导致了创建这些对象是很复杂的，你要理清它们之间的依赖关系，哪个先创建哪个后创建。

  ```ts
  const config = new Config({ username: 'xxx', password: 'xxx' })

  const dataSource = new DataSource(config)

  const repository = new Repository(dataSource)

  const service = new Service(repository)

  const controller = new Controller(service)
  ```

- 要经过一系列的初始化之后才可以使用 Controller 对象。

- 而且像 config、dataSource、repository、service、controller 等这些对象不需要每次都 new 一个新的，一直用一个就可以，也就是保持单例。

- 解决这个痛点的方式就是 IOC（Inverse Of Control）。

- 之前我们手动创建和组装对象不是很麻烦么，我能不能在 class 上声明依赖了啥，然后让工具去分析我声明的依赖关系，根据先后顺序自动把对象创建好了，然后组装起来呢？(IOC 的实现思路)

  - 它有一个放对象的容器，程序初始化的时候会扫描 class 上声明的依赖关系，然后把这些 class 都给 new 一个实例放到容器里。
  - 创建对象的时候，还会把它们依赖的对象注入进去，这样不就完成了自动的对象创建和组装么？
  - 这种依赖注入的方式叫做 Dependency Injection，简称 DI。
  - 而这种方案为什么叫 IOC 也很容易理解了，本来是手动 new 依赖对象，然后组装起来，现在是声明依赖了啥，等待被注入。
  - 从主动创建依赖到被动等待依赖注入，这就是 Inverse Of Control，反转控制。
  - 在 class 上声明依赖的方式，大家都选择了装饰器的方式（在 java 里这种语法叫做注解）。

- 那为什么只有 controller 使用的是@Controller.其他的使用的是@Injectable()?

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
  - 比如 OtherModule 里有 XxxService、YyyService 这两个 provider，导出了 XxxService。在你的例子中，YyyService 没有被 OtherModule 模块导出，所以你不能在 AppModule 模块中使用 YyyService。你只能在 OtherModule 模块内部使用 YyyService。
  - 那当 AppModule 引用了 OtherModule 之后，就可以用它 exports 的 XxxService 来注入了。
    YyyService 没有在 exports 导出，只可以在模块内注入。

# 5、调试 nest.js

- 调试 node
  - 调试命令 node --inspect-brk index.js
  - 他自己起了一个 ws 服务
  - 我们用调试客户端连上，访问 chrome://inspect/#devices，inspect
  - 可以看到代码在首行停止了，作用域和调用栈也在右边

## 5.1、nest start --debug

- 调试 nestjs 同理
  - nest start 有个 --debug 的选项，原理就是 node --inspect。
  - nest start --debug
  - 在项目里写好 debugger 的位置

## 5.2、VSCode Debugger

- vscode 调试面板 create launch.json file 会创建.vscode/launch.json
- 然后输入 node，快速创建一个 node 调试配置
- 在 vscode 里调试代码，最爽的是可以边改代码边调试。比如你调试的过程中修改了代码，然后点击重新调试，就可以马上看到改动之后的效果
- VS Code 的 debugger 的 Attach 模式是指将 debugger 附加到一个已经运行的进程上，而不是由 debugger 启动一个新的进程。在 Attach 模式下，你需要先手动启动你的应用程序，然后再在 VS Code 中启动 debugger，并附加到你的应用程序的进程上。这样，你就可以在 VS Code 中调试你的应用程序了。
- 先运行 nest start --debug,选择 nodejs 的 attach,点击运行

## 5.3、npm scripts(更好的方案)

- 这里 type 为 node 和 pwa-node 都行的，pwa-node 据说功能多一丢丢
- 同样是在 vscode/launch.json，选择 Node.js: Launch via npm
- runtimeExecutable 代表执行什么命令，args 传参数。
- 要指定 console 为 integratedTerminal，也就是用 vscode 的内置终端来打印日志，不然默认会用 debug console 跑，那个没有颜色

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch via NPM",
      "request": "launch",
      "runtimeArgs": ["run", "start:dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"],
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

# 6、使用多种 Provider，灵活注入对象

- Provider是一个用于提供依赖项的特殊装饰器。它用于将类或值注册为可在整个应用程序中共享的提供者。

- Nest会将其注册到应用程序的依赖注入容器中。这意味着在整个应用程序中，可以通过依赖注入来访问这些提供者，以解决它们所提供的依赖项。

- nest 实现了 IOC，会从入口模块开始扫描，分析 Module 之间的引用关系，对象之间的依赖关系，自动把 provider 注入到目标对象

- provider 一般都是用 @Injectable 修饰的 class

- **注入方式**

  - 注意无论如何都要在 AppModule 中声明 APPService
    - 注入是为了让 nestJs 可以按顺序使用对应的 module
    - 而到底使用构造器注入到 controller 里
    - 还是用@Inject 手动注入 AppService 实际效果都一样
  - ==构造器注入==:

    ```ts
    constructor(private readonly appService: AppService) {}//用构造器注入appService
    // 在app.module
    @Module({
      providers: [AppService]
      // 或者这种写法
      // 通过 provide 指定注入的 token，通过 useClass 指定注入的对象的类，Nest 会自动对它做实例化再注入。
      providers: [{
        provide: AppService,
        useClass: AppService
      }]
    })

    ```

  - ==属性注入==

    ```ts
    // 如果不想用构造器注入，也可以属性注入
    @Inject(AppService)
    private readonly appService:AppService;
    ```

  - ==@Inject 指定注入的 token(可以是字符串)==

    ```ts
    @Module({
          provide: 'AppService111',
          useClass: AppService
        })


    constructor(@Inject('AppService111') private readonly appService: AppService) {}
    ```

  - 这几种注入方式还是使用构造器方便一点，省的写`@Inejct`

- **注入值(一切)**

  - 可以注入任何类型的值，包括对象、字符串、数字、函数等，而不仅仅是类的实例。这种特性非常强大，因为它允许你将任何类型的值注入到你的应用中，并在应用的任何地方使用这些值。
  - 使用 `provide` 指定 token，使用 `useValue` 指定==值==。

    ```ts
    //controller
    constructor(@Inject('person') private readonly person) {}
    // appModule
    {
      provide: 'person',
      useValue: {
      name: 'aaa',
      age: 10
      }
    }
    ```

  - ==动态注入==

    ```ts
    {
      provide: 'person2',
      useFactory: () {
        return {
          name: 'bbb',
          desc: 'ccc'
        }
      }
    }
    //controller
    @Inject('person2') private readonly person2{name:string,desc:string}
    //然后再方法里使用
    console.log(this.person2.name)//'bbb'
    //或者
    {
      provide: 'MyService',
      useFactory: (configService: ConfigService) => {
        const condition = configService.get('condition');
        if (condition) {
          return new MyService1();
        } else {
          return new MyService2();
        }
      },
      inject: [ConfigService],  // 列出工厂函数的依赖
    }
    ```

  - ==useFactory 支持异步==

    ```ts
    // Nest 会等拿到异步方法的结果之后再注入
    {
      provide: 'person5',
      async useFactory: () {
        await new Promise((resolve) => {
          setTimeout(resolve,3000)
        })
        return {
          name: 'bbb',
          desc: 'ccc'
        }
      }
    }
    ```

  - tips:provider 还可以通过 `useExisting` 来指定别名,然后就可以用新 token 来注入了

# 7、全局模块和生命周期

## 7.1、全局模块

- 模块导出 provider，另一个模块需要 imports 它才能用这些 provider。
  - 在这里我们要讲的是，a 模块可以导出 service 等 providers，这是为了更细小的颗粒度
  - 但是 b 模块需要直接引入 aModule
  - 这样就可以在 b 模块通过构造器或者属性注入 a 模块了
    `constructor(private readonly bbbService: BbbService,private readonly aaaService: AaaService) {}`
- 但如果这个模块被很多模块依赖了，那每次都要 imports 就很麻烦。

- 能不能设置成全局的，它导出的 provider 直接可用呢？

- 在 aaaModule 里面设置`@Global()`,b 模块就不用引入了

  ```ts
  //又可以在b模块愉快的使用a模块了
  //不过全局模块还是尽量少用，不然注入的很多 provider 都不知道来源，会降低代码的可维护性。

  @Global()
  @Module({
    controllers: [AaaController],
    providers: [AaaService],
    exports: [AaaService]
  })
  ```

## 7.2、生命周期

- Nest 在==启动==的时候，会递归解析 Module 依赖，扫描其中的 provider、controller，注入它的依赖
- 全部解析完后，会监听网络端口，开始处理请求。
  - bootStrapping starts
  - onModuleInit
  - onApplicationBootStrap
  - start Listeners
  - application is running
- 首先，递归初始化模块，会依次调用模块内的 controller、provider 的 onModuleInit 方法，然后再调用 module 的 onModuleInit 方法
- 全部初始化完之后，再依次调用模块内的 controller、provider 的 onApplicationBootstrap 方法，然后调用 module 的 onApplicationBootstrap 方法
- nest 提供了两个 interface:

  - `onModuleInit`
  - `onApplicationBootstrap`
  - 分别在两个 controller 里实现他们

    ```ts
    export class DddController implements OnModuleInit, OnApplicationBootstrap {
      constructor(private readonly dddService: DddService) {}

      onModuleInit() {
        console.log('cccOnModuleInit')
      }

      onApplicationBootstrap() {
        console.log('ccconApplicationBootstrap')
      }
    }
    //cccOnModuleInit
    //cccOnModuleInit
    //ccconApplicationBootstrap
    //ccconApplicationBootstrap
    ```

- 在销毁的时候也有生命周期
  - onModuleDestroy
  - beforeApplicationShutdown
  - stop listeners
  - onApplicationShutdown
  - Process exits
- beforeApplicationShutdown 是可以拿到 signal 系统信号的，比如 SIGTERM。

- 这些终止信号是别的进程传过来的，让它做一些销毁的事情，比如用 k8s 管理容器的时候，可以通过这个信号来通知它。

- onApplicationShutdown 一般用于关闭数据库连接

# 8、AOP

- MVC 是 Model View Controller 的简写。MVC 架构下，请求会先发送给 Controller，由它调度 Model 层的 Service 来完成业务逻辑，然后返回对应的 View。
- 在这个流程中，Nest 还提供了 AOP （Aspect Oriented Programming）的能力，也就是面向切面编程的能力。
- 如果想在这个 MVC 调用链路里加入一些通用逻辑该怎么加呢？比如日志记录、权限控制、异常处理等。
  - 容易想到的是直接改造 Controller 层代码，加入这段逻辑。不优雅，因为这些通用的逻辑侵入到了业务逻辑里面。能不能透明的给这些业务逻辑加上日志、权限等处理呢？
- 可以在调用 Controller 之前和之后加入一个执行通用逻辑的阶段，是不是就和切了一刀一样？这样的横向扩展点就叫做切面，这种透明的加入一些切面逻辑的编程方式就叫做 AOP （面向切面编程）。
- 其实 Express 的中间件的洋葱模型也是一种 AOP 的实现，因为你可以透明的在外面包一层，加入一些逻辑，内层感知不到。
- 而 Nest 实现 AOP 的方式更多，一共有五种，包括 `Middleware`、`Guard`、`Pipe`、`Interceptor`、`ExceptionFilter`、

## 8.1、middleware

- Nest 的底层是 Express，所以自然也可以使用中间件，但是做了进一步的细分，分为了全局中间件和路由中间件
- 路由中间件则是针对某个路由来说的，范围更小一些
- 在 Nest.js 中，中间件是在模块级别注册的。configure()方法是 NestModule 接口的一部分，它提供了一个设置模块中间件的地方。
- configure()方法接收一个 MiddlewareConsumer 参数，你可以使用它来应用和配置你的中间件。

  ```ts
  // 新建一个自己的middleWare类，实现nestMiddleWare
  @Injectable()
  export class LoggerMiddleWare implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void) {
      console.log('Request...', req.method, req.originalUrl)
      next()
    }
  }
  // 在自己的模块注册这个中间件，在模块的configure()方法中注册它。
  // 在这个例子中，LoggerMiddleware被注册为对所有路由（'*'）生效。
  @Module({
    imports: [PersonModule, CatsModule],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleWare).forRoutes('*')
    }
  }
  // 访问路由就能看到效果了
  ```

## 8.2、guard

- Guard 是路由守卫的意思，可以用于在调用某个 Controller 之前判断权限，返回 true 或者 false 来决定是否放行

  ```ts
  //Guard 要实现 CanActivate 接口，实现 canActivate 方法，可以从 context 拿到请求的信息，然后做一些权限验证等处理之后返回 true 或者 false。
  @Injectable()
  export class RoleGuard implements CanActivate {
    canActive(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      return true
    }
  }
  //通过 @Injectable 装饰器加到 IOC 容器中，然后就可以在某个 Controller 启用了
  //某个controller注入路由守卫的规则
  @UseGuard(RolesGuard)
  ```

- Controller 本身不需要做啥修改，却透明的加上了权限判断的逻辑，这就是 AOP 架构的好处。

- 而且，就像 Middleware 支持全局级别和路由级别一样，Guard 也可以全局启用`app.useGlobalGuards(new RoleGuard())`

## 8.3、Interceptor

- Interceptor 是拦截器的意思，可以在目标 Controller 方法前后加入一些逻辑
- Interceptor 要实现 NestInterceptor 接口，实现 intercept 方法，调用 next.handle() 就会调用目标 Controller，可以在之前和之后加入一些处理逻辑
- Controller 之前之后的处理逻辑可能是异步的。Nest 里通过 rxjs 来组织它们，所以可以使用 rxjs 的各种 operator

  ```ts
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      console.log('Before...')

      return next.handle().pipe(tap(() => console.log('After...')))
    }
  }
  ```

- Interceptor 支持每个路由单独启用，只作用于某个 controller，也同样支持全局启用，作用于全部 controller

## 8.4、Pipe

- Pipe 是管道的意思，用来对参数做一些检验和转换
- 再数据从客户端到路由之前对数据洗一遍
- Pipe 要实现 PipeTransform 接口，实现 transform 方法，里面可以对传入的参数值 value 做参数验证，比如格式、类型是否正确，不正确就抛出异常。也可以做转换，返回转换后的值

  - ValidationPipe
  - ParseIntPipe
  - ParseBoolPipe
  - ParseArrayPipe
  - ParseUUIDPipe
  - DefaultValuePipe
  - ParseEnumPipe
  - ParseFloatPipe
  - ParseFilePipe

  ```ts
  @Injectable()
  export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: Argumentdata) {
      return value
    }
  }
  ```

- 同样，Pipe 可以只对某个参数生效，某个路由生效，也可以对每个路由都生效

  ```ts
  @UsePipes(validationPipe)
  async create(@Body() createCatDto: CreateCatDto){
    this.catsService.create(createCatDto)
  }
  // 全局的方案，在appmodule里
  app.useGlobalPipes(new ValidationPipe())
  ```

## 8.5、ExceptionFilter

- ExceptionFilter 可以对抛出的异常做处理，返回对应的响应
- 首先要实现`ExceptionFilter 接口`，实现 catch 方法，就可以拦截异常了，但是要拦截什么异常还需要用 `@Catch` 装饰器来声明，拦截了异常之后，可以返回对应的响应，给用户更友好的提示。
- Nest 内置了很多 http 相关的异常，都是 HttpException 的子类：
  - BadRequestException
  - UnauthorizedException
  - NotFoundException
  - ForbiddenException
  - NotAcceptableException
  - RequestTimeoutException
  - ConflictException
  - GoneException
  - PayloadTooLargeException
  - UnsupportedMediaTypeException
  - UnprocessableException
  - InternalServerErrorException
  - NotImplementedException
  - BadGatewayException
  - ServiceUnavailableException
  - GatewayTimeoutException
- 同样，ExceptionFilter 也可以选择全局生效或者某个路由生效`@UseFilters(new HttpExceptionFilter())`,`app.useGlobalFilters(new HttpExceptionFilter())`

## 8.6、几种 AOP 机制的顺序

- 常用命令

  ```bash
  # 创建项目：
  nest new project-name

  # 创建模块：
  nest generate module module-name

  # 创建控制器：
  nest generate controller controller-name

  # 创建服务：
  nest generate service service-name

  # 创建拦截器：
  nest generate interceptor interceptor-name

  # 创建管道：
  nest generate pipe pipe-name

  # 创建中间件：
  nest generate middleware middleware-name

  # 创建过滤器：
  nest generate filter filter-name
  ```

- 进入路由的时候，会先调用 Guard，判断是否有权限等，如果没有权限，这里就抛异常了
- 抛出的 ForbiddenException 会被 ExceptionFilter 处理，返回 403 状态码。
- 如果有权限，就会调用到拦截器，拦截器组织了一个链条，一个个的调用，最后会调用的 controller 的方法
- 调用 controller 方法之前，会使用 pipe 对参数做处理

- 补充

  - @SetMetadata()是一个装饰器，它允许你将一些元数据附加到路由处理程序或者类上。这些元数据可以在后续的管道、守卫、拦截器或者过滤器中被访问和使用。

    ```ts
    //在这个例子中，我们定义了一个新的装饰器@Roles()，它使用@SetMetadata()来将一些角色附加到路由处理程序上
    import { SetMetadata } from '@nestjs/common';

    export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
    //例如这样
    @Get('dashboard')
    @Roles('admin')
    getDashboard() {
      //...
    }
    //在这个例子中，getDashboard()方法需要admin角色才能访问。
    //然后，可以在一个守卫中检查这些角色：
    //Reflector是Nest.js提供的一个辅助类，用于获取元数据。你可以通过Reflector来访问和操作装饰器提供的元数据。
    //在Nest.js中，你可以使用装饰器来附加元数据到类、方法、属性或参数。然后，你可以使用Reflector来在运行时访问这些元数据。
    //例如，你可以使用Reflector来获取路由处理程序或类上的自定义元数据：
    import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
    import { Reflector } from '@nestjs/core';

    @Injectable()
    export class RolesGuard implements CanActivate {
      constructor(private reflector: Reflector) {}

      canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!roles) {
          // 如果路由上没有定义 'roles' 元数据，则允许所有请求
          return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        // 检查用户是否具有路由所需的任何角色
        const hasRole = () => roles.some(role => user.roles?.includes(role));

        return user && hasRole();
      }
    }
    ```

  - @ip 拿到 ip
  - @Session 拿到 session(需要 npm install express-session)
  - @HostParam 用于取域名部分的参数：
  - @Req 请求对象
  - @Response：当你注入 response 对象之后，服务器会一直没有响应，因为这时候 Nest 就不会再把 handler 返回值作为响应内容了，可以自己 return
  - 除了注入 @Res 不会返回响应外，注入 @Next 也不会
  - 当你有两个 handler 来处理同一个路由的时候，可以在第一个 handler 里注入 next，调用它来把请求转发到第二个 handler
  - Nest 不会处理注入 @Next 的 handler 的返回值。
  - handler 默认返回的是 200 的状态码，你可以通过 @HttpCode 修改它：
  - @Redirect 装饰器来指定路由重定向的 url
  - @Render 还可以给返回的响应内容指定==渲染引擎==(后面了解)

# 9、自定义装饰器

- 之前的装饰器

  ```ts
  @Controller()
  export class AppController {
    constructor(private readonly appService: AppService) {}
    @UseInterceptors(new LoggerInterceptor())
    @Get()
    @SetMetadata('aaa', 'admin')
    getHello(): string {
      return this.appService.getHello()
    }
  }
  // 创建一个Guard nest g guard routeGuard --flat --no-spec
  // guard 里使用 reflector 来取 metadata
  @Injectable()
  export class RouteGuardGuard implements CanActivate {
    @Inject(Reflector)
    private readonly reflector: Reflector
    canActivate(
      context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
      if (this.reflector.get('aaa', context.getHandler())) {
        console.log(1)
        return true
      } else {
        console.log(2)
        return false
      }
    }
  }
  ```

- 但是不同 metadata 有不同的业务场景，有的是用于权限的，有的是用于其他场景的。但现在都用 @SetMetadata 来设置太原始了。
- `nest g decorator customDecoration --flat`

  ```ts
  // 自定义的decorator
  export const CustomDecoration = (...args: string[]) =>
    SetMetadata('custom-decoration', args)
  // controller里使用
  @CustomDecoration('admin')
  @Injectable()
  // 路由守卫这么写
  export class RouteGuardGuard implements CanActivate {
    @Inject(Reflector)
    private readonly reflector: Reflector
    canActivate(
      context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
      if (this.reflector.get('custom-decoration', context.getHandler())) {
        console.log(1)
        return true
      } else {
        console.log(2)
        return false
      }
    }
  }
  // 当我们访问对应的路由会打印1
  ```

- 自定义整合装饰器

  - 在自定义装饰器里通过 applyDecorators 调用其他装饰器。

    ```ts
    import { applyDecorators, Get, UseGuards } from '@nestjs/common'
    import { Aaa } from './aaa.decorator'
    import { AaaGuard } from './aaa.guard'

    export function Bbb(path, role) {
      return applyDecorators(Get(path), Aaa(role), UseGuards(AaaGuard))
    }
    ```

- 此外，也可以自定义参数装饰器

  ```ts
  import { createParamDecorator, ExecutionContext } from '@nestjs/common';

  export const Ccc = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
      return 'ccc';
    },
  );
  //controller
  @Get('hello4')
  getHello4(@Ccc() c){
    return c;
  }
  // ccc
  ```

- 尝试自定义装饰器取到请求头

  ```ts
  @Get()
    findAll(@MyHeaders('accept') headers1,@Headers('accept') headers2) {
      console.log(
        "headers1",headers1
      )
      console.log(
        "headers2",headers2
      )
      return this.catsService.findAll();
    }
  //自定义获取请求头
  import { ExecutionContext, createParamDecorator } from "@nestjs/common";
  export const MyHeaders = createParamDecorator((key: string,ctx: ExecutionContext)=>{
    const request:Request = ctx.switchToHttp().getRequest();
    return key ? request.headers[key] : request.headers
  })
  // 拿到headers里面的某个key，返回
  ```

# 10、切换不同上下文(ExecutionContext)

- Nest 支持创建 HTTP 服务、WebSocket 服务，还有基于 TCP 通信的微服务。这些不同类型的服务都需要 Guard、Interceptor、Exception Filter 功能。

- 不同类型的服务它能拿到的参数是不同的，比如 http 服务可以拿到 request、response 对象，而 ws 服务就没有，如何让 Guard、Interceptor、Exception Filter 跨多种上下文复用呢？

- Nest 的解决方法是 ==ArgumentHost== 和 ==ExecutionContext== 类。

## 10.1、ArgumentHost

- 创建一个自定义异常和过滤器拦截这个异常

  ```ts
  // 异常
  import { NestExpressApplication } from "@nestjs/platform-express";

  export class AaaException{
    constructor(public aaa:string,public bbb: string){

    }
  }
  // 过滤器
  @Catch(AaaException)
  export class ChangecontextFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
      // catch到的第一个参数是异常对象
      // 第二个参数是
      console.log(exception,host)
      // host.
    }
  }

  // 实现
  @Get()
  @UseFilters(ChangecontextFilter)
  findAll() {
    throw new AaaException('aaa','bbb')
  }
  // 结果
  // AaaException { aaa: 'aaa', bbb: 'bbb' } ExecutionContextHost { ... }
  ```

- host.getArgs 方法就是取出当前上下文的 request、response、next 参数，因为当前上下文是 http。
- host.getArgByIndex 方法是根据下标取参数，这种按照下标取参数的写法不太建议用，因为不同上下文参数不同，这样写就没法复用到 ws、tcp 等上下文了。
- 如果是 ws、基于 tcp 的微服务等上下文，就分别调用 host.swtichToWs、host.switchToRpc 方法。
- 这样，就可以在 filter 里处理多个上下文的逻辑，跨上下文复用 filter 了。

  ```ts
  import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
  import { Response } from 'express'
  import { AaaException } from './AaaException'

  @Catch(AaaException)
  export class AaaFilter implements ExceptionFilter {
    catch(exception: AaaException, host: ArgumentsHost) {
      if (host.getType() === 'http') {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        response.status(500).json({
          aaa: exception.aaa,
          bbb: exception.bbb,
        })
      } else if (host.getType() === 'ws') {
      } else if (host.getType() === 'rpc') {
      }
    }
  }
  ```

## 10.2、ExecutionContext

- 那 guard 和 interceptor 里是用什么呢？

  - guard，传入的是 ExecutionContext，ExecutionContext 是 ArgumentHost 的子类，扩展了 getClass、getHandler 方法。
  - 调用下 context.getClass 和 getHandler：会发现这俩分别是要调用的 controller 的 class 以及要调用的方法。
    - 因为 Guard、Interceptor 的逻辑可能要根据目标 class、handler 有没有某些装饰而决定怎么处理。
    - 比如权限验证的时候，我们会先定义几个角色，然后在 handler 上添加这个装饰器，参数为 admin，也就是给这个 handler 添加了一个 roles 为 admin 的 metadata。
    - 这样在 Guard 里就可以根据这个 metadata 决定是否放行了(执行 context.getHandler)

```js
// 自定义Role
import { SetMetadata } from '@nestjs/common';
export enum Roles {
  user= 'user',
  gm= 'gm'
}
export const Role = (...args: Roles[]) => SetMetadata('role', args);

// AaaGuard
@Injectable()
export class AaaGuard implements CanActivate {
  // 通过Reflector拿到Guard对应的装饰器内容
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<Roles[]>('role', context.getHandler());
    console.log("🚀 ~ file: aaa.guard.ts:14 ~ AaaGuard ~ requiredRoles:", requiredRoles)
    return false;
  }
}

```

- 同样，在 interceptor 里也有这个：ExecutionContext

## 10.3、总结

- 为了让 Filter、Guard、Exception Filter 支持 http、ws、rpc 等场景下复用，Nest 设计了 ArgumentHost 和 ExecutionContext 类。

- ArgumentHost 可以通过 getArgs 或者 getArgByIndex 拿到上下文参数，比如 request、response、next 等。

- 更推荐的方式是根据 getType 的结果分别 switchToHttp、switchToWs、swtichToRpc，然后再取对应的 argument。

- 而 ExecutionContext 还提供 getClass、getHandler 方法，可以结合 reflector 来取出其中的 metadata。

- 在写 Filter、Guard、Exception Filter 的时候，是需要用到这些 api 的。

# 11、Nest 是如何实现装饰器注入的？

## 11.1、 Nest 最核心的一些 api

- Reflect 的 metadata 的 api
- 操作对象的属性、方法、构造器的一些 api

  - Reflect.get 是获取对象属性值
  - Reflect.set 是设置对象属性值
  - Reflect.has 是判断对象属性是否存在
  - Reflect.apply

    ```ts
    function greet(name) {
      return `Hello, ${name}!`
    }

    const thisArg = { greeting: 'Hi' }
    const args = ['John']

    // 使用 Reflect.apply 调用函数
    const result = Reflect.apply(greet, thisArg, args)
    console.log(result) // 输出: "Hello, John!"

    // 等价于以下代码
    const result2 = greet.apply(thisArg, args)
    console.log(result2) // 输出: "Hello, John!"
    ```

- nest 的 api：

  - `Reflect.defineMetadata(metadataKey, metadataValue, target);`
  - `Reflect.defineMetadata(metadataKey, metadataValue, target, propertyKey);`
  - `let result = Reflect.getMetadata(metadataKey, target);`
  - `let result = Reflect.getMetadata(metadataKey, target, propertyKey);`
  - 元数据存在类或者对象上，如果给类或者类的静态属性添加元数据，那就保存在类上，如果给实例属性添加元数据，那就保存在对象上，用类似 `[[metadata]]` 的 key 来存的。
  - 支持装饰器的方式

    ```ts
    @Reflect.metadata(metadataKey, metadataValue)
    class C {
      @Reflect.metadata(metadataKey, metadataValue)
      method() {}
    }
    ```

  - Nest 的实现原理就是通过装饰器给 class 或者对象添加元数据，然后初始化的时候取出这些元数据，进行依赖的分析，然后创建对应的实例对象就可以了。

## 11.2、疑问

- 依赖的扫描可以通过 metadata 数据，但是创建的对象需要知道构造器的参数，现在并没有添加这部分 metadata 数据呀
- 比如 CatsController 依赖了 CatsService，但是并没有添加 metadata
- 这就不得不提到 TypeScript 的优势了，TypeScript 支持编译时自动添加一些 metadata 数据

  ```ts
  import 'reflect-metadata'

  class Guang {
    @Reflect.metadata('名字', '光光')
    public say(a: number): string {
      return '加油鸭'
    }
  }
  // 按理说我们只添加了一个元数据，生成的代码也确实是这样的
  // 但是呢，ts 有一个编译选项叫做 emitDecoratorMetadata，开启它就会自动添加一些元数据
  // 所以说，只要开启了这个编译选项，ts 生成的代码会自动添加一些元数据。
  // 然后创建对象的时候就可以通过 design:paramtypes 来拿到构造器参数的类型了，那不就知道怎么注入依赖了么？
  ```

- 拿到 Class 上的 metaData：`context.getClass()`
- 拿到方法上的 metaData：`context.getHandler()`

# 12、解决 Module 和 Provider 的循环依赖

- aaaModule
- bbbModule
- aaa import 了 bbb，bbb 又 import 了 aaa
- 跑服务的时候会报错，意思是在解析 BbbModule 的时候，它的第一个 imports 是 undefined。
  - 这有两个原因，一个是这个值本来就是 undefined，第二个就是形成了循环依赖。
  - 因为 Nest 创建 Module 的时候会递归创建它的依赖，而它的依赖又依赖了这个 Module，所以没法创建成功，拿到的就是 undefined。
- 其实我们可以先单独创建这两个 Module，然后再让两者关联起来：==forwardRef==

  ```ts
  //aaaModule
  @Module({
    imports: [
      forwardRef(() => BbbModule)
    ]
  })
  // nest 会单独创建两个 Module，之后再把 Module 的引用转发过去，也就是 forwardRef 的含义。
  ```

# 13、动态模块

## 13.1、动态模块基础

- 有的时候我们希望 import 的时候给这个模块传一些参数，动态生成模块的内容
- 我们给 DynamicTestController 加一个 register 的静态方法，返回模块定义的对象。
- 而且我们还可以把参数传入的 options 对象作为一个新的 provider。

  ```ts
  import { DynamicModule, Module } from '@nestjs/common'
  import { DynamicTestService } from './dynamic-test.service'
  import { DynamicTestController } from './dynamic-test.controller'

  @Module({
    controllers: [DynamicTestController],
    providers: [DynamicTestService],
  })
  export class DynamicTestModule {
    static register(options: Record<string, any>): DynamicModule {
      return {
        module: DynamicTestModule,
        controllers: [DynamicTestController],
        providers: [
          {
            provide: 'CONFIG_OPTIONS',
            useValue: options,
          },
          DynamicTestService,
        ],
        exports: [],
      }
    }
  }
  // import 的时候就得这样用了，通过 register 方法传入参数，返回值就是模块定义
  @Module({
    imports: [DynamicTestModule.register({
      a: '1',
      b: '2'
    })],
    controllers: [AppController],
    providers: [AppService],
  })
  ```

- 这里的 register 方法其实叫啥都行，但 nest 约定了 3 种方法名：
  - register:用一次模块传一次配置，比如这次调用是 BbbModule.register({aaa:1})，下一次就是 BbbModule.register({aaa:2}) 了
  - forRoot:配置一次模块用多次，比如 XxxModule.forRoot({}) 一次，之后就一直用这个 Module，一般在 AppModule 里 import
  - forFeature:用了 forRoot 固定了整体模块，用于局部的时候，可能需要再传一些配置，比如用 forRoot 指定了数据库链接信息，再用 forFeature 指定某个模块访问哪个数据库和表

## 13.2、动态模块使用场景

- @nestjs/typeorm 的动态模块：forRoot 传入配置，动态产生 provider 和 exports，返回模块定义。
  - 比如传入数据库的配置文件(register)
  - 用 forRoot 去配置具体连接哪个表
- forRootAsync，区别就是可以用 async 的 useFactory 动态产生 provider，比如异步请求别的服务拿到配置返回，作为 options。
- forFeature 则是传入局部的一些配置，来动态产生局部用的模块：

## 13.3、其他方式生产动态模块

- 用 ConfigurableModuleBuilder 生成一个 class，这个 class 里就带了 register、registerAsync 方法。
- 返回的 ConfigurableModuleClass、MODULE_OPTIONS_TOKEN 分别是生成的 class 、options 对象的 token。然后 Module 继承它
- 那现在如何在 Module 内注入这个 options 呢？ 就用 build class 的时候返回的 token

# 14、nestJs 通过 typeorm 连接数据库

- nest new nest-typeorm -p pnpm
- nest g resource user
- pnpm install --save @nestjs/typeorm typeorm mysql2

1. 先在 app.module.ts 注册 typeorm
2. 编写对应的实体类
3. 在实体类中注入 manager 以操作数据库

```ts
@InjectEntityManager()
private manager:EntityManager
```

4. 编写 service 方法实现效果

```ts
// app.module.ts
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/entities/user'

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'typeorm-nest',
      entities: [User],
      synchronize: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// users.service.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'aaa_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    name: 'aaa_name',
    length: 50,
  })
  name: string
}

// 然后是增删改查，我们在service中可以注入 EntityManager

@Injectable()
export class UserService {
  @InjectEntityManager()
  private manager: EntityManager

  create(createUserDto: CreateUserDto) {
    return this.manager.save(User, createUserDto)
  }

  findAll() {
    return this.manager.find(User)
  }

  findOne(id: number) {
    return this.manager.findOne(User, {
      where: { id },
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.manager.save(User, {
      id: id,
      ...updateUserDto,
    })
  }

  remove(id: number) {
    this.manager.delete(User, id)
  }
}
```

# 15、nest + redis

- 通过 useFactory 动态创建 provider，token 为 REDIS_CLIENT

```ts
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { createClient } from 'redis'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        })
        await client.connect()
        return client
      },
    },
  ],
})
export class AppModule {}
```

- 然后注入到 service 里用就好了（token 注入）

```ts
@Injectable()
export class AppService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType

  async getHello() {
    const value = await this.redisClient.keys('*')
    console.log('value', value)
    return 'Hello World!'
  }
}
```

# 16、nest 实现 Cookie-Session/JWT

## 16.1、Cookie-Session

- nest new xxx -p pnpm
- pnpm install express-session @types/express-session
- main.ts 启用 express-session

  ```ts
  // 使用 express-session 中间件，指定加密的密钥 secret。

  // resave 为 true 是每次访问都会更新 session，不管有没有修改 session 的内容，而 false 是只有 session 内容变了才会去更新 session。

  // saveUninitalized 设置为 true 是不管是否设置 session，都会初始化一个空的 session 对象。比如你没有登录的时候，也会初始化一个 session 对象，这个设置为 false 就好。

  import { NestFactory } from '@nestjs/core'
  import { AppModule } from './app.module'
  import * as session from 'express-session'

  async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(
      session({
        secret: 'youngzx',
        resave: false,
        saveUninitialized: false,
      })
    )
    await app.listen(3000)
  }
  bootstrap()
  ```

- 然后在 controller 里就可以注入 session 对象：

  ```ts
  @Get('sss')
  sss(@Session() session) {
      console.log(session)
      session.count = session.count ? session.count + 1 : 1;
      return session.count;
  }
  ```

- 每次请求会带一个 cookie，name 为 connect.sid 是 express 自动设置的 name

  ```ts
  Session {
    cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
    count: 3
  }
  ```

## 16.2、JWT

- pnpm install @nestjs/jwt
- appmodule 注入

  - 指定 secret，也就是加密 jwt 的密钥，还有 token 过期时间 expiresIn，设置 7 天。

  ```ts
  @Module({
    imports: [
      JwtModule.registerAsync({
        async useFactory(){
          await 111;
          return {
            secret: 'youngzx',
            signOptions: {
              expiresIn: '7d'
            }
          }
        }
      })
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  ```

- 然后添加一个 handler

  ```ts
    // 响应的header返回了token
    // 这里使用 jwtService.sign 来生成一个 jwt token，放到 response header 里。
    // 因为注入 response 对象之后，默认不会把返回值作为 body 了，需要设置 passthrough 为 true 才可以。
    // 后面的请求需要带上这个 token，在服务端取出来，然后 +1 之后再放回去
    @Get('ttt')
    ttt(
      @Headers('authorization') authorization: string,
      @Res({ passthrough: true }) response: Response,
    ) {
      if (authorization) {
        try {
          const token = authorization.split(' ')[1];
          const data = this.jwtService.verify(token);
          const newToken = this.jwtService.sign({
            count: data.count + 1,
          });
          response.setHeader('token', newToken);
          return data.count + 1;
        } catch (e) {
          console.log(e);
          throw new UnauthorizedException();
        }
      } else {
        const newToken = this.jwtService.sign({
          count: 1,
        });

        response.setHeader('token', newToken);
        return 1;
      }
    }
  ```

- 是如何区分服务端生成的 token 和用户传来的 token 是一致的？

  - 服务端在输入 jwt 的时候携带了一个 secret，每次生成 jwt 的时候是将 header 和 payload 加密，然后和 secret 拼接，再进行加密，这样就保证了每次加密后的结果都是一样的。
  - 所以 verify 的时候只需要用 secret 再拼一次，一致即可

  ```ts
  const newToken = this.jwtService.sign({
    count: 1,
  })
  const data = this.jwtService.verify(token)
  const newToken = this.jwtService.sign({
    count: data.count + 1,
  })
  ```

# 17、综合案例登录注册:typeorm/jwt

- 初始化一个 nest 项目
- 安装 typeorm，@nestjs/typeorm,mysql2，@nestjs/jwt
- 注入 typeorm，注入 jwt
- 创建 user 表，创建 user 实体,跑起来建表
- 然后我们在 UserModule 引入 TypeOrm.forFeature 动态模块，传入 User 的 entity。

  ```js
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  ```

- user.service 注入 User

  ```ts
  @Inject(User)
  private userRepository: Repository<User>;
  ```

- 新增注册登录的 controller
- 实现登录注册的逻辑，注意 jwt 的返回是在 controller 中实现的
- 实现一个路由守卫用来校验 jwt
- 使用 ValidationPipe + class-validator 进行表单参数的校验`pnpm i class-validator class-transformer`
  - 给 user/login 和 user/register 添加 ValidationPipe
- 注意事项:设置跨域/设置暴露 jwt 的相应头

  ```ts
  // 设置跨域选项
  const corsOptions: CorsOptions = {
    origin: true, // 允许所有来源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // 允许的请求方法
    allowedHeaders: 'Content-Type,Authorization', // 允许的请求头
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }
  app.enableCors(corsOptions)
  app.enableCors({
    exposedHeaders: 'token', // 在这里列出要暴露的自定义头部信息
  })
  ```

# 18、nest 实现 ACL 权限控制

- 有的接口不一定需要登录，还需要鉴权
- 身份校验 Jwt 之后还需要做一次鉴权校验
- 存储一张访问控制表:Access Control list
- 用户表 User，权限表 Permission，用户表和权限表的关联表 ManyToMany 生成中间的 ACL 表
- 使用 session 校验登录权限
- 创建两个 resource：aaa/bbb：用户东东有 aaa 的增删改查权限，而用户光光拥有 bbb 的增删改查权限。
- 先添加一个 LoginGuard，限制只有登录状态才可以访问这些接口
- 然后添加一个 PermissionGuard，限制只有拥有某个权限才可以访问这些接口
- 因为 PermissionGuard 里需要用到 UserService 来查询数据库，所以把它移动到 UserModule 里
- 使用 setMeta 明需要 query_aaa 的 permission，然后在 PermissionGuard 里通过 reflector 取出来
- 但是每次触发都是三个表的连表查询，使用 redis 优化
- 安装`nest g module redis,nest g service redis --no-spec`
- redisModule 增加 redis 的 provider

```ts
import { Global, Module } from '@nestjs/common'
import { createClient } from 'redis'
import { RedisService } from './redis.service'

@Global()
@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          socket: {
            host: 'localhost',
            port: 6379,
          },
        })
        await client.connect()
        return client
      },
    },
  ],
  exports: [RedisService],
})
export class RedisModule {}
```

- 写好一些redis的方法

```ts
import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {

    @Inject('REDIS_CLIENT') 
    private redisClient: RedisClientType

    async listGet(key: string) {
        return await this.redisClient.lRange(key, 0, -1);
    }

    async listSet(key: string, list: Array<string>, ttl?: number) {
        for(let i = 0; i < list.length;i++) {
            await this.redisClient.lPush(key, list[i]);
        }
        if(ttl) {
            await this.redisClient.expire(key, ttl);
        }
    }
}

```

- 然后在permissionGuard里注入一下

```ts
import { RedisService } from './../redis/redis.service';
import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { UserService } from './user.service';

@Injectable()
export class PermissionGuard implements CanActivate {

  @Inject(UserService) 
  private userService: UserService;

  @Inject(Reflector)
  private reflector: Reflector;

  @Inject(RedisService)
  private redisService: RedisService;

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const user = request.session.user;
    if(!user) {
      throw new UnauthorizedException('用户未登录');
    }

    let permissions = await this.redisService.listGet(`user_${user.username}_permissions`); 

    if(permissions.length === 0) {
      const foundUser = await this.userService.findByUsername(user.username);
      permissions = foundUser.permission.map(item => item.name);

      this.redisService.listSet(`user_${user.username}_permissions`, permissions, 60 * 30)
    }

    const permission = this.reflector.get('permission', context.getHandler());

    if(permissions.some(item => item === permission)) {
      return true;
    } else {
      throw new UnauthorizedException('没有权限访问该接口');
    }
  }
}

```

- 注意：在 service 注入的时候可以选择使用什么方式

  ```ts
  //1. 注入User实体的repository:自己写sql
  @InjectRepository(User)
  private userRepository: Repository<User>;
  async createUser(name: string, age: number) {
    const query = `INSERT INTO user (name, age) VALUES (?, ?)`;
    await this.entityManager.query(query, [name, age]);
  }

  //2. 注入EntityManager实例:使用typeorm的方法
  @InjectEntityManager()
  private entityManager: EntityManager,
  async createUser(name: string, age: number) {
    const user = this.userRepository.create({ name, age });
    await this.userRepository.save(user);
  }
  ```

# 19、nest实现 RBAC 权限控制

- RBAC 区别于 ACL 是基于角色的访问控制
- 不给用户分配具体的权限，而是分配角色
- 每个角色能实现什么权限是写在角色中的
