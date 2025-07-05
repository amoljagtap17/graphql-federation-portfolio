import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { LoggerModule } from "@app/common";
import { ApolloFederationDriver, ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { BenchmarkModule } from "./benchmark/benchmark.module";
import { PerformanceReturnModule } from "./performance-return/performance-return.module";

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: {
				federation: 2,
				path: join(process.cwd(), "apps/performance-subgraph", "src/schema.gql"),
			},
			playground: false,
			sortSchema: true,
			graphiql: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		PerformanceReturnModule,
		BenchmarkModule,
		LoggerModule,
	],
	controllers: [],
	providers: [],
})
export class PerformanceSubgraphModule {}
