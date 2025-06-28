import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import * as Joi from "joi";

@Module({
	imports: [
		NestConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				DATABASE_HOST: Joi.string().required(),
				DATABASE_PORT: Joi.number().default(5432),
				DATABASE_USERNAME: Joi.string().required(),
				DATABASE_PASSWORD: Joi.string().required(),
				DATABASE_NAME: Joi.string().required(),
				DATABASE_SYNCHRONIZE: Joi.boolean().default(true),
				DATABASE_AUTO_LOAD_ENTITIES: Joi.boolean().default(true),
			}),
		}),
	],
})
export class ConfigModule {}
