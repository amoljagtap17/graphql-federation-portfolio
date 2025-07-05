import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { SubClass } from "./entities/sub-class.entity";
import { SubClassResolver } from "./sub-class.resolver";
import { SubClassService } from "./sub-class.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([SubClass])],
	providers: [SubClassResolver, SubClassService],
})
export class SubClassModule {}
