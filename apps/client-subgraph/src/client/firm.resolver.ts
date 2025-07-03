import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ClientService } from "./client.service";
import { Client } from "./entities/client.entity";
import { Firm } from "./entities/firm.entity";

@Resolver(() => Firm)
export class FirmResolver {
	constructor(private readonly clientService: ClientService) {}

	@ResolveField(() => [Client], { description: "List of clients associated with the firm" })
	public clients(@Parent() firm: Firm): Promise<Client[]> {
		return this.clientService.findClientsForFirm(firm.id);
	}
}
