import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { AssetClassResolver } from "./asset-class.resolver";
import { AssetClassService } from "./asset-class.service";
import { AssetClass } from "./entities/asset-class.entity";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([AssetClass])],
	providers: [AssetClassResolver, AssetClassService],
})
export class AssetClassModule {}
