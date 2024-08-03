/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/roles.entity';
import { RoleService } from './services/role.service';
import { RoleController } from './controllers/role.controller';

@Module({
    imports: [
      TypeOrmModule.forFeature([Role])
    ],
    providers: [RoleService],
    controllers: [RoleController]
  })
export class RolesModule {}
