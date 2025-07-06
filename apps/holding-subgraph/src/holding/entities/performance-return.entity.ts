import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "Performance Return entity representing performance data" })
@Directive('@key(fields: "id")')
export class PerformanceReturn {
	@Field(() => ID, { description: "Unique identifier for the performance return" })
	id: string;
}
