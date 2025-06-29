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
				ASSET_CLASSIFICATION_GRAPHQL_URL: Joi.string().uri().required(),
				NODE_ENV: Joi.string().valid("development", "production", "test").default("development"),
				LOG_LEVEL: Joi.string()
					.valid("fatal", "error", "warn", "info", "debug", "trace")
					.default("info"),
			}),
		}),
	],
})
export class ConfigModule {}
