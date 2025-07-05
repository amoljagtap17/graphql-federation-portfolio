import { Test, TestingModule } from '@nestjs/testing';
import { PerformanceSubgraphController } from './performance-subgraph.controller';
import { PerformanceSubgraphService } from './performance-subgraph.service';

describe('PerformanceSubgraphController', () => {
  let performanceSubgraphController: PerformanceSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PerformanceSubgraphController],
      providers: [PerformanceSubgraphService],
    }).compile();

    performanceSubgraphController = app.get<PerformanceSubgraphController>(PerformanceSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(performanceSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
