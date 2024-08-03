/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { BlogCategoryService } from '../services/blog-category.service';

@Controller()
export class BlogCategoryController {
    constructor(private readonly __blogCategoryService: BlogCategoryService) { }


    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }

    @Get()
    async findAll(): Promise<any> {
        return this.__blogCategoryService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.__blogCategoryService.findById(id);
    }
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.__blogCategoryService.remove(id);
    }
}
