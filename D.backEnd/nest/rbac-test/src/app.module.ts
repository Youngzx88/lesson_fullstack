import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permission } from './user/entities/permisssion.entity';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "12345678",
      database: "rbac_test",
      synchronize: true,
      logging: true,
      entities: [User,Role,Permission],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
          authPlugin: 'sha256_password',
      }
    }), UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
