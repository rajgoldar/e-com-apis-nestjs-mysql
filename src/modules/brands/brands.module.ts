/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands.controller';
import { BrandsService } from './services/brands.service';
import { Brand } from './entities/brands.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Brand])
  ],
  providers: [BrandsService],
  controllers: [BrandsController]
})
export class BrandsModule {}
