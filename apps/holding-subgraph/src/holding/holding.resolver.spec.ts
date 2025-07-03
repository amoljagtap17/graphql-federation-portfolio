import { Test, TestingModule } from '@nestjs/testing';
import { HoldingResolver } from './holding.resolver';
import { HoldingService } from './holding.service';

describe('HoldingResolver', () => {
  let resolver: HoldingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoldingResolver, HoldingService],
    }).compile();

    resolver = module.get<HoldingResolver>(HoldingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
