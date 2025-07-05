import { Module } from '@nestjs/common';
import { PerformanceSubgraphController } from './performance-subgraph.controller';
import { PerformanceSubgraphService } from './performance-subgraph.service';
import { PerformanceReturnModule } from './performance-return/performance-return.module';
import { BenchmarkModule } from './benchmark/benchmark.module';

@Module({
  imports: [PerformanceReturnModule, BenchmarkModule],
  controllers: [PerformanceSubgraphController],
  providers: [PerformanceSubgraphService],
})
export class PerformanceSubgraphModule {}
