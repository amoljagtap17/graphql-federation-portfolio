import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BroadAssetClass } from "./entities/broad-asset-class.entity";

@Injectable()
export class BroadAssetClassService {
	constructor(
		@InjectRepository(BroadAssetClass) private readonly repo: Repository<BroadAssetClass>,
	) {}

	async findAll(): Promise<BroadAssetClass[]> {
		return this.repo.find();
	}

	async findOne(id: string): Promise<BroadAssetClass | null> {
		return this.repo.findOneBy({ id });
	}
}
