import { Module } from "@nestjs/common";
import { AssetAllocationResolver } from "./asset-allocation.resolver";
import { AssetAllocationService } from "./asset-allocation.service";

@Module({
	providers: [AssetAllocationResolver, AssetAllocationService],
	exports: [AssetAllocationService],
})
export class AssetAllocationModule {}
