import { Args, ID, Query, Resolver, ResolveReference } from "@nestjs/graphql";
import { Style } from "./entities/style.entity";
import { StyleService } from "./style.service";

@Resolver(() => Style)
export class StyleResolver {
	constructor(private readonly styleService: StyleService) {}

	@Query(() => Style, {
		name: "style",
		description: "Get a style by its ID",
	})
	async getStyleById(
		@Args("id", { type: () => ID, description: "ID of the style" }) id: string,
	): Promise<Style | null> {
		return this.styleService.getStyleById(id);
	}

	@ResolveReference()
	resolveReference(reference: { __typename: string; id: string }): Promise<Style | null> {
		return this.styleService.getStyleById(reference.id);
	}
}
