import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpException } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  
  /**
   * Http 로그 설정
   */

  app.useGlobalInterceptors() // 성공 로그
  app.useGlobalFilters() // 실패 로그
}
bootstrap();
