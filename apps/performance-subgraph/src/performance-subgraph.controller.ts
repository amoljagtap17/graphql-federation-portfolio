import { Controller, Get } from '@nestjs/common';
import { PerformanceSubgraphService } from './performance-subgraph.service';

@Controller()
export class PerformanceSubgraphController {
  constructor(private readonly performanceSubgraphService: PerformanceSubgraphService) {}

  @Get()
  getHello(): string {
    return this.performanceSubgraphService.getHello();
  }
}
