import { Module } from "@nestjs/common";
import { BroadAssetClassResolver } from "./broad-asset-class.resolver";
import { BroadAssetClassService } from "./broad-asset-class.service";

@Module({
	providers: [BroadAssetClassResolver, BroadAssetClassService],
})
export class BroadAssetClassModule {}
