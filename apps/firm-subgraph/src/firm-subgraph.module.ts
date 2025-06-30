import { Module } from "@nestjs/common";
import { FirmModule } from "./firm/firm.module";
import { UserModule } from './user/user.module';

@Module({
	imports: [FirmModule, UserModule],
	controllers: [],
	providers: [],
})
export class FirmSubgraphModule {}
