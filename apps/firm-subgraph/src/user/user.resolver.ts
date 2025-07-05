import { Args, ID, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Firm } from "../firm/entities/firm.entity";
import { FirmService } from "../firm/firm.service";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
	constructor(
		private readonly userService: UserService,
		private readonly firmService: FirmService,
	) {}

	@Query(() => User, { name: "user" })
	async findOne(@Args("id", { type: () => ID }) id: string): Promise<User> {
		return this.userService.getUserById(id);
	}

	@ResolveField(() => [Firm], {
		name: "firm",
		description: "The firm associated with the user",
	})
	async firm(@Parent() user: User): Promise<Firm> {
		return this.firmService.getFirmById(user.firmId);
	}
}
