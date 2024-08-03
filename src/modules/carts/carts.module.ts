/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CartsService } from './services/carts.service';
import { CartsController } from './controllers/carts.controller';
import { Cart } from './entities/carts.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    // eslint-disable-next-line prettier/prettier
    imports: [
      TypeOrmModule.forFeature([Cart])
    ],
    providers: [CartsService],
    controllers: [CartsController]
  })
export class CartsModule {}
