import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { AssetAllocationService } from "../asset-allocation/asset-allocation.service";
import { AssetAllocation } from "../asset-allocation/entities/asset-allocation.entity";
import { Security } from "./entities/security.entity";

@Resolver(() => Security)
export class SecurityResolver {
	constructor(private readonly assetAllocationService: AssetAllocationService) {}

	@ResolveField(() => AssetAllocation, {
		name: "assetAllocation",
		description: "The asset allocation associated with the security",
	})
	async assetAllocation(@Parent() security: Security): Promise<AssetAllocation | null> {
		return this.assetAllocationService.findAssetAllocationById(security.assetAllocationId);
	}
}
