/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { TranslationService } from '../services/translation.service';

@Controller()
export class TranslationController {
    constructor(private readonly __translationService: TranslationService) { }


    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }

    @Get()
    async findAll(): Promise<any> {
        return this.__translationService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.__translationService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.__translationService.remove(id);
    }
}
