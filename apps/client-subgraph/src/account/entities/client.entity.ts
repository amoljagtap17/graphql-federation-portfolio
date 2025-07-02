import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Account } from "./account.entity";

@ObjectType()
@Directive('@key(fields: "id")')
export class Client {
	@Field(() => ID, { description: "Unique identifier for the client" })
	id: string;

	@Field(() => [Account], { description: "Accounts associated with the client" })
	accounts: Account[];
}
