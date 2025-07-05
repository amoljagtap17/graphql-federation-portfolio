import { Args, ID, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { SubClass } from "./entities/sub-class.entity";
import { SubClassService } from "./sub-class.service";

@Resolver(() => SubClass)
export class SubClassResolver {
	constructor(private readonly subClassService: SubClassService) {}

	@Query(() => SubClass, {
		name: "subClass",
		description: "Get a sub-class by its ID",
	})
	async getSubClassById(
		@Args("id", { type: () => ID, description: "ID of the sub-class" }) id: string,
	): Promise<SubClass | null> {
		return this.subClassService.getSubClassById(id);
	}

	@ResolveReference()
	resolveReference(reference: { __typename: string; id: string }): Promise<SubClass | null> {
		return this.subClassService.getSubClassById(reference.id);
	}
}
