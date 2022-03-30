import { Module } from '@nestjs/common';
import { FoodModule } from './apis/food/food.module';
import { AdminModule } from './apis/admin/admin.module';
import { CategoryModule } from './apis/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnection } from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnection,
    }),
    FoodModule,
    AdminModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
