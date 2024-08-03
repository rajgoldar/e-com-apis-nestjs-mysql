/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly __userModel: Repository<Users>,
  ) { }

  async findAll(): Promise<Users[]> {
    return this.__userModel.find();
  }

  async findById(id: number): Promise<Users | null> {
    const users = await this.__userModel.findOneBy({ id });
    if (!users) {
      throw new NotFoundException('User not found!');
    }
    return users;
  }

  // async create(payload: Partial<Users>): Promise<Users> {
  //   const newEntity = this.__userModel.create(payload);
  //   return this.__userModel.save(newEntity);
  // }

  // async update(id: number, payload: Partial<Users>): Promise<Users> {
  //   await this.__userModel.update(id, payload);
  //   return this.__userModel.findOneBy({ id });
  // }

  async remove(id: number): Promise<string> {
    const result = await this.__userModel.delete(id);

    if (result.affected === 0) {
      // If no rows were affected, it means the record with the given id does not exist.
      return `User with id ${id} not found.`;
    }

    // Return a success message if the deletion was successful.
    return `User with id ${id} has been successfully deleted.`;
  }
  

}
