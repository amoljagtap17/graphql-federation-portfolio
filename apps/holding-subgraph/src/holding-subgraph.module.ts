import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AssetAllocationModule } from "./asset-allocation/asset-allocation.module";
import { AssetClass } from "./asset-allocation/entities/asset-class.entity";
import { BroadAssetClass } from "./asset-allocation/entities/broad-asset-class.entity";
import { StyleClass } from "./asset-allocation/entities/style-class.entity";
import { SubClass } from "./asset-allocation/entities/sub-class.entity";
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
			buildSchemaOptions: {
				orphanedTypes: [BroadAssetClass, AssetClass, SubClass, StyleClass],
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
