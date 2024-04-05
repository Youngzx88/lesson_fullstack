# AOP

- 1. middleware

  - 中间件是 Express 里的概念，Nest 的底层是 Express，所以自然也可以使用中间件，但是做了进一步的细分，分为了全局中间件和路由中间件。
  - 全局中间件写在app上，express的写法就可以了
  - nest cli可以创建路由级的中间件:nest g middleware log --no-spec --flat

  ```js
  // middleware
  import { Injectable, NestMiddleware } from '@nestjs/common';

  @Injectable()
  export class LogMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
      console.log("before",req.url)
      next();
      console.log("after")
    }
  }
  // module
  export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('*')
  }
  }
  ```

- 2. guard
  - Guard 要实现 CanActivate 接口，实现 canActivate 方法，可以从 context 拿到请求的信息，然后做一些权限验证等处理之后返回 true 或者 false。
  - 然后在某个controller中启用

  ```js
  import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
  import { Observable } from 'rxjs';

  @Injectable()
  export class LoginGuard implements CanActivate {
    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      return true;
    }
  }
  ```

- 3. Interceptor
  - Interceptor 是拦截器的意思，可以在目标 Controller 方法前后加入一些逻辑
  - 涉及rxjs先不用了解太深
  - 可能会觉得 Interceptor 和 Middleware 差不多，其实是有区别的，主要在于参数的不同。interceptor 可以拿到调用的 controller 和 handler
  - 后面我们会在 controller 和 handler 上加一些 metadata，这种就只有 interceptor或者 guard 里可以取出来，middleware 不行。Interceptor 支持每个路由单独启用，只作用于某个 handler：

  ```js
  @Injectable()
    export class TimeInterceptor implements NestInterceptor {
      intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const startTime = Date.now();
        // return next.handle();
        return next.handle().pipe(
          tap(() => {
            console.log('time: ', Date.now() - startTime)
          })
        )
      }
  }
  ```

- 4. Pipe
  - Pipe 是管道的意思，用来对参数做一些检验和转换
  - Nest 内置了一些 Pipe，从名字就能看出它们的意思：
    - ValidationPipe
    - ParseIntPipe
    - ParseBoolPipe
    - ParseArrayPipe
    - ParseUUIDPipe
    - DefaultValuePipe
    - ParseEnumPipe
    - ParseFloatPipe
    - ParseFilePipe

  ```js
  @Injectable()
  export class ValidatePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
      console.log("🚀 ~ ValidatePipe ~ transform ~ metadata:", metadata)
      console.log("🚀 ~ ValidatePipe ~ transform ~ value:", value)
      if(Number.isNaN(parseInt(value))){
        throw new BadRequestException('请输入数字')
      }
      return value;
    }
  }
  //controller
  getHello(@Query('id' ,ValidatePipe) id): string {
    return this.appService.getHello();
  }
  ```

- 5. ExceptionFilter
  - 其实我们刚刚在 pipe 里抛的这个错误，能够返回 400 的响应，就是 Exception Filter 做的
  - filter先于pipe执行
  - Nest 内置了很多 http 相关的异常，都是 HttpException 的子类：
  - 可以提供更精准的报错
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

  ```js
  import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
  import { Response } from 'express';

  @Catch(BadRequestException)
  export class WarningFilter implements ExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {
      console.log("🚀 ~ WarningFilter ~ exception:", exception)

      const response: Response = host.switchToHttp().getResponse();

      response.status(400).json({
        statusCode: 400,
        message: 'test: ' + exception.message
      })
    }
  }
  ```

- 顺序
  - MiddleWare->Guard->(Interceptor)->Pipe->handler->(Interceptor)->Filter->Controller
