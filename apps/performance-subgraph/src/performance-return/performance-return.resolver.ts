import { Args, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { PerformanceReturnService } from "./performance-return.service";

@Resolver(() => PerformanceReturn)
export class PerformanceReturnResolver {
	constructor(private readonly performanceReturnService: PerformanceReturnService) {}

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
			entityType as "holding" | "account",
			entityId,
			asOfDate,
		);
	}

	@ResolveReference()
	resolveReference(reference: {
		__typename: string;
		entityType: "holding" | "account";
		entityId: string;
		asOfDate: Date;
	}): Promise<PerformanceReturn | null> {
		return this.performanceReturnService.getPerformanceReturnsByEntityAndDate(
			reference.entityType,
			reference.entityId,
			reference.asOfDate,
		);
	}
}
