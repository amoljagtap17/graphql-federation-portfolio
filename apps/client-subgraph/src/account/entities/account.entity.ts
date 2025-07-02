import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@ObjectType({ description: "Account entity representing a financial account in the system" })
@Directive('@key(fields: "id")')
@Entity({ name: "accounts" })
export class Account {
	@Field(() => ID, { description: "Unique identifier for the account" })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Field({ description: "Account number" })
	@Column({ unique: true })
	accountNumber: string;

	@Field({ description: "Type of the account" })
	@Column()
	accountType: string;

	@Column({ name: "client_id" })
	clientId: string;

	@Field(() => Client, { description: "Client associated with the account" })
	client: Client;
}
