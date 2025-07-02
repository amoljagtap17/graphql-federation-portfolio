import { Module } from '@nestjs/common';
import { ClientSubgraphController } from './client-subgraph.controller';
import { ClientSubgraphService } from './client-subgraph.service';
import { ClientModule } from './client/client.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ClientModule, AccountModule],
  controllers: [ClientSubgraphController],
  providers: [ClientSubgraphService],
})
export class ClientSubgraphModule {}
