import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RouteGuardGuard implements CanActivate {
  @Inject(Reflector)
  private readonly reflector:Reflector
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if(this.reflector.get('custom-decoration',context.getHandler())){
      return true;
    }else{
      return false
    }

  }
}
