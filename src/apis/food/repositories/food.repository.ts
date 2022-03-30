import { EntityRepository, Repository } from 'typeorm';
import { Food } from '../entities/food.entity';

@EntityRepository(Food)
export class FoodRepository extends Repository<Food> {}
