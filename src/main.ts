import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingMiddleware } from './common/middlewares/logging.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggingMiddleware);
  await app.listen(3000);
}
bootstrap();
