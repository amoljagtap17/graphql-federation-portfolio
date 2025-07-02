import { Controller, Get } from '@nestjs/common';
import { ClientSubgraphService } from './client-subgraph.service';

@Controller()
export class ClientSubgraphController {
  constructor(private readonly clientSubgraphService: ClientSubgraphService) {}

  @Get()
  getHello(): string {
    return this.clientSubgraphService.getHello();
  }
}
