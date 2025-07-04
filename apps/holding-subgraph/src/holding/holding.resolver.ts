import { Args, ID, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Security } from "../security/entities/security.entity";
import { SecurityService } from "../security/security.service";
import { Holding } from "./entities/holding.entity";
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
	security(@Parent() holding: Holding): Promise<Security> {
		return this.securityService.findSecurityById(holding.securityId);
	}
}
