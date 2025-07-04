import { Resolver } from "@nestjs/graphql";
import { AssetAllocationService } from "./asset-allocation.service";
import { AssetAllocation } from "./entities/asset-allocation.entity";

@Resolver(() => AssetAllocation)
export class AssetAllocationResolver {
	constructor(private readonly assetAllocationService: AssetAllocationService) {}
}
