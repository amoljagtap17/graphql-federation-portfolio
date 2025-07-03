import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { ClientModule } from "../client/client.module";
import { AccountResolver } from "./account.resolver";
import { AccountService } from "./account.service";
import { ClientResolver } from "./client.resolver";
import { Account } from "./entities/account.entity";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Account]), ClientModule],
	providers: [AccountResolver, ClientResolver, AccountService],
})
export class AccountModule {}
