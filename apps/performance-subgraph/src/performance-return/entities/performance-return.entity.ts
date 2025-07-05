import { Directive, Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Performance Return entity representing performance data" })
@Directive('@key(fields: "id")')
@Entity({ name: "performance_returns" })
export class PerformanceReturn {
	@Field(() => ID, { description: "Unique identifier for the performance return" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({
		description: "The entity type for which the performance return is calculated",
	})
	@Column({ name: "entity_type" })
	entityType: string;

	@Field(() => ID, { description: "The unique identifier of the entity" })
	@Column({ name: "entity_id" })
	entityId: string;

	@Field(() => Date, { description: "The date for which the performance return is calculated" })
	@Column({ type: "timestamp" })
	asOfDate: Date;

	@Field(() => Float, { description: "The percentage return for the entity" })
	@Column({ type: "decimal", precision: 5, scale: 2 })
	mdtReturnPercent: number;

	@Field(() => Float, {
		description: "The percentage return for the entity in the previous period",
	})
	@Column({ type: "decimal", precision: 5, scale: 2 })
	qtdReturnPercent: number;

	@Field(() => Float, {
		description: "The percentage return for the entity in the year-to-date period",
	})
	@Column({ type: "decimal", precision: 5, scale: 2 })
	ytdReturnPercent: number;

	@Field(() => Float, {
		description: "The percentage return for the benchmark",
	})
	@Column({ type: "decimal", precision: 5, scale: 2 })
	benchmarkReturnPercent: number;

	@Field(() => ID, { description: "The unique identifier of the benchmark" })
	@Column({ name: "benchmark_id" })
	benchmarkId: string;
}
