import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Style } from "./entities/style.entity";

@Injectable()
export class StyleService {
	constructor(
		@InjectRepository(Style)
		private readonly styleRepository: Repository<Style>,
	) {}

	async getAllStyles(): Promise<Style[]> {
		return this.styleRepository.find();
	}

	async getStyleById(id: string): Promise<Style | null> {
		return this.styleRepository.findOneBy({
			id,
		});
	}
}
