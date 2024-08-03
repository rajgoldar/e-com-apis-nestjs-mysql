/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Order } from '../entities/orders.entity';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly __orderModel: Repository<Order>,
      ) { }
    
      async findAll(): Promise<Order[]> {
        return this.__orderModel.find();
      }

      async findById(id: number): Promise<Order | null> {
        const order = await this.__orderModel.findOneBy({id});
        if (!order) {
            throw new NotFoundException('Order not found!');
        }
        return order;
    }

    async remove(id: number): Promise<string> {
      const result = await this.__orderModel.delete(id);
  
      if (result.affected === 0) {
        // If no rows were affected, it means the record with the given id does not exist.
        return `Order with id ${id} not found.`;
      }
  
      // Return a success message if the deletion was successful.
      return `Order with id ${id} has been successfully deleted.`;
    }

}
