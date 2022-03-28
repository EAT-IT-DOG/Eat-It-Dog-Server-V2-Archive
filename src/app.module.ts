import { MiddlewareConsumer, Module } from '@nestjs/common';
import { FoodModule } from './apis/food/food.module';

@Module({
  imports: [FoodModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
