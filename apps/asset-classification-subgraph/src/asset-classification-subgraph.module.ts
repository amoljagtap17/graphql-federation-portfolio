import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { LoggerModule } from "@app/common";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { BroadAssetClassModule } from "./broad-asset-class/broad-asset-class.module";
import { AssetClassModule } from './asset-class/asset-class.module';
import { SubClassModule } from './sub-class/sub-class.module';
import { StyleModule } from './style/style.module';

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
			graphiql: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		BroadAssetClassModule,
		LoggerModule,
		AssetClassModule,
		SubClassModule,
		StyleModule,
	],
	controllers: [],
	providers: [],
})
export class AssetClassificationSubgraphModule {}
