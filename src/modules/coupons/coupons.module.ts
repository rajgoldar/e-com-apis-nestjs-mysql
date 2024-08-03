/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coupon } from './entities/coupons.entity';
import { CouponService } from './services/coupon.service';
import { CouponController } from './controllers/coupon.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coupon])
  ],
  providers: [CouponService],
  controllers: [CouponController]
})
export class CouponsModule { }
