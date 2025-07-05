import { Resolver } from "@nestjs/graphql";
import { SubClass } from "./entities/sub-class.entity";
import { SubClassService } from "./sub-class.service";

@Resolver(() => SubClass)
export class SubClassResolver {
	constructor(private readonly subClassService: SubClassService) {}
}
