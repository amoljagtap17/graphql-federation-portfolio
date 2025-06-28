import { Test, TestingModule } from '@nestjs/testing';
import { BroadAssetClassService } from './broad-asset-class.service';

describe('BroadAssetClassService', () => {
  let service: BroadAssetClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BroadAssetClassService],
    }).compile();

    service = module.get<BroadAssetClassService>(BroadAssetClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
