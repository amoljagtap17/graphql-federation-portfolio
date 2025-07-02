import { Module } from "@nestjs/common";
import { AccountResolver } from "./account.resolver";
import { AccountService } from "./account.service";
import { ClientResolver } from "./client.resolver";

@Module({
	providers: [AccountResolver, ClientResolver, AccountService],
})
export class AccountModule {}
