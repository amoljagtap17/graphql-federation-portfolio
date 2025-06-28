import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { ConfigModule } from "../config";

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: "postgres",
				host: configService.get<string>("DATABASE_HOST"),
				port: configService.get<number>("DATABASE_PORT"),
				username: configService.get<string>("DATABASE_USERNAME"),
				password: configService.get<string>("DATABASE_PASSWORD"),
				database: configService.get<string>("DATABASE_NAME"),
				synchronize: configService.get<boolean>("DATABASE_SYNCHRONIZE"),
				autoLoadEntities: configService.get<boolean>("DATABASE_AUTO_LOAD_ENTITIES"),
			}),
			inject: [ConfigService],
		}),
	],
})
export class DatabaseModule {
	static forFeature(models: EntityClassOrSchema[]) {
		return TypeOrmModule.forFeature(models);
	}
}
