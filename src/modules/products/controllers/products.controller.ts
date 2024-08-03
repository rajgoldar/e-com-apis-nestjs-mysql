/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly __productsService: ProductsService) { }

  @Get()
  async findAll(): Promise<any> {
    // return 'Hello Worl';
    return this.__productsService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.__productsService.findById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.__productsService.remove(id);
  }

}
