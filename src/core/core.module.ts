/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [DatabaseModule],
  
})
export class CoreModule {}
