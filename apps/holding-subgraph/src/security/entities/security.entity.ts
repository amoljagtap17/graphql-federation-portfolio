import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AssetAllocation } from "../../asset-allocation/entities/asset-allocation.entity";

@ObjectType({ description: "Security entity representing a financial security in the system" })
@Directive('@key(fields: "id")')
@Entity({ name: "securities" })
export class Security {
	@Field(() => ID, { description: "Unique identifier for the security" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Name of the security" })
	@Column({ unique: true })
	name: string;

	@Field({ description: "Ticker symbol of the security" })
	@Column({ unique: true })
	ticker: string;

	@Field({ description: "Type of the security (e.g., stock, bond)" })
	@Column()
	securityType: string;

	@Field({ description: "ISIN (International Securities Identification Number) of the security" })
	@Column({ unique: true })
	isin: string;

	@Field({
		description:
			"CUSIP (Committee on Uniform Securities Identification Procedures) of the security",
	})
	@Column({ unique: true })
	cusip: string;

	@Column({ name: "asset_allocation_id" })
	assetAllocationId: string;

	@Field(() => AssetAllocation, {
		description: "Asset allocation associated with the security",
	})
	assetAllocation: AssetAllocation;
}
