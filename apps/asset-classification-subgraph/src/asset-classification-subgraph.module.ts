import { Module } from "@nestjs/common";
import { BroadAssetClassModule } from "./broad-asset-class/broad-asset-class.module";

@Module({
	imports: [BroadAssetClassModule],
	controllers: [],
	providers: [],
})
export class AssetClassificationSubgraphModule {}
