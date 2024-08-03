/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { BrandsService } from '../services/brands.service';

@Controller()
export class BrandsController {
    constructor(private readonly __brandsService: BrandsService) { }

    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }

    @Get()
    async findAll(): Promise<any> {
        return this.__brandsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.__brandsService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.__brandsService.remove(id);
    }

}
