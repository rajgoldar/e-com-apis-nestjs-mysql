/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from './entities/pages.entity';
import { PageService } from './services/page.service';
import { PageController } from './controllers/page.controller';

@Module({
    // eslint-disable-next-line prettier/prettier
    imports: [
        TypeOrmModule.forFeature([Page])
    ],
    providers: [PageService],
    controllers: [PageController]
})
export class PagesModule { }
