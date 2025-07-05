import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AssetClass } from "./asset-class.entity";
import { BroadAssetClass } from "./broad-asset-class.entity";
import { Style } from "./style-class.entity";
import { SubClass } from "./sub-class.entity";

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

	@Field(() => BroadAssetClass, {
		description: "The broad asset class associated with the asset allocation",
	})
	broadAssetClass: BroadAssetClass;

	@Field(() => AssetClass, {
		description: "The asset class associated with the asset allocation",
	})
	assetClass: AssetClass;

	@Field(() => SubClass, {
		description: "The sub class associated with the asset allocation",
	})
	subClass: SubClass;

	@Field(() => Style, {
		description: "The style class associated with the asset allocation",
	})
	style: Style;
}
