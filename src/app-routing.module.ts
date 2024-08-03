import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ADMIN_ROUTES } from './modules/admin-routing';
import { AdminModule } from './modules/admin.module';

const ROUTES = [...ADMIN_ROUTES];

@Module({
  imports: [AdminModule, RouterModule.register(ROUTES)],
})
export class AppRoutingModule {}
