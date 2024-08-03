/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pages')
export class Page {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    @Column()
    is_active: number;

}