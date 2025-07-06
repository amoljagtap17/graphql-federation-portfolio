import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { HoldingResolver } from "./holding.resolver";
import { PerformanceReturnResolver } from "./performance-return.resolver";
import { PerformanceReturnService } from "./performance-return.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([PerformanceReturn])],
	providers: [PerformanceReturnResolver, PerformanceReturnService, HoldingResolver],
})
export class PerformanceReturnModule {}
