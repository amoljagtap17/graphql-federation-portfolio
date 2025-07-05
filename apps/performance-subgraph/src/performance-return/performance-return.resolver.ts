import { Resolver, ResolveReference } from "@nestjs/graphql";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { PerformanceReturnService } from "./performance-return.service";

@Resolver(() => PerformanceReturn)
export class PerformanceReturnResolver {
	constructor(private readonly performanceReturnService: PerformanceReturnService) {}

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
