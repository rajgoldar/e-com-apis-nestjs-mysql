/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('coupons')
export class Coupon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    value: string;

    @Column()
    is_percent: string;

    @Column()
    free_shipping: string;

    @Column()
    minimum_spend: string;

    @Column()
    maximum_spend: string;

    @Column()
    usage_limit_per_coupon: string;

    @Column()
    usage_limit_per_customer: string;

    @Column()
    used: string;

    @Column()
    is_active: string;

    @Column()
    start_date: string;

    @Column()
    end_date: string;




    // Add more properties and methods as needed

}