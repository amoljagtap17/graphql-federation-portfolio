import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { LoggerModule as NestPinoLoggerModule } from "nestjs-pino";

@Module({
	imports: [
		NestPinoLoggerModule.forRootAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => ({
				pinoHttp: {
					level: configService.get<string>("LOG_LEVEL") || "info",
					transport:
						configService.get<string>("NODE_ENV") !== "production"
							? {
									target: "pino-pretty",
									options: {
										colorize: true,
										singleLine: true,
										translateTime: "HH:MM:ss Z",
										ignore: "pid,hostname",
									},
								}
							: undefined,
					// Custom serializers for GraphQL operations
					serializers: {
						req: (req: any) => ({
							id: req.id,
							method: req.method,
							url: req.url,
							// Include GraphQL operation details
							...(req.body && {
								graphql: {
									operationName: req.body.operationName,
									operationType: getOperationType(req.body.query),
									variables: req.body.variables ? Object.keys(req.body.variables) : undefined,
								},
							}),
						}),
						res: (res: any) => ({
							statusCode: res.statusCode,
						}),
						err: (err: any) => ({
							type: err.constructor.name,
							message: err.message,
							stack: err.stack,
							// Include GraphQL error details
							...(err.extensions && {
								graphql: {
									code: err.extensions.code,
									path: err.path,
								},
							}),
						}),
					},
					// Custom log messages for GraphQL operations
					customLogLevel: (req: any, res: any, err: any) => {
						if (res.statusCode >= 400 && res.statusCode < 500) {
							return "warn";
						} else if (res.statusCode >= 500 || err) {
							return "error";
						} else if (res.statusCode >= 300 && res.statusCode < 400) {
							return "silent";
						}

						return "info";
					},
					// Custom success message for GraphQL operations
					customSuccessMessage: (req: any, res: any, responseTime: number) => {
						if (req.body?.query) {
							const operationType = getOperationType(req.body.query);
							const operationName = req.body.operationName || "Anonymous";

							return `GraphQL ${operationType}: ${operationName} completed in ${responseTime}ms`;
						}

						return `${req.method} ${req.url} completed in ${responseTime}ms`;
					},
					// Custom error message for GraphQL operations
					customErrorMessage: (req: any, res: any, err: any) => {
						if (req.body?.query) {
							const operationType = getOperationType(req.body.query);
							const operationName = req.body.operationName || "Anonymous";

							return `GraphQL ${operationType}: ${operationName} failed - ${err.message}`;
						}

						return `${req.method} ${req.url} failed - ${err.message}`;
					},
				},
			}),
		}),
	],
})
export class LoggerModule {}

// Helper function to extract operation type from GraphQL query
function getOperationType(query?: string): string {
	if (!query) return "unknown";

	const trimmedQuery = query.trim();

	if (trimmedQuery.startsWith("query")) return "query";
	if (trimmedQuery.startsWith("mutation")) return "mutation";
	if (trimmedQuery.startsWith("subscription")) return "subscription";
	if (trimmedQuery.startsWith("{")) return "query"; // shorthand query

	return "unknown";
}
