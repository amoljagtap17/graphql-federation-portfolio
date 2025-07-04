import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Holding } from "./entities/holding.entity";

@Injectable()
export class HoldingService {
	constructor(
		@InjectRepository(Holding)
		private readonly holdingRepository: Repository<Holding>,
	) {}

	async getHoldingsByAccountId(accountId: string): Promise<Holding[]> {
		return this.holdingRepository.find({
			where: { accountId },
		});
	}
}
