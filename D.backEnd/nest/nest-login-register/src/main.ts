import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置跨域选项
  const corsOptions: CorsOptions = {
    origin: true, // 允许所有来源
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // 允许的请求方法
    allowedHeaders: 'Content-Type,Authorization', // 允许的请求头
    preflightContinue: false,
    optionsSuccessStatus: 200,
  };
  app.enableCors(corsOptions);
  app.enableCors({
    exposedHeaders: 'token', // 在这里列出要暴露的自定义头部信息
  });
  await app.listen(3000);
}
bootstrap();
