import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';

@Module({
  imports: [],
  controllers: [FoodController],
  providers: [],
})
export class FoodModule {}
