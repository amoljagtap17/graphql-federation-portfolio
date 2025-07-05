import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { PerformanceReturnResolver } from "./performance-return.resolver";
import { PerformanceReturnService } from "./performance-return.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([PerformanceReturn])],
	providers: [PerformanceReturnResolver, PerformanceReturnService],
})
export class PerformanceReturnModule {}
