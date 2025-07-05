import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Benchmark entity representing a benchmark for performance returns" })
@Directive('@key(fields: "id")')
@Entity({ name: "benchmarks" })
export class Benchmark {
	@Field(() => ID, { description: "Unique identifier for the benchmark" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "The name of the benchmark" })
	@Column({ unique: true })
	code: string;

	@Field({ description: "The label or description of the benchmark" })
	@Column()
	label: string;
}
