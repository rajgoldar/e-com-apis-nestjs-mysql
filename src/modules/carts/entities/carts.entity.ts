/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carts')
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    data: number;

}