import { Test, TestingModule } from '@nestjs/testing';
import { SubClassResolver } from './sub-class.resolver';
import { SubClassService } from './sub-class.service';

describe('SubClassResolver', () => {
  let resolver: SubClassResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubClassResolver, SubClassService],
    }).compile();

    resolver = module.get<SubClassResolver>(SubClassResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
