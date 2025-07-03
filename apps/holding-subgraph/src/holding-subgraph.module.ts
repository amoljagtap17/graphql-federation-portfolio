import { Module } from '@nestjs/common';
import { HoldingSubgraphController } from './holding-subgraph.controller';
import { HoldingSubgraphService } from './holding-subgraph.service';

@Module({
  imports: [],
  controllers: [HoldingSubgraphController],
  providers: [HoldingSubgraphService],
})
export class HoldingSubgraphModule {}
