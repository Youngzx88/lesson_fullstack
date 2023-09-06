import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sss')
  sss(@Body() body,@Session() session) {
    console.log(session)
    console.log(body)
    return session;
  }
}
