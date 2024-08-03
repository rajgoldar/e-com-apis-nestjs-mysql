/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { CartsService } from '../services/carts.service';

@Controller()
export class CartsController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly __cartsService: CartsService) { }


    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }

    @Get()
    async findAll(): Promise<any> {
        return this.__cartsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.__cartsService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.__cartsService.remove(id);
    }
}
