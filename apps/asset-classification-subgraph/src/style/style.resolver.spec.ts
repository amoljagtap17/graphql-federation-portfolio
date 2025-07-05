import { Test, TestingModule } from '@nestjs/testing';
import { StyleResolver } from './style.resolver';
import { StyleService } from './style.service';

describe('StyleResolver', () => {
  let resolver: StyleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StyleResolver, StyleService],
    }).compile();

    resolver = module.get<StyleResolver>(StyleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
