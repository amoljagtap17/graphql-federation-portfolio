import { Test, TestingModule } from '@nestjs/testing';
import { AssetClassificationSubgraphController } from './asset-classification-subgraph.controller';
import { AssetClassificationSubgraphService } from './asset-classification-subgraph.service';

describe('AssetClassificationSubgraphController', () => {
  let assetClassificationSubgraphController: AssetClassificationSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssetClassificationSubgraphController],
      providers: [AssetClassificationSubgraphService],
    }).compile();

    assetClassificationSubgraphController = app.get<AssetClassificationSubgraphController>(AssetClassificationSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(assetClassificationSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
