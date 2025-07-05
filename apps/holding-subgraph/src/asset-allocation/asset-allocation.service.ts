import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AssetAllocation } from "./entities/asset-allocation.entity";

@Injectable()
export class AssetAllocationService {
	constructor(
		@InjectRepository(AssetAllocation)
		private readonly assetAllocationRepository: Repository<AssetAllocation>,
	) {}

	async findAssetAllocationById(id: string): Promise<AssetAllocation | null> {
		return this.assetAllocationRepository.findOneBy({
			id,
		});
	}
}
