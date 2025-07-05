import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { AssetAllocationService } from "./asset-allocation.service";
import { AssetAllocation } from "./entities/asset-allocation.entity";
import { AssetClass } from "./entities/asset-class.entity";
import { BroadAssetClass } from "./entities/broad-asset-class.entity";
import { StyleClass } from "./entities/style-class.entity";
import { SubClass } from "./entities/sub-class.entity";

@Resolver(() => AssetAllocation)
export class AssetAllocationResolver {
	constructor(private readonly assetAllocationService: AssetAllocationService) {}

	@ResolveField(() => BroadAssetClass, {
		name: "broadAssetClass",
		description: "The broad asset class associated with the asset allocation",
	})
	broadAssetClass(@Parent() assetAllocation: AssetAllocation): any {
		return { __typename: "BroadAssetClass", id: assetAllocation.broadAssetClassId };
	}

	@ResolveField(() => AssetClass, {
		name: "assetClass",
		description: "The asset class associated with the asset allocation",
	})
	assetClass(@Parent() assetAllocation: AssetAllocation): any {
		return { __typename: "AssetClass", id: assetAllocation.assetClassId };
	}

	@ResolveField(() => SubClass, {
		name: "subClass",
		description: "The sub class associated with the asset allocation",
	})
	subClass(@Parent() assetAllocation: AssetAllocation): any {
		return { __typename: "SubClass", id: assetAllocation.subClassId };
	}

	@ResolveField(() => StyleClass, {
		name: "style",
		description: "The style class associated with the asset allocation",
	})
	style(@Parent() assetAllocation: AssetAllocation): any {
		return { __typename: "StyleClass", id: assetAllocation.styleId };
	}
}
