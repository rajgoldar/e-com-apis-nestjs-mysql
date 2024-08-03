import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: process.env.TYPEORM_TYPE as 'mysql',
    //   host: process.env.TYPEORM_HOST || 'localhost',
    //   port: parseInt(process.env.TYPEORM_PORT, 10),
    //   username: process.env.TYPEORM_USERNAME,
    //   password: process.env.TYPEORM_PASSWORD,
    //   database: process.env.TYPEORM_DATABASE,
    //   //   entities: [YourEntity],
    //   synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true', // Convert string to boolean
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'prashant-ecom',
      synchronize: false, // Set to false in production
      logging: false, // Enable logging
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
