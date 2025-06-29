import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { BroadAssetClassModule } from "./broad-asset-class/broad-asset-class.module";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: {
				federation: 2,
				path: join(process.cwd(), "apps/asset-classification-subgraph", "src/schema.gql"),
			},
			playground: false,
			sortSchema: true,
			graphiql: true,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		BroadAssetClassModule,
	],
	controllers: [],
	providers: [],
})
export class AssetClassificationSubgraphModule {}
