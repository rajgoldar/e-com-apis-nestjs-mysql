/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/categories.entity';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private readonly __categoryModel: Repository<Category>,
      ) { }
    
      async findAll(): Promise<Category[]> {
        return this.__categoryModel.find();
      }

      async findById(id: number): Promise<Category | null> {
        const category = await this.__categoryModel.findOneBy({id});
        if (!category) {
            throw new NotFoundException('Category not found!');
        }
        return category;
    }

    async remove(id: number): Promise<string> {
      const result = await this.__categoryModel.delete(id);
  
      if (result.affected === 0) {
        // If no rows were affected, it means the record with the given id does not exist.
        return `Category with id ${id} not found.`;
      }
  
      // Return a success message if the deletion was successful.
      return `Category with id ${id} has been successfully deleted.`;
    }

}
