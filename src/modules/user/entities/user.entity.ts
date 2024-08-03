/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column()
    permissions: string;

    @Column()
    last_login: string;


    // You can define other columns and relationships here
}