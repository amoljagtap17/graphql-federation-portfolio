import { Controller, Get } from '@nestjs/common';
import { AssetClassificationSubgraphService } from './asset-classification-subgraph.service';

@Controller()
export class AssetClassificationSubgraphController {
  constructor(private readonly assetClassificationSubgraphService: AssetClassificationSubgraphService) {}

  @Get()
  getHello(): string {
    return this.assetClassificationSubgraphService.getHello();
  }
}
