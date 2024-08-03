import { AdminModule } from './admin.module';
import { BlogCategoriesModule } from './blog-categories/blog-categories.module';
import { BrandsModule } from './brands/brands.module';
import { CartsModule } from './carts/carts.module';
import { CategoriesModule } from './categories/categories.module';
import { CouponsModule } from './coupons/coupons.module';
import { OrdersModule } from './orders/orders.module';
import { PagesModule } from './pages/pages.module';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { TagsModule } from './tags/tags.module';
import { TranslationsModule } from './translations/translations.module';
import { UserModule } from './user/user.module';

export const ADMIN_ROUTES = [
  {
    path: 'admin',
    module: AdminModule,
    children: [
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'products',
        module: ProductsModule,
      },
      {
        path: 'category',
        module: CategoriesModule,
      },
      {
        path: 'brands',
        module: BrandsModule,
      },
      {
        path: 'carts',
        module: CartsModule,
      },
      {
        path: 'coupons',
        module: CouponsModule,
      },
      {
        path: 'orders',
        module: OrdersModule,
      },
      {
        path: 'orders',
        module: PagesModule,
      },
      {
        path: 'pages',
        module: PagesModule,
      },
      {
        path: 'role',
        module: RolesModule,
      },
      {
        path: 'tags',
        module: TagsModule,
      },
      {
        path: 'translations',
        module: TranslationsModule,
      },
      {
        path: 'blog-categories',
        module: BlogCategoriesModule,
      },
    ],
  },
];
