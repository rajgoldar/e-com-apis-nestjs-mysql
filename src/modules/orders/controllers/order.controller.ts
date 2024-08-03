/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { OrderService } from '../services/order.service';

@Controller()
export class OrderController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly __orderService: OrderService) { }


    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }

    @Get()
    async findAll(): Promise<any> {
        return this.__orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.__orderService.findById(id);
    }
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.__orderService.remove(id);
    }
}
