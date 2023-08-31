import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './exception/aException';

@Catch(AaaException)
export class ChangecontextFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    // catch到的第一个参数是异常对象
    // 第二个参数是
    // console.log(exception,host)
    host
  }
}
