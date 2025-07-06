import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { PerformanceReturn } from "./performance-return.entity";

@ObjectType({ description: "Holding entity representing a financial holding in the system" })
@Directive('@key(fields: "id asOfDate")')
export class Holding {
	@Field(() => ID, { description: "Unique identifier for the holding" })
	id: string;

	@Field(() => Date, { description: "Date when the holding was last updated" })
	@Directive("@shareable")
	asOfDate: Date;

	@Field(() => PerformanceReturn, {
		description: "The performance return for the holding as of the specified date",
		nullable: true,
	})
	performanceReturn?: PerformanceReturn;
}
