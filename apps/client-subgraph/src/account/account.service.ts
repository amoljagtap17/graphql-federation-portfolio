import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Account } from "./entities/account.entity";

@Injectable()
export class AccountService {
	constructor(
		@InjectRepository(Account)
		private readonly accountRepository: Repository<Account>,
	) {}

	getAccountsByClientId(clientId: string): Promise<Account[]> {
		return this.accountRepository.find({
			where: { clientId },
		});
	}
}
