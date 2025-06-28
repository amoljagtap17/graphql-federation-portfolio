import { IntrospectAndCompose } from "@apollo/gateway";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
			driver: ApolloGatewayDriver,
			server: {
				plugins: [ApolloServerPluginLandingPageLocalDefault()],
				includeStacktraceInErrorResponses: false,
				playground: false,
			},
			gateway: {
				supergraphSdl: new IntrospectAndCompose({
					subgraphs: [{ name: "classsification", url: "http://localhost:3001" }],
					subgraphHealthCheck: true,
				}),
			},
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
