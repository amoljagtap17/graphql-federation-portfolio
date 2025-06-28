import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { BroadAssetClassResolver } from "./broad-asset-class.resolver";
import { BroadAssetClassService } from "./broad-asset-class.service";
import { BroadAssetClass } from "./entities/broad-asset-class.entity";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([BroadAssetClass])],
	providers: [BroadAssetClassResolver, BroadAssetClassService],
})
export class BroadAssetClassModule {}
