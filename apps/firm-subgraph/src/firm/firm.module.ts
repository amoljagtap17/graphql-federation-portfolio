import { DatabaseModule } from "@app/common";
import { forwardRef, Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { Firm } from "./entities/firm.entity";
import { FirmResolver } from "./firm.resolver";
import { FirmService } from "./firm.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Firm]), forwardRef(() => UserModule)],
	providers: [FirmResolver, FirmService],
	exports: [FirmService],
})
export class FirmModule {}
