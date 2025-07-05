import { Injectable } from '@nestjs/common';

@Injectable()
export class PerformanceSubgraphService {
  getHello(): string {
    return 'Hello World!';
  }
}
