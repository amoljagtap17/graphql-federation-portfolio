import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { SecurityModule } from "../security/security.module";
import { Holding } from "./entities/holding.entity";
import { HoldingResolver } from "./holding.resolver";
import { HoldingService } from "./holding.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Holding]), SecurityModule],
	providers: [HoldingResolver, HoldingService],
})
export class HoldingModule {}
