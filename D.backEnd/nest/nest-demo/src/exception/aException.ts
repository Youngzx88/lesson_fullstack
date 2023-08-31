import { NestExpressApplication } from "@nestjs/platform-express";

export class AaaException{
  constructor(public aaa:string,public bbb: string){
    
  }
}