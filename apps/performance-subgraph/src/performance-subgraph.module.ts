import { Module } from '@nestjs/common';
import { PerformanceSubgraphController } from './performance-subgraph.controller';
import { PerformanceSubgraphService } from './performance-subgraph.service';

@Module({
  imports: [],
  controllers: [PerformanceSubgraphController],
  providers: [PerformanceSubgraphService],
})
export class PerformanceSubgraphModule {}
