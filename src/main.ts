/* eslint-disable prettier/prettier */
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
declare const module: any;

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
//   if (module.hot) {
//     module.hot.accept();
//     module.hot.dispose(() => app.close());
//   }
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('api/_v1.0/');
  const config = new DocumentBuilder()
    .setTitle('Golds - NestJS')
    .setDescription('The E-Commerce API description')
    .setVersion('1.0')
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'jwt') 
    // .addBearerAuth({
    //   type: "http",
    //   scheme: "bearer",
    //   bearerFormat: "JWT",
    //   in: "header",
    //   name: "Authorization"
    // }, 'JWT-auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();