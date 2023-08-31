import { Test, TestingModule } from '@nestjs/testing';
import { DynamicTestController } from './dynamic-test.controller';
import { DynamicTestService } from './dynamic-test.service';

describe('DynamicTestController', () => {
  let controller: DynamicTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicTestController],
      providers: [DynamicTestService],
    }).compile();

    controller = module.get<DynamicTestController>(DynamicTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
