import { Args, ID, Query, Resolver } from "@nestjs/graphql";
import { BroadAssetClassService } from "./broad-asset-class.service";
import { BroadAssetClass } from "./entities/broad-asset-class.entity";

@Resolver(() => BroadAssetClass)
export class BroadAssetClassResolver {
	constructor(private readonly broadAssetClassService: BroadAssetClassService) {}

	@Query(() => [BroadAssetClass], { name: "broadAssetClasses" })
	async findAll(): Promise<BroadAssetClass[]> {
		return this.broadAssetClassService.findAll();
	}

	@Query(() => BroadAssetClass, { name: "broadAssetClass" })
	async findOne(@Args("id", { type: () => ID }) id: string): Promise<BroadAssetClass | null> {
		return this.broadAssetClassService.findOne(id);
	}
}
