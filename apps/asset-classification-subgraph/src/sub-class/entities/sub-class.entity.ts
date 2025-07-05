import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Sub Class Entity" })
@Directive('@key(fields: "id")')
@Entity({ name: "sub_class" })
export class SubClass {
	@Field(() => ID, { description: "Unique identifier for the sub class" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Code for the sub class" })
	@Column({ unique: true })
	code: string;

	@Field({ description: "Label for the sub class" })
	@Column({ unique: true })
	label: string;

	@Field({ description: "Description of the sub class", nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Column({ name: "asset_class_id" })
	assetClassId: string;
}
