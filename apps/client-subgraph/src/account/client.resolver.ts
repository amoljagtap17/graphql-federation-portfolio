import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Client } from "../client/entities/client.entity";
import { AccountService } from "./account.service";
import { Account } from "./entities/account.entity";

@Resolver(() => Client)
export class ClientResolver {
	constructor(private readonly accountService: AccountService) {}

	@ResolveField(() => [Account], {
		name: "accounts",
		description: "Retrieve all accounts associated with the client",
	})
	public accounts(@Parent() client: Client): Promise<Account[]> {
		return this.accountService.getAccountsByClientId(client.id);
	}
}
