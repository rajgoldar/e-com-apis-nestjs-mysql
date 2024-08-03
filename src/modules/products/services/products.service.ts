/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Products } from '../entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(Products)
        private readonly __productModel: Repository<Products>,
      ) { }
    
      async findAll(): Promise<Products[]> {
        return this.__productModel.find();
      }

      async findById(id: number): Promise<Products | null> {
        const products = await this.__productModel.findOneBy({id});
        if (!products) {
            throw new NotFoundException('Products not found!');
        }
        return products;
    }

    async remove(id: number): Promise<string> {
      const result = await this.__productModel.delete(id);
  
      if (result.affected === 0) {
        // If no rows were affected, it means the record with the given id does not exist.
        return `Products with id ${id} not found.`;
      }
  
      // Return a success message if the deletion was successful.
      return `Products with id ${id} has been successfully deleted.`;
    }

}
