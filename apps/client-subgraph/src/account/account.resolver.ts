import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { AccountService } from "./account.service";
import { Account } from "./entities/account.entity";
import { Client } from "./entities/client.entity";

@Resolver(() => Account)
export class AccountResolver {
	constructor(private readonly accountService: AccountService) {}

	@ResolveField(() => Client, {
		name: "client",
		description: "The client associated with the account",
	})
	client(@Parent() account: Account): any {
		return { __typename: "Client", id: account.clientId };
	}
}
