import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AssetAllocationModule } from "./asset-allocation/asset-allocation.module";
import { HoldingModule } from "./holding/holding.module";
import { SecurityModule } from "./security/security.module";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: {
				federation: 2,
				path: join(process.cwd(), "apps/holding-subgraph", "src/schema.gql"),
			},
			playground: false,
			sortSchema: true,
			graphiql: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		HoldingModule,
		SecurityModule,
		AssetAllocationModule,
	],
	controllers: [],
	providers: [],
})
export class HoldingSubgraphModule {}
