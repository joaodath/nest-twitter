import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true, //If set to true, instead of stripping non-whitelisted properties validator will throw an exception.
      skipMissingProperties: false, //If set to true, validator will skip validation of all properties that are missing in the validating object.
      forbidUnknownValues: true, //If set to true, attempts to validate unknown objects fail immediately.
      validationError: { target: false, value: false }, //target: Indicates if target should be exposed in ValidationError. - value: Indicates if validated value should be exposed in ValidationError.
    }),
  );
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
