import { Controller, Get, Headers, Inject, Res, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller()
export class AppController {
  @Inject(JwtService)
  private jwtService: JwtService;
  constructor(private readonly appService: AppService) {}

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

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
