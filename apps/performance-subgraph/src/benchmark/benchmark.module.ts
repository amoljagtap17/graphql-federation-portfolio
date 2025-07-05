import { Module } from '@nestjs/common';
import { BenchmarkService } from './benchmark.service';
import { BenchmarkResolver } from './benchmark.resolver';

@Module({
  providers: [BenchmarkResolver, BenchmarkService],
})
export class BenchmarkModule {}
