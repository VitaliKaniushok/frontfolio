import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";

@Module({})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3002);
  console.log("Backend running on http://localhost:3002");
}

bootstrap();
