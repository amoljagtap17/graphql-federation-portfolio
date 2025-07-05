import { Test, TestingModule } from '@nestjs/testing';
import { BenchmarkResolver } from './benchmark.resolver';
import { BenchmarkService } from './benchmark.service';

describe('BenchmarkResolver', () => {
  let resolver: BenchmarkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BenchmarkResolver, BenchmarkService],
    }).compile();

    resolver = module.get<BenchmarkResolver>(BenchmarkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
