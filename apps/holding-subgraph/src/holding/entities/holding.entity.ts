import { Directive, Field, Float, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Security } from "../../security/entities/security.entity";

@ObjectType({ description: "Holding entity representing a financial holding in the system" })
@Directive('@key(fields: "id")')
@Entity({ name: "holdings" })
export class Holding {
	@Field(() => ID, { description: "Unique identifier for the holding" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "account_id" })
	accountId: string;

	@Column({ name: "security_id" })
	securityId: string;

	@Field(() => Float, { description: "Quantity of the holding" })
	@Column({ type: "decimal", precision: 20, scale: 2 })
	quantity: number;

	@Field(() => Float, { description: "Market value of the holding" })
	@Column({ type: "decimal", precision: 20, scale: 2 })
	marketValue: number;

	@Field(() => Float, { description: "Price of the holding" })
	@Column({ type: "decimal", precision: 20, scale: 2 })
	price: number;

	@Field(() => Date, { description: "Date when the holding was last updated" })
	@Column({ type: "timestamp" })
	@Directive("@shareable")
	asOfDate: Date;

	@Field(() => Security, { description: "Security associated with the holding" })
	security: Security;
}
