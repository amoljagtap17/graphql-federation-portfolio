import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { LoggerModule } from "@app/common";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AccountModule } from "./account/account.module";
import { ClientModule } from "./client/client.module";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: {
				federation: 2,
				path: join(process.cwd(), "apps/client-subgraph", "src/schema.gql"),
			},
			playground: false,
			sortSchema: true,
			graphiql: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		ClientModule,
		AccountModule,
		LoggerModule,
	],
	controllers: [],
	providers: [],
})
export class ClientSubgraphModule {}
