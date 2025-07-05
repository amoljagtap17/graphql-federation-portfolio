import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({
	description:
		"Style Class entity representing a classification of financial assets based on investment style",
})
@Directive('@key(fields: "id")')
export class StyleClass {
	@Field(() => ID, { description: "Unique identifier for the style class" })
	id: string;
}
