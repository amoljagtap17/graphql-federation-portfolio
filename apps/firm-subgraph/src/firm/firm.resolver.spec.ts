import { Test, TestingModule } from '@nestjs/testing';
import { FirmResolver } from './firm.resolver';
import { FirmService } from './firm.service';

describe('FirmResolver', () => {
  let resolver: FirmResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirmResolver, FirmService],
    }).compile();

    resolver = module.get<FirmResolver>(FirmResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
