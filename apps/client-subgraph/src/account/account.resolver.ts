import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Client } from "../client/entities/client.entity";
import { AccountService } from "./account.service";
import { Account } from "./entities/account.entity";

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
