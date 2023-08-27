import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class PersonIdFilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    console.log("ArgumentsHost",host)
  }
}
