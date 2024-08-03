/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    parent_id: number;

    @Column()
    slug: string;

    @Column()
    position: number;

    @Column()
    is_searchable: string;

    @Column()
    is_active: number;

}