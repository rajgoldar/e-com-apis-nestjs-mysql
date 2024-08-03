/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PageService } from '../services/page.service';

@Controller()
export class PageController {
    constructor(private readonly __pageService: PageService) { }


    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }
  
    @Get()
    async findAll() : Promise<any> {
      return this.__pageService.findAll();
    }
  
 
    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.__pageService.findById(id);
    }
  
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.__pageService.remove(id);
    }
}
