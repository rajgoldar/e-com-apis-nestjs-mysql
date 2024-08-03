/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Users } from './user.entity';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    CoreModule,
    AppRoutingModule
  ]
})
export class AppModule {}
