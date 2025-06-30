import { Module } from '@nestjs/common';
import { FirmSubgraphController } from './firm-subgraph.controller';
import { FirmSubgraphService } from './firm-subgraph.service';

@Module({
  imports: [],
  controllers: [FirmSubgraphController],
  providers: [FirmSubgraphService],
})
export class FirmSubgraphModule {}
