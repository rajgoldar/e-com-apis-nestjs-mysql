/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([Products])
    ],
    providers: [ProductsService],
    controllers: [ProductsController]
  })
export class ProductsModule {}
