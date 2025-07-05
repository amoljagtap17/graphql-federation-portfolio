import { NestFactory } from '@nestjs/core';
import { PerformanceSubgraphModule } from './performance-subgraph.module';

async function bootstrap() {
  const app = await NestFactory.create(PerformanceSubgraphModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
