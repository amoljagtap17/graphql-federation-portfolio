import { NestFactory } from "@nestjs/core";
import { FirmSubgraphModule } from "./firm-subgraph.module";

async function bootstrap() {
	const app = await NestFactory.create(FirmSubgraphModule);
	await app.listen(process.env.port ?? 3002);
}
bootstrap();
