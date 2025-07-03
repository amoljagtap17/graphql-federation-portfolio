import { Test, TestingModule } from '@nestjs/testing';
import { HoldingSubgraphController } from './holding-subgraph.controller';
import { HoldingSubgraphService } from './holding-subgraph.service';

describe('HoldingSubgraphController', () => {
  let holdingSubgraphController: HoldingSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HoldingSubgraphController],
      providers: [HoldingSubgraphService],
    }).compile();

    holdingSubgraphController = app.get<HoldingSubgraphController>(HoldingSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(holdingSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
