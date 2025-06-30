import { Controller, Get } from '@nestjs/common';
import { FirmSubgraphService } from './firm-subgraph.service';

@Controller()
export class FirmSubgraphController {
  constructor(private readonly firmSubgraphService: FirmSubgraphService) {}

  @Get()
  getHello(): string {
    return this.firmSubgraphService.getHello();
  }
}
