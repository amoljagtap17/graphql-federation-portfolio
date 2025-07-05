import { Resolver } from "@nestjs/graphql";
import { BenchmarkService } from "./benchmark.service";
import { Benchmark } from "./entities/benchmark.entity";

@Resolver(() => Benchmark)
export class BenchmarkResolver {
	constructor(private readonly benchmarkService: BenchmarkService) {}
}
