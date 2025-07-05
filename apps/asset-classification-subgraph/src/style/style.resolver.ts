import { Resolver } from "@nestjs/graphql";
import { Style } from "./entities/style.entity";
import { StyleService } from "./style.service";

@Resolver(() => Style)
export class StyleResolver {
	constructor(private readonly styleService: StyleService) {}
}
