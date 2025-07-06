import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { BenchmarkService } from "../benchmark/benchmark.service";
import { Benchmark } from "../benchmark/entities/benchmark.entity";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { PerformanceReturnService } from "./performance-return.service";

@Resolver(() => PerformanceReturn)
export class PerformanceReturnResolver {
	constructor(
		private readonly performanceReturnService: PerformanceReturnService,
		private readonly benchmarkService: BenchmarkService,
	) {}

	@Query(() => PerformanceReturn, {
		name: "performanceReturn",
		description: "Get the performance return for a specific entity and date",
		nullable: true,
	})
	async performanceReturn(
		@Args("entityType") entityType: string,
		@Args("entityId") entityId: string,
		@Args("asOfDate") asOfDate: Date,
	): Promise<PerformanceReturn | null> {
		return this.performanceReturnService.getPerformanceReturnsByEntityAndDate(
			entityType,
			entityId,
			asOfDate,
		);
	}

	@ResolveField(() => Benchmark, {
		name: "benchmark",
		description: "Benchmark associated with the performance return",
		nullable: true,
	})
	async benchmark(@Parent() performanceReturn: PerformanceReturn): Promise<Benchmark | null> {
		return this.benchmarkService.getBenchmarkById(performanceReturn.benchmarkId);
	}
}
