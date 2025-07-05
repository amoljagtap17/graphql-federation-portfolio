import { DatabaseModule } from "@app/common";
import { forwardRef, Module } from "@nestjs/common";
import { FirmModule } from "../firm/firm.module";
import { User } from "./entities/user.entity";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([User]), forwardRef(() => FirmModule)],
	providers: [UserResolver, UserService],
	exports: [UserService],
})
export class UserModule {}
