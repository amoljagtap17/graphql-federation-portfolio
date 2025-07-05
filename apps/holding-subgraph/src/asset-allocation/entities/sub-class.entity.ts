import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({
	description:
		"Sub Class entity representing a specific category of financial assets within an asset class",
})
@Directive('@key(fields: "id")')
export class SubClass {
	@Field(() => ID, { description: "Unique identifier for the sub class" })
	id: string;
}
