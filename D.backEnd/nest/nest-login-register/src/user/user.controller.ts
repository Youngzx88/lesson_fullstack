import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Res, HttpException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { JwtCheckGuard } from 'src/jwt-check/jwt-check.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService

  @Post("login")
  async login(@Body() user:LoginDto,@Res({passthrough: true}) res: Response) {
    const info = await this.userService.login(user)
    if(info === '登录成功'){
      const token = await this.jwtService.signAsync({
        user: {
          id: user.username,
          username: user.password
        }
      })
      res.setHeader('token',token)
      return 'loginSuss'
    }else{
      return info
    }
  }

  @Post("register")
  async register(@Body() user:RegisterDto,@Res({passthrough: true}) res: Response) {
    const info = await this.userService.register(user)
    if(info === '注册成功'){
      const token = await this.jwtService.signAsync({
        user: {
          id: user.username,
          username: user.password
        }
      })
      res.setHeader('token',token)
      return '注册成功'
    }else{
      return info
    }
  }

  // 加一个权限接口判断，自定义路由守卫去校验jwt是否正确
  @Get('jwtVertify')
  @UseGuards(JwtCheckGuard)
  getInfoByAuth(){
    console.log("校验jwt")
  }
}
