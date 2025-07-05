import { Test, TestingModule } from '@nestjs/testing';
import { SubClassService } from './sub-class.service';

describe('SubClassService', () => {
  let service: SubClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubClassService],
    }).compile();

    service = module.get<SubClassService>(SubClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
