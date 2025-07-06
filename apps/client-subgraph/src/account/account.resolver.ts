import { Args, ID, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { ClientService } from "../client/client.service";
import { Client } from "../client/entities/client.entity";
import { AccountService } from "./account.service";
import { Account } from "./entities/account.entity";

@Resolver(() => Account)
export class AccountResolver {
	constructor(
		private readonly accountService: AccountService,
		private readonly clientService: ClientService,
	) {}

	@Query(() => [Account], {
		name: "accountsByClientId",
		description: "Get all accounts for a specific client",
	})
	async accountsByClientId(
		@Args("clientId", { type: () => ID }) clientId: string,
	): Promise<Account[]> {
		return this.accountService.getAccountsByClientId(clientId);
	}

	@ResolveField(() => Client, {
		name: "client",
		description: "The client associated with the account",
	})
	async client(@Parent() account: Account): Promise<Client> {
		return this.clientService.findClientById(account.clientId);
	}
}
