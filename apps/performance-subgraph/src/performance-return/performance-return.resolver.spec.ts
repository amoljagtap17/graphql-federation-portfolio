import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceReturnResolver } from './performance-return.resolver';
import { PerformanceReturnService } from './performance-return.service';

describe('PerformanceReturnResolver', () => {
  let resolver: PerformanceReturnResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerformanceReturnResolver, PerformanceReturnService],
    }).compile();

    resolver = module.get<PerformanceReturnResolver>(PerformanceReturnResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
