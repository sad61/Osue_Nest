import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
  });
  await app.listen(process.env.PORT || 3000);

}

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

bootstrap();