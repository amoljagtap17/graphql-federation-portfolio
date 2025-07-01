import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Firm } from "../../firm/entities/firm.entity";

@ObjectType({ description: "User entity representing a user in the system" })
@Directive('@key(fields: "id")')
@Entity({ name: "users" })
export class User {
	@Field(() => ID, { description: "Unique identifier for the user" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Username of the user" })
	@Column({ unique: true })
	username: string;

	@Field({ description: "Email of the user" })
	@Column({ unique: true })
	email: string;

	@Field({ description: "Display name of the user", nullable: true })
	@Column({ nullable: true })
	displayName?: string;

	@Column({ name: "firm_id" })
	firmId: string;

	@Field(() => Firm, { description: "Firm associated with the user" })
	@ManyToOne(() => Firm, (firm) => firm.users, { nullable: false })
	@JoinColumn({ name: "firm_id" })
	firm: Firm;
}
