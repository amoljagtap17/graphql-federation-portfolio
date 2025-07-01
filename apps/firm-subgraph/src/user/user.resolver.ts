import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => User, { name: "user" })
	async findOne(@Args("id", { type: () => ID }) id: string): Promise<User | null> {
		return this.userService.findOne(id);
	}
}
