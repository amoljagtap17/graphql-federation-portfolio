import { NestFactory } from "@nestjs/core";
import { HoldingSubgraphModule } from "./holding-subgraph.module";

async function bootstrap() {
	const app = await NestFactory.create(HoldingSubgraphModule);
	await app.listen(process.env.port ?? 3004);
}
bootstrap();
