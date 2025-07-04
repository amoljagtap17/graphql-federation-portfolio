import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType({
	description: "Asset Allocation entity representing a financial asset allocation in the system",
})
@Directive('@key(fields: "id")')
@Entity({ name: "asset_allocations" })
export class AssetAllocation {
	@Field(() => ID, { description: "Unique identifier for the asset allocation" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	broadAssetClassId: string;

	@Column()
	assetClassId: string;

	@Column()
	subClassId: string;

	@Column()
	styleId: string;
}
