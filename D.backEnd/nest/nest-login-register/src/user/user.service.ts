import {
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;
  async register(registerDto: RegisterDto) {
    // 编写注册逻辑
    // 1. 数据库中没有才让注册
    // 2. 已注册的直接报错让去登录
    const userExistInfo = await this.userRepository
      .createQueryBuilder('user')
      .select('username,password')
      .where('username = :username', { username: registerDto.username })
      .andWhere('password = :password', { password: registerDto.password })
      .getRawMany();
    if (userExistInfo.length !== 0) {
      throw new HttpException('用户已存在', 200);
      // 已经注册
    } else {
      // 未注册，直接新加并返回jwt在header中❌
      try {
        await this.userRepository
          .createQueryBuilder()
          .insert()
          .into('user')
          .values({
            username: registerDto.username,
            password: registerDto.password,
          })
          .execute();
        return '注册成功'
      } catch (error) {
        throw new HttpException(error, 200);
      }
    }
  }

  async login(loginDto: LoginDto) {
    // 编写登录逻辑，去数据库查询是否有相同的用户名+密码
    // 有 -》 返回jwt
    // 无 -》 先去注册
    const userExistInfo = await this.userRepository
      .createQueryBuilder('user')
      .select('username,password')
      .where('username = :username', { username: loginDto.username })
      .andWhere('password = :password', { password: loginDto.password })
      .getRawMany();
    if (userExistInfo.length !== 0) {
      // 返回带上jwt ❌
      return '登录成功'
    } else {
      // 提示还未注册
      throw new NotFoundException('用户尚未注册');
    }
  }
}
