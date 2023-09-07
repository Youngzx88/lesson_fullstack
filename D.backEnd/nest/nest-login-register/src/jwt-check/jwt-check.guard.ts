import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NotFoundError, Observable } from 'rxjs';

@Injectable()
export class JwtCheckGuard implements CanActivate {
  @Inject(JwtService)
  private jwtService: JwtService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    const token = request.header('authorization');
    const bearer = token?.split(' ');
    if (bearer) {
      try {
        const routeInfo = this.jwtService.verify(bearer[1]);
        const user = routeInfo.user;
        if (user) { return true; }
      } catch (error) {
        throw new UnauthorizedException('登录 token 失效，请重新登录');
      }
    }
  }
}
