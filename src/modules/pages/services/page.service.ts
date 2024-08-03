/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Page } from '../entities/pages.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PageService {
    constructor(
        @InjectRepository(Page)
        private readonly __pageModel: Repository<Page>,
    ) { }

    async findAll(): Promise<Page[]> {
        return this.__pageModel.find();
    }

    async findById(id: number): Promise<Page | null> {
        const page = await this.__pageModel.findOneBy({id});
        if (!page) {
            throw new NotFoundException('Page not found!');
        }
        return page;
    }

    async remove(id: number): Promise<string> {
        const result = await this.__pageModel.delete(id);
    
        if (result.affected === 0) {
          // If no rows were affected, it means the record with the given id does not exist.
          return `Page with id ${id} not found.`;
        }
    
        // Return a success message if the deletion was successful.
        return `Page with id ${id} has been successfully deleted.`;
      }

}
