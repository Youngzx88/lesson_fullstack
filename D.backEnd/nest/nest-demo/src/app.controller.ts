import { Controller, Get, Inject, SetMetadata, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service'
import { LoggerInterceptor } from './interceptor/logger.interceptor';
import { RouteGuardGuard } from './route-guard.guard';
import { CustomDecoration } from './custom-decoration.decorator';

@Controller()
export class AppController {
  // 使用Inject手动注入
  // @Inject(AppService)
  // private readonly appService: AppService;
  
  // 第二种方式构造器注入
  constructor(private readonly appService: AppService) {}
  @UseInterceptors(new LoggerInterceptor)
  @Get()
  @SetMetadata('custom-decoration','admin')
  @UseGuards(RouteGuardGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @CustomDecoration('admin')
  @Get('/wuhu')
  @UseGuards(RouteGuardGuard)
  getWuhu(): string {
    return this.appService.getHello();
  }
}
