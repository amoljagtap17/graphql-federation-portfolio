import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Broad Asset Class" })
@Directive('@key(fields: "id")')
@Entity({ name: "broad_asset_class" })
export class BroadAssetClass {
	@Field(() => ID, { description: "Unique identifier for the broad asset class" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Name of the broad asset class" })
	@Column({ unique: true })
	name: string;

	@Field({ description: "Description of the broad asset class" })
	@Column({ nullable: true })
	description?: string;
}
