import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Security } from "./entities/security.entity";

@Injectable()
export class SecurityService {
	constructor(
		@InjectRepository(Security)
		private readonly securityRepository: Repository<Security>,
	) {}

	async findSecurityById(id: string): Promise<Security | null> {
		return this.securityRepository.findOneBy({
			id,
		});
	}
}
