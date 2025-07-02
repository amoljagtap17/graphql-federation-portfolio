import { Resolver, ResolveReference } from "@nestjs/graphql";
import { ClientService } from "./client.service";
import { Client } from "./entities/client.entity";

@Resolver(() => Client)
export class ClientResolver {
	constructor(private readonly clientService: ClientService) {}

	@ResolveReference()
	resolveReference(reference: { __typename: string; id: string }): Promise<Client> {
		return this.clientService.findClientById(reference.id);
	}
}
