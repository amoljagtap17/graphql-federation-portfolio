import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BroadAssetClass } from "./entities/broad-asset-class.entity";

@Injectable()
export class BroadAssetClassService {
	constructor(
		@InjectRepository(BroadAssetClass)
		private readonly broadAssetClassRepository: Repository<BroadAssetClass>,
	) {}

	async getBroadAssetClasses(): Promise<BroadAssetClass[]> {
		return this.broadAssetClassRepository.find();
	}

	async getBroadAssetClassById(id: string): Promise<BroadAssetClass | null> {
		return this.broadAssetClassRepository.findOneBy({
			id,
		});
	}
}
