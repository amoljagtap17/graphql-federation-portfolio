import { NestFactory } from '@nestjs/core';
import { AssetClassificationSubgraphModule } from './asset-classification-subgraph.module';

async function bootstrap() {
  const app = await NestFactory.create(AssetClassificationSubgraphModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
