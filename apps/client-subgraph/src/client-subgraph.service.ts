import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientSubgraphService {
  getHello(): string {
    return 'Hello World!';
  }
}
