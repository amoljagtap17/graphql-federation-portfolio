import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ClientService } from "../client/client.service";
import { Client } from "../client/entities/client.entity";
import { Account } from "./entities/account.entity";

@Resolver(() => Account)
export class AccountResolver {
	constructor(private readonly clientService: ClientService) {}

	@ResolveField(() => Client, {
		name: "client",
		description: "The client associated with the account",
	})
	async client(@Parent() account: Account): Promise<Client> {
		return this.clientService.findClientById(account.clientId);
	}
}
