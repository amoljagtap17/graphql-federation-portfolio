import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "../../account/entities/account.entity";

@ObjectType({ description: "Client entity representing a client in the system" })
@Directive('@key(fields: "id")')
@Entity({ name: "clients" })
export class Client {
	@Field(() => ID, { description: "Unique identifier for the client" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Name of the client" })
	@Column()
	name: string;

	@Column()
	firmId: string;

	@Field(() => [Account], { description: "Accounts associated with the client" })
	accounts: Account[];
}
