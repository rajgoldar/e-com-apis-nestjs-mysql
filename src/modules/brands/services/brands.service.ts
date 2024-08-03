/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from '../entities/brands.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class BrandsService {
    constructor(
        @InjectRepository(Brand)
        private readonly __brandModel: Repository<Brand>,
      ) { }
    
      async findAll(): Promise<Brand[]> {
        return this.__brandModel.find();
      }

      async findById(id: number): Promise<Brand | null> {
        const brand = await this.__brandModel.findOneBy({id});
        if (!brand) {
            throw new NotFoundException('Brand not found!');
        }
        return brand;
    }

    async remove(id: number): Promise<string> {
      const result = await this.__brandModel.delete(id);
  
      if (result.affected === 0) {
        // If no rows were affected, it means the record with the given id does not exist.
        return `Brand with id ${id} not found.`;
      }
  
      // Return a success message if the deletion was successful.
      return `Brand with id ${id} has been successfully deleted.`;
    }
}
