/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Translation } from '../entities/translations.entity';

@Injectable()
export class TranslationService {
    constructor(
        @InjectRepository(Translation)
        private readonly __translationModel: Repository<Translation>,
    ) { }

    async findAll(): Promise<Translation[]> {
        return this.__translationModel.find();
    }

    async findById(id: number): Promise<Translation | null> {
        const translation = await this.__translationModel.findOneBy({id});
        if (!translation) {
            throw new NotFoundException('Translation not found!');
        }
        return translation;
    }

    async remove(id: number): Promise<string> {
        const result = await this.__translationModel.delete(id);

        if (result.affected === 0) {
            // If no rows were affected, it means the record with the given id does not exist.
            return `Translation with id ${id} not found.`;
        }

        // Return a success message if the deletion was successful.
        return `Translation with id ${id} has been successfully deleted.`;
    }


}
