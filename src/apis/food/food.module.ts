import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodController } from './food.controller';
import { FoodRepository } from './repositories/food.repository';

@Module({
  imports: [TypeOrmModule.forRoot([FoodRepository])],
  controllers: [FoodController],
  providers: [],
})
export class FoodModule {}
