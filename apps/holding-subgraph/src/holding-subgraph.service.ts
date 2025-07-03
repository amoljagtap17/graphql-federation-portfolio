import { Injectable } from '@nestjs/common';

@Injectable()
export class HoldingSubgraphService {
  getHello(): string {
    return 'Hello World!';
  }
}
