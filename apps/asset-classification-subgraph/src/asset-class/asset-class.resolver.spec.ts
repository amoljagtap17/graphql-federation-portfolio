import { Test, TestingModule } from '@nestjs/testing';
import { AssetClassResolver } from './asset-class.resolver';
import { AssetClassService } from './asset-class.service';

describe('AssetClassResolver', () => {
  let resolver: AssetClassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetClassResolver, AssetClassService],
    }).compile();

    resolver = module.get<AssetClassResolver>(AssetClassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
