/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Translation } from './entities/translations.entity';
import { TranslationController } from './controllers/translation.controller';
import { TranslationService } from './services/translation.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([Translation])
    ],
    providers: [TranslationService],
    controllers: [TranslationController]
  })
export class TranslationsModule {}
