import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { Style } from "./entities/style.entity";
import { StyleResolver } from "./style.resolver";
import { StyleService } from "./style.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([Style])],
	providers: [StyleResolver, StyleService],
})
export class StyleModule {}
