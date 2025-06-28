import { Module } from '@nestjs/common';
import { AssetClassificationSubgraphController } from './asset-classification-subgraph.controller';
import { AssetClassificationSubgraphService } from './asset-classification-subgraph.service';

@Module({
  imports: [],
  controllers: [AssetClassificationSubgraphController],
  providers: [AssetClassificationSubgraphService],
})
export class AssetClassificationSubgraphModule {}
