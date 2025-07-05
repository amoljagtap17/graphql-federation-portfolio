import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { AssetAllocationResolver } from "./asset-allocation.resolver";
import { AssetAllocationService } from "./asset-allocation.service";
import { AssetAllocation } from "./entities/asset-allocation.entity";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([AssetAllocation])],
	providers: [AssetAllocationResolver, AssetAllocationService],
	exports: [AssetAllocationService],
})
export class AssetAllocationModule {}
