import { Test, TestingModule } from '@nestjs/testing';
import { AssetAllocationResolver } from './asset-allocation.resolver';
import { AssetAllocationService } from './asset-allocation.service';

describe('AssetAllocationResolver', () => {
  let resolver: AssetAllocationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetAllocationResolver, AssetAllocationService],
    }).compile();

    resolver = module.get<AssetAllocationResolver>(AssetAllocationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
