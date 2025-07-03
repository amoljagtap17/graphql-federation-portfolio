import { Module } from '@nestjs/common';
import { HoldingService } from './holding.service';
import { HoldingResolver } from './holding.resolver';

@Module({
  providers: [HoldingResolver, HoldingService],
})
export class HoldingModule {}
