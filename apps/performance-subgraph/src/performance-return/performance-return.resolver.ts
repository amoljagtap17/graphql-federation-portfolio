import { Resolver } from "@nestjs/graphql";
import { PerformanceReturn } from "./entities/performance-return.entity";
import { PerformanceReturnService } from "./performance-return.service";

@Resolver(() => PerformanceReturn)
export class PerformanceReturnResolver {
	constructor(private readonly performanceReturnService: PerformanceReturnService) {}
}
