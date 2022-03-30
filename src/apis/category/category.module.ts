import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forRoot([CategoryRepository])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
