import { IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { LoggerModule } from "@app/common";
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
	imports: [
		GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
			driver: ApolloGatewayDriver,
			imports: [
				ConfigModule.forRoot({
					isGlobal: true,
				}),
			],
			useFactory: (configService: ConfigService) => ({
				server: {
					plugins: [ApolloServerPluginLandingPageLocalDefault()],
					includeStacktraceInErrorResponses: false,
					playground: false,
				},
				gateway: {
					supergraphSdl: new IntrospectAndCompose({
						subgraphs: [
							{
								name: "classsification",
								url: configService.get<string>("ASSET_CLASSIFICATION_GRAPHQL_URL"),
							},
							{
								name: "firm",
								url: configService.get<string>("FIRM_GRAPHQL_URL"),
							},
						],
						subgraphHealthCheck: true,
					}),
				},
			}),
			inject: [ConfigService],
		}),
		LoggerModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
