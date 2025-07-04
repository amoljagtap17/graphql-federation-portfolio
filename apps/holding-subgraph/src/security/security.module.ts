import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { Security } from "./entities/security.entity";
import { SecurityResolver } from "./security.resolver";
import { SecurityService } from "./security.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Security])],
	providers: [SecurityResolver, SecurityService],
	exports: [SecurityService],
})
export class SecurityModule {}
