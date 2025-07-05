import { Args, ID, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { BroadAssetClassService } from "./broad-asset-class.service";
import { BroadAssetClass } from "./entities/broad-asset-class.entity";

@Resolver(() => BroadAssetClass)
export class BroadAssetClassResolver {
	constructor(private readonly broadAssetClassService: BroadAssetClassService) {}

	@Query(() => BroadAssetClass, {
		name: "broadAssetClass",
		description: "Get a broad asset class by its ID",
	})
	async getBroadAssetClassById(
		@Args("id", { type: () => ID, description: "ID of the broad asset class" }) id: string,
	): Promise<BroadAssetClass | null> {
		return this.broadAssetClassService.getBroadAssetClassById(id);
	}

	@ResolveReference()
	resolveReference(reference: { __typename: string; id: string }): Promise<BroadAssetClass | null> {
		return this.broadAssetClassService.getBroadAssetClassById(reference.id);
	}
}
