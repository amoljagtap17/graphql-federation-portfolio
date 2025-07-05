import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({
	description: "Asset Class entity representing a broad category of financial assets",
})
@Directive('@key(fields: "id")')
export class AssetClass {
	@Field(() => ID, { description: "Unique identifier for the asset class" })
	id: string;
}
