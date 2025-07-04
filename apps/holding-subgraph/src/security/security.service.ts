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

	async findSecurityById(securityId: string): Promise<Security> {
		return this.securityRepository.findOneOrFail({
			where: { id: securityId },
		});
	}
}
