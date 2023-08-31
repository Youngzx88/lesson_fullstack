import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const MyHeaders = createParamDecorator((key: string,ctx: ExecutionContext)=>{
  const request:Request = ctx.switchToHttp().getRequest();
  return key ? request.headers[key] : request.headers
})
