/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('blog_categories')
export class BlogCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    slug: string;

    // Add more columns and relationships as needed

    // Add constructor and methods if required
}