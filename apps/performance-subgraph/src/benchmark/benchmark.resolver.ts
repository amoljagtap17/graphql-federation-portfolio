import { Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { BenchmarkService } from "./benchmark.service";
import { Benchmark } from "./entities/benchmark.entity";

@Resolver(() => Benchmark)
export class BenchmarkResolver {
	constructor(private readonly benchmarkService: BenchmarkService) {}

	@Query(() => [Benchmark], {
		name: "benchmarks",
		description: "Get all benchmarks",
	})
	async getBenchmarks(): Promise<Benchmark[]> {
		return this.benchmarkService.getAllBenchmarks();
	}

	@ResolveReference()
	resolveReference(reference: { __typename: string; id: string }): Promise<Benchmark | null> {
		return this.benchmarkService.getBenchmarkById(reference.id);
	}
}
