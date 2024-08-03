/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    permissions: string;

    // Add more columns as per your requirements

    // Add relationships with other entities if needed

    // Add any additional methods or decorators as per your needs
}