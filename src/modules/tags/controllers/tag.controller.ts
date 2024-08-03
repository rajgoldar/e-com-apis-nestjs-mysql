/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TagService } from '../services/tag.service';

@Controller()
export class TagController {
  constructor(private readonly __tagService: TagService) { }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this._usersService.create(createUserDto);
  // }

  @Get()
  async findAll(): Promise<any> {
    return this.__tagService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.__tagService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this._usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.__tagService.remove(id);
  }
}
