import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>,
	) {}

	async getUserById(id: string): Promise<User> {
		return this.usersRepository.findOneOrFail({ where: { id } });
	}

	async getUsersByFirmId(firmId: string): Promise<User[]> {
		return this.usersRepository.find({ where: { firmId } });
	}
}
