import { Module } from '@nestjs/common';
import { PerformanceReturnService } from './performance-return.service';
import { PerformanceReturnResolver } from './performance-return.resolver';

@Module({
  providers: [PerformanceReturnResolver, PerformanceReturnService],
})
export class PerformanceReturnModule {}
