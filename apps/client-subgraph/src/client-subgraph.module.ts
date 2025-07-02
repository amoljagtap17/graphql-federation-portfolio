import { Module } from '@nestjs/common';
import { ClientSubgraphController } from './client-subgraph.controller';
import { ClientSubgraphService } from './client-subgraph.service';

@Module({
  imports: [],
  controllers: [ClientSubgraphController],
  providers: [ClientSubgraphService],
})
export class ClientSubgraphModule {}
