import { DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
	imports: [DatabaseModule, DatabaseModule.forFeature([User])],
	providers: [UserResolver, UserService],
})
export class UserModule {}
