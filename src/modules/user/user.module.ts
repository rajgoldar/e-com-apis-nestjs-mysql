/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule { }
