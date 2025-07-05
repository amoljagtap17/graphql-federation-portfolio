import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceReturnService } from './performance-return.service';

describe('PerformanceReturnService', () => {
  let service: PerformanceReturnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceReturnService],
    }).compile();

    service = module.get<PerformanceReturnService>(PerformanceReturnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
