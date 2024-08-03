/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand_id: string;

    @Column()
    tax_class_id: string;

    @Column()
    slug: string;

    @Column()
    price: string;

    @Column()
    special_price: string;

    @Column()
    special_price_type: string;

    @Column()
    special_price_start: string;

    @Column()
    special_price_end: string;

    @Column()
    selling_price: string;

    @Column()
    sku: string;

    @Column()
    manage_stock: string;

    @Column()
    qty: string;

    @Column()
    in_stock: string;

    @Column()
    viewed: string;

    @Column()
    is_active: string;

    @Column()
    new_from: string;

    @Column()
    new_to: string;

    @Column()
    is_virtual: string;

}