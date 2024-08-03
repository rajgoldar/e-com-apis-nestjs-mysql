/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id: number;

    @Column()
    customer_email: string;

    @Column()
    customer_phone: string;

    @Column()
    customer_first_name: string;

    @Column()
    customer_last_name: string;

    @Column()
    billing_first_name: string;

    @Column()
    billing_last_name: string;

    @Column()
    billing_address_1: string;

    @Column()
    billing_address_2: string;

    @Column()
    billing_city: string;

    @Column()
    billing_state: string;

    @Column()
    billing_zip: string;

    @Column()
    billing_country: string;

    @Column()
    shipping_first_name: string;

    @Column()
    shipping_last_name: string;

    @Column()
    shipping_address_1: string;

    @Column()
    shipping_address_2: string;

    @Column()
    shipping_city: string;

    @Column()
    shipping_state: string;

    @Column()
    shipping_zip: string;

    @Column()
    shipping_country: string;

    @Column()
    sub_total: string;

    @Column()
    shipping_method: string;

    @Column()
    shipping_cost: string;

    @Column()
    coupon_id: string;

    @Column()
    discount: string;

    @Column()
    total: string;

    @Column()
    payment_method: string;

    @Column()
    currency: string;

    @Column()
    currency_rate: string;

    @Column()
    locale: string;

    @Column()
    status: string;

    @Column()
    note: string;
}