import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@ObjectType({ description: "Firm entity representing a financial firm or institution" })
@Directive('@key(fields: "id")')
@Entity({ name: "firms" })
export class Firm {
	@Field(() => ID, { description: "Unique identifier for the firm" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Name of the firm" })
	@Column({ unique: true })
	name: string;

	@Field(() => [User], { description: "Users associated with the firm" })
	users: User[];
}
