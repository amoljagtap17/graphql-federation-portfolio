import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PerformanceReturn } from "./entities/performance-return.entity";

@Injectable()
export class PerformanceReturnService {
	constructor(
		@InjectRepository(PerformanceReturn)
		private readonly performanceReturnRepository: Repository<PerformanceReturn>,
	) {}

	async getPerformanceReturnsByEntityAndDate(
		entityType: "holding" | "account",
		entityId: string,
		asOfDate: Date,
	): Promise<PerformanceReturn | null> {
		return this.performanceReturnRepository.findOne({
			where: {
				entityType,
				entityId,
				asOfDate,
			},
		});
	}
}
