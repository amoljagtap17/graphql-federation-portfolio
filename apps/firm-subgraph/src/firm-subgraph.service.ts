import { Injectable } from '@nestjs/common';

@Injectable()
export class FirmSubgraphService {
  getHello(): string {
    return 'Hello World!';
  }
}
