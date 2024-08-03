/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { CouponService } from '../services/coupon.service';

@Controller()
export class CouponController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly __couponService: CouponService) { }


    // @Post()
    // create(@Body() createUserDto: CreateUserDto) {
    //   return this._usersService.create(createUserDto);
    // }

    @Get()
    async findAll(): Promise<any> {
        return this.__couponService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.__couponService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    //   return this._usersService.update(+id, updateUserDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.__couponService.remove(id);
    }
}
