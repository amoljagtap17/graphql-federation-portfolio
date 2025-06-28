import { Test, TestingModule } from '@nestjs/testing';
import { BroadAssetClassResolver } from './broad-asset-class.resolver';
import { BroadAssetClassService } from './broad-asset-class.service';

describe('BroadAssetClassResolver', () => {
  let resolver: BroadAssetClassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BroadAssetClassResolver, BroadAssetClassService],
    }).compile();

    resolver = module.get<BroadAssetClassResolver>(BroadAssetClassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
