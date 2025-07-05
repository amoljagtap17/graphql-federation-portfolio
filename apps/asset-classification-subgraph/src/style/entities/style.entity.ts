import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Style Entity" })
@Directive('@key(fields: "id")')
@Entity({ name: "style" })
export class Style {
	@Field(() => ID, { description: "Unique identifier for the style class" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Code for the style class" })
	@Column({ unique: true })
	code: string;

	@Field({ description: "Label for the style class" })
	@Column({ unique: true })
	label: string;

	@Field({ description: "Description of the style class", nullable: true })
	@Column({ nullable: true })
	description?: string;
}
