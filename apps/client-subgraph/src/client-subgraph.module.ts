import { Module } from "@nestjs/common";
import { AccountModule } from "./account/account.module";
import { ClientModule } from "./client/client.module";

@Module({
	imports: [ClientModule, AccountModule],
	controllers: [],
	providers: [],
})
export class ClientSubgraphModule {}
