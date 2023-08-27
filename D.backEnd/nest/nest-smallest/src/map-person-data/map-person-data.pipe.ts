import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MapPersonDataPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(value == 999){
      return `特殊的${value}`
    }
    return value;
  }
}
