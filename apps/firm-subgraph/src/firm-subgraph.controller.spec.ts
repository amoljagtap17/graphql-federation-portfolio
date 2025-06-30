import { Test, TestingModule } from '@nestjs/testing';
import { FirmSubgraphController } from './firm-subgraph.controller';
import { FirmSubgraphService } from './firm-subgraph.service';

describe('FirmSubgraphController', () => {
  let firmSubgraphController: FirmSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirmSubgraphController],
      providers: [FirmSubgraphService],
    }).compile();

    firmSubgraphController = app.get<FirmSubgraphController>(FirmSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(firmSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
