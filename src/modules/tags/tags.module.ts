/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Tag } from './entities/tags.entity';
import { TagService } from './services/tag.service';
import { TagController } from './controllers/tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Tag])
    ],
    providers: [TagService],
    controllers: [TagController]
})
export class TagsModule { }
