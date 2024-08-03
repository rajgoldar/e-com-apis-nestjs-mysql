/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogCategory } from './entities/blog-categories.entity';
import { BlogCategoryService } from './services/blog-category.service';
import { BlogCategoryController } from './controllers/blog-category.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([BlogCategory])
  ],
  providers: [BlogCategoryService],
  controllers: [BlogCategoryController]
})
export class BlogCategoriesModule {}
