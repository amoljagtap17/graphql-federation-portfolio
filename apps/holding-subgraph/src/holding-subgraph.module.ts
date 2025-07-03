import { Module } from "@nestjs/common";
import { AssetAllocationModule } from "./asset-allocation/asset-allocation.module";
import { HoldingModule } from "./holding/holding.module";
import { SecurityModule } from "./security/security.module";

@Module({
	imports: [HoldingModule, SecurityModule, AssetAllocationModule],
	controllers: [],
	providers: [],
})
export class HoldingSubgraphModule {}
