import { Resolver } from "@nestjs/graphql";
import { AssetClassService } from "./asset-class.service";
import { AssetClass } from "./entities/asset-class.entity";

@Resolver(() => AssetClass)
export class AssetClassResolver {
	constructor(private readonly assetClassService: AssetClassService) {}
}
