/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;
    
    @Column()
    is_active: number;

}