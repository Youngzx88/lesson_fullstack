import { Controller, Get, Query, UseFilters, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login/login.guard';
import { TimeInterceptor } from './time/time.interceptor';
import { ValidatePipe } from './validate/validate.pipe';
import { WarningFilter } from './warning/warning.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('aaa')
  @UseGuards(LoginGuard)
  @UseFilters(WarningFilter)
  @UseInterceptors(TimeInterceptor)
  getHello(@Query('id' ,ValidatePipe) id): string {
    return this.appService.getHello();
  }
}
