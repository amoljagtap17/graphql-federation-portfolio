import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Client } from "./client.entity";

@ObjectType({ description: "Firm entity representing a financial firm or institution" })
@Directive('@key(fields: "id")')
export class Firm {
	@Field(() => ID, { description: "Unique identifier for the firm" })
	id: string;

	@Field(() => [Client], { description: "Clients associated with the firm" })
	clients: Client[];
}
