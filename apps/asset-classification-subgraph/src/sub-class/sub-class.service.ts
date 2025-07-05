import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { SubClass } from "./entities/sub-class.entity";

@Injectable()
export class SubClassService {
	constructor(
		@InjectRepository(SubClass)
		private readonly subClassRepository: Repository<SubClass>,
	) {}

	async getAllSubClasses(): Promise<SubClass[]> {
		return this.subClassRepository.find();
	}

	async getSubClassById(id: string): Promise<SubClass | null> {
		return this.subClassRepository.findOneBy({
			id,
		});
	}
}
