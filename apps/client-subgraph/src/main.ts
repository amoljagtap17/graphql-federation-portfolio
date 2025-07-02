import { NestFactory } from '@nestjs/core';
import { ClientSubgraphModule } from './client-subgraph.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientSubgraphModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
