import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AssetClass } from "./entities/asset-class.entity";

@Injectable()
export class AssetClassService {
	constructor(
		@InjectRepository(AssetClass)
		private readonly assetClassRepository: Repository<AssetClass>,
	) {}

	async getAllAssetClasses(): Promise<AssetClass[]> {
		return this.assetClassRepository.find();
	}

	async getAssetClassById(id: string): Promise<AssetClass | null> {
		return this.assetClassRepository.findOneBy({
			id,
		});
	}
}
