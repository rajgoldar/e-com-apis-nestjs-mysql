/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { CategoryService } from '../services/category.service';

@Controller()
export class CategoryController {
  constructor(private readonly __categoryService: CategoryService) { }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this._usersService.create(createUserDto);
  // }

  @Get()
  async findAll() : Promise<any> {
    return this.__categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
      return this.__categoryService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this._usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.__categoryService.remove(id);
  }

}
