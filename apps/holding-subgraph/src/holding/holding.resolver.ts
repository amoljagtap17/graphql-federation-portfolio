import { Args, ID, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Security } from "../security/entities/security.entity";
import { SecurityService } from "../security/security.service";
import { Holding } from "./entities/holding.entity";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { HoldingService } from "./holding.service";

@Resolver(() => Holding)
export class HoldingResolver {
	constructor(
		private readonly holdingService: HoldingService,
		private readonly securityService: SecurityService,
	) {}

	@Query(() => [Holding], {
		name: "holdingsByAccount",
		description: "Get all holdings for a specific account",
	})
	async holdingsByAccount(
		@Args("accountId", { type: () => ID }) accountId: string,
	): Promise<Holding[]> {
		return this.holdingService.getHoldingsByAccountId(accountId);
	}

	@ResolveField(() => Security, {
		name: "security",
		description: "The security associated with the holding",
	})
	security(@Parent() holding: Holding): Promise<Security | null> {
		return this.securityService.findSecurityById(holding.securityId);
	}

	@ResolveField(() => PerformanceReturn, {
		name: "performanceReturn",
		description: "The performance return for the holding as of the specified date",
	})
	performanceReturn(@Parent() holding: Holding): any {
		return {
			__typename: "PerformanceReturn",
			entityType: "holding",
			entityId: holding.id,
			asOfDate: holding.asOfDate,
		};
	}
}
