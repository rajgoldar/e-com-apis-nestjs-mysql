/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/orders.entity';
import { OrderService } from './services/order.service';
import { OrderController } from './controllers/order.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([Order])
    ],
    providers: [OrderService],
    controllers: [OrderController]
  })
export class OrdersModule {}
