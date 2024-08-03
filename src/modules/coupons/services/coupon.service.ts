/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coupon } from '../entities/coupons.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private readonly __couponModel: Repository<Coupon>,
  ) { }

  async findAll(): Promise<Coupon[]> {
    return this.__couponModel.find();
  }

  async findById(id: number): Promise<Coupon | null> {
    const coupon = await this.__couponModel.findOneBy({ id });
    if (!coupon) {
      throw new NotFoundException('Coupon not found!');
    }
    return coupon;
  }

  async remove(id: number): Promise<string> {
    const result = await this.__couponModel.delete(id);

    if (result.affected === 0) {
      // If no rows were affected, it means the record with the given id does not exist.
      return `Coupon with id ${id} not found.`;
    }

    // Return a success message if the deletion was successful.
    return `Coupon with id ${id} has been successfully deleted.`;
  }
}
