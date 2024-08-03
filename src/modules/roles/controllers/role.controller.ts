/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RoleService } from '../services/role.service';

@Controller()
export class RoleController {
  constructor(private readonly __roleService: RoleService) { }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this._usersService.create(createUserDto);
  // }

  @Get()
  async findAll(): Promise<any> {
    return this.__roleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.__roleService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this._usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.__roleService.remove(id);
  }
}
