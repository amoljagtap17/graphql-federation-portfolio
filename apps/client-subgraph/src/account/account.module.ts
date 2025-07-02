import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { AccountResolver } from "./account.resolver";
import { AccountService } from "./account.service";
import { ClientResolver } from "./client.resolver";
import { Account } from "./entities/account.entity";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Account])],
	providers: [AccountResolver, ClientResolver, AccountService],
})
export class AccountModule {}
