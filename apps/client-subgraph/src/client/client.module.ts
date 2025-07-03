import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { ClientResolver } from "./client.resolver";
import { ClientService } from "./client.service";
import { Client } from "./entities/client.entity";
import { FirmResolver } from "./firm.resolver";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Client])],
	providers: [ClientResolver, FirmResolver, ClientService],
})
export class ClientModule {}
