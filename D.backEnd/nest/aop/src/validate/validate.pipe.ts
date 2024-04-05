import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("🚀 ~ ValidatePipe ~ transform ~ metadata:", metadata)
    console.log("🚀 ~ ValidatePipe ~ transform ~ value:", value)
    if(Number.isNaN(parseInt(value))){
      throw new BadRequestException('请输入数字2')
    }
    return value;
  }
}
