/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../entities/carts.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class CartsService {
    constructor(
        @InjectRepository(Cart)
        private readonly __cartModel: Repository<Cart>,
      ) { }
    
      async findAll(): Promise<Cart[]> {
        return this.__cartModel.find();
      }

      async findById(id: number): Promise<Cart | null> {
        const cart = await this.__cartModel.findOneBy({id});
        if (!cart) {
            throw new NotFoundException('Cart not found!');
        }
        return cart;
    }

    async remove(id: number): Promise<string> {
      const result = await this.__cartModel.delete(id);
  
      if (result.affected === 0) {
        // If no rows were affected, it means the record with the given id does not exist.
        return `Cart with id ${id} not found.`;
      }
  
      // Return a success message if the deletion was successful.
      return `Cart with id ${id} has been successfully deleted.`;
    }
}
