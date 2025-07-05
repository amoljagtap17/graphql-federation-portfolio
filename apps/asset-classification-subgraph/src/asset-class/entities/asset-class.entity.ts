import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({ description: "Asset Class" })
@Directive('@key(fields: "id")')
@Entity({ name: "asset_class" })
export class AssetClass {
	@Field(() => ID, { description: "Unique identifier for the asset class" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Code for the asset class" })
	@Column({ unique: true })
	code: string;

	@Field({ description: "Label for the asset class" })
	@Column({ unique: true })
	label: string;

	@Field({ description: "Description of the asset class", nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Column({ name: "broad_asset_class_id" })
	broadAssetClassId: string;
}
