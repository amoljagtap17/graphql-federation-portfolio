import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { Firm } from "./entities/firm.entity";
import { FirmService } from "./firm.service";

@Resolver(() => Firm)
export class FirmResolver {
	constructor(private readonly firmService: FirmService) {}

	@Query(() => Firm, { name: "firm" })
	async findOne(@Args("id", { type: () => ID }) id: string): Promise<Firm | null> {
		return this.firmService.findOne(id);
	}
}
