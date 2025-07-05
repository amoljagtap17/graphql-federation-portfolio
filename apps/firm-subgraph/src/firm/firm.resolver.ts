import { Args, ID, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../user/entities/user.entity";
import { UserService } from "../user/user.service";
import { Firm } from "./entities/firm.entity";
import { FirmService } from "./firm.service";

@Resolver(() => Firm)
export class FirmResolver {
	constructor(
		private readonly firmService: FirmService,
		private readonly userService: UserService,
	) {}

	@Query(() => Firm, { name: "firm" })
	async findOne(@Args("id", { type: () => ID }) id: string): Promise<Firm> {
		return this.firmService.getFirmById(id);
	}

	@ResolveField(() => [User], {
		name: "users",
		description: "Users associated with the firm",
	})
	async users(@Parent() firm: Firm): Promise<User[]> {
		return this.userService.getUsersByFirmId(firm.id);
	}
}
