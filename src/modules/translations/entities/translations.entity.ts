/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('translations')
export class Translation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;


    // Add more columns and properties as needed

    // Add relationships with other entities if required

    // Add custom methods and business logic as needed
}