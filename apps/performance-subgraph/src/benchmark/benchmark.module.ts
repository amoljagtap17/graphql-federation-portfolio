import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { BenchmarkResolver } from "./benchmark.resolver";
import { BenchmarkService } from "./benchmark.service";
import { Benchmark } from "./entities/benchmark.entity";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Benchmark])],
	providers: [BenchmarkResolver, BenchmarkService],
})
export class BenchmarkModule {}
