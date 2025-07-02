import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Client } from "./entities/client.entity";

@Injectable()
export class ClientService {
	constructor(
		@InjectRepository(Client)
		private readonly clientRepository: Repository<Client>,
	) {}

	async findClientById(id: string): Promise<Client> {
		return this.clientRepository.findOneByOrFail({ id });
	}
}
