/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { BrandsModule } from './brands/brands.module';
import { BlogCategoriesModule } from './blog-categories/blog-categories.module';
import { CategoriesModule } from './categories/categories.module';
import { PagesModule } from './pages/pages.module';
import { RolesModule } from './roles/roles.module';
import { CouponsModule } from './coupons/coupons.module';
import { CartsModule } from './carts/carts.module';
import { OrdersModule } from './orders/orders.module';
import { TagsModule } from './tags/tags.module';
import { TranslationsModule } from './translations/translations.module';

@Module({
  imports: [
    UserModule,
    ProductsModule,
    BrandsModule,
    BlogCategoriesModule,
    CategoriesModule,
    PagesModule,
    RolesModule,
    CouponsModule,
    CartsModule,
    OrdersModule,
    TagsModule,
    TranslationsModule
  ],
})
export class AdminModule {}
