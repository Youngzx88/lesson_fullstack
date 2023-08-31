import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleWare } from './middleware/logger.middleware';
import { DynamicTestModule } from './dynamic-test/dynamic-test.module';

@Module({
  imports: [PersonModule, CatsModule, DynamicTestModule.register({
    a: '1',
    b: '2'
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .forRoutes('*');
  }
}
