/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogCategory } from '../entities/blog-categories.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class BlogCategoryService {
    constructor(
        @InjectRepository(BlogCategory)
        private readonly __blogCategoryModel: Repository<BlogCategory>,
    ) { }

    async findAll(): Promise<BlogCategory[]> {
        return this.__blogCategoryModel.find();
    }

    async findById(id: number): Promise<BlogCategory | null> {
        const blogCategory = await this.__blogCategoryModel.findOneBy({ id });
        if (!blogCategory) {
            throw new NotFoundException('Blog Category not found!');
        }
        return blogCategory;
    }

    async remove(id: number): Promise<string> {
        const result = await this.__blogCategoryModel.delete(id);

        if (result.affected === 0) {
            // If no rows were affected, it means the record with the given id does not exist.
            return `Blog Category with id ${id} not found.`;
        }

        // Return a success message if the deletion was successful.
        return `Blog Category with id ${id} has been successfully deleted.`;
    }
}
