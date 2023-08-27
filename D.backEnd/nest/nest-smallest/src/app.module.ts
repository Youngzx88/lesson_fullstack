import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PersonModule],
})
export class AppModule {}
