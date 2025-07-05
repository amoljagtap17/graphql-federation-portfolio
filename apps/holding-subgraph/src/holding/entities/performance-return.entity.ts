import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Performance Return entity representing performance data" })
@Directive('@key(fields: "id")')
export class PerformanceReturn {
	@Field(() => ID, { description: "Unique identifier for the performance return" })
	@PrimaryGeneratedColumn("uuid")
	id: string;
}
