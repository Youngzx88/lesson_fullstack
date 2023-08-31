import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // 测试超过1k内存自动重启
    // let str = new String('asdasdakjhdsajkhdakjhdkajdkla萨达达adjklajdklajasdasdakjhdsajkhdakjhdkajdkla萨达达adjklajdklajasdasdakjhdsajkhdakjhdkajdkla萨达达adjklajdklaj')
    // for (let  i = 0;  i < 100000000;  i++) {
      return this.appService.getHello();      
    // }
  }

  @Post('/detect')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file): any{
    console.log("file",file)
    return "hello"
  }
}
