import { Test, TestingModule } from '@nestjs/testing';
import { DynamicTestService } from './dynamic-test.service';

describe('DynamicTestService', () => {
  let service: DynamicTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicTestService],
    }).compile();

    service = module.get<DynamicTestService>(DynamicTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
