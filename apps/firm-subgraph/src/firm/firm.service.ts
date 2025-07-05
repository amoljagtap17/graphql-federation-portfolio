import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Firm } from "./entities/firm.entity";

@Injectable()
export class FirmService {
	constructor(
		@InjectRepository(Firm)
		private readonly firmsRepository: Repository<Firm>,
	) {}

	async getFirmById(id: string): Promise<Firm> {
		return this.firmsRepository.findOneOrFail({ where: { id } });
	}
}
