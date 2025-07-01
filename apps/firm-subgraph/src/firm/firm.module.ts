import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { Firm } from "./entities/firm.entity";
import { FirmResolver } from "./firm.resolver";
import { FirmService } from "./firm.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Firm])],
	providers: [FirmResolver, FirmService],
})
export class FirmModule {}
