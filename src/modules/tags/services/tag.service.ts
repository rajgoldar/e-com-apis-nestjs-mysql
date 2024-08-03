/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../entities/tags.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private readonly __tagModel: Repository<Tag>,
    ) { }

    async findAll(): Promise<Tag[]> {
        return this.__tagModel.find();
    }

    async findById(id: number): Promise<Tag | null> {
        const tag = await this.__tagModel.findOneBy({ id });
        if (!tag) {
            throw new NotFoundException('Tag not found!');
        }
        return tag;
    }

    async remove(id: number): Promise<string> {
        const result = await this.__tagModel.delete(id);

        if (result.affected === 0) {
            // If no rows were affected, it means the record with the given id does not exist.
            return `Tag with id ${id} not found.`;
        }

        // Return a success message if the deletion was successful.
        return `Tag with id ${id} has been successfully deleted.`;
    }


}
