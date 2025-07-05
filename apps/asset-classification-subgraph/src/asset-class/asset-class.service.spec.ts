import { Test, TestingModule } from '@nestjs/testing';
import { AssetClassService } from './asset-class.service';

describe('AssetClassService', () => {
  let service: AssetClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetClassService],
    }).compile();

    service = module.get<AssetClassService>(AssetClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
