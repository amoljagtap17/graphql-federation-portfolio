import { Resolver } from "@nestjs/graphql";
import { Security } from "./entities/security.entity";
import { SecurityService } from "./security.service";

@Resolver(() => Security)
export class SecurityResolver {
	constructor(private readonly securityService: SecurityService) {}
}
