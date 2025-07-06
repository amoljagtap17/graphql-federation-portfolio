import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Holding } from "./entities/holding.entity";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { PerformanceReturnService } from "./performance-return.service";

@Resolver(() => Holding)
export class HoldingResolver {
	constructor(private readonly performanceReturnService: PerformanceReturnService) {}

	@ResolveField(() => PerformanceReturn, {
		name: "performanceReturn",
		description: "The security associated with the holding",
	})
	performanceReturn(@Parent() holding: Holding): Promise<PerformanceReturn | null> {
		return this.performanceReturnService.getPerformanceReturnsByEntityAndDate(
			"holding",
			holding.id,
			holding.asOfDate,
		);
	}
}
