import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import loggingMiddleware from './common/middlewares/logging.middleware';
import { setupSwagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });
  app.use(loggingMiddleware);
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
