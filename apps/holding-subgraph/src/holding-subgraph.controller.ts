import { Controller, Get } from '@nestjs/common';
import { HoldingSubgraphService } from './holding-subgraph.service';

@Controller()
export class HoldingSubgraphController {
  constructor(private readonly holdingSubgraphService: HoldingSubgraphService) {}

  @Get()
  getHello(): string {
    return this.holdingSubgraphService.getHello();
  }
}
