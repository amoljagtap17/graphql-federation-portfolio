import { Test, TestingModule } from '@nestjs/testing';
import { ClientSubgraphController } from './client-subgraph.controller';
import { ClientSubgraphService } from './client-subgraph.service';

describe('ClientSubgraphController', () => {
  let clientSubgraphController: ClientSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientSubgraphController],
      providers: [ClientSubgraphService],
    }).compile();

    clientSubgraphController = app.get<ClientSubgraphController>(ClientSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
