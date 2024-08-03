/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private readonly __usersService: UserService) { }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this._usersService.create(createUserDto);
  // }

  @Get()
  async findAll(): Promise<any> {
    return this.__usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.__usersService.findById(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this._usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.__usersService.remove(id);
  }

}
