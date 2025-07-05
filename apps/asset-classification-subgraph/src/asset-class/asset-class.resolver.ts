import { Args, ID, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { AssetClassService } from "./asset-class.service";
import { AssetClass } from "./entities/asset-class.entity";

@Resolver(() => AssetClass)
export class AssetClassResolver {
	constructor(private readonly assetClassService: AssetClassService) {}

	@Query(() => AssetClass, {
		name: "assetClass",
		description: "Get an asset class by its ID",
	})
	async getAssetClassById(
		@Args("id", { type: () => ID, description: "ID of the asset class" }) id: string,
	): Promise<AssetClass | null> {
		return this.assetClassService.getAssetClassById(id);
	}

	@ResolveReference()
	resolveReference(reference: { __typename: string; id: string }): Promise<AssetClass | null> {
		return this.assetClassService.getAssetClassById(reference.id);
	}
}
