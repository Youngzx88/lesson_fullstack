import { DynamicModule, Module } from '@nestjs/common';
import { DynamicTestService } from './dynamic-test.service';
import { DynamicTestController } from './dynamic-test.controller';

@Module({
  controllers: [DynamicTestController],
  providers: [DynamicTestService],
})
export class DynamicTestModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: DynamicTestModule,
      controllers: [DynamicTestController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        DynamicTestService,
      ],
      exports: [],
    };
  }
}
