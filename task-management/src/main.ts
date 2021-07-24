import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the application, and pass the root module
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
