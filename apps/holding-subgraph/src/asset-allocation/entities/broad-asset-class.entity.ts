import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({
	description:
		"Broad Asset Class entity representing a high-level classification of financial assets",
})
@Directive('@key(fields: "id")')
export class BroadAssetClass {
	@Field(() => ID, { description: "Unique identifier for the broad asset class" })
	id: string;
}
