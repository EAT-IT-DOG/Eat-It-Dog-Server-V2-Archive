import { Category } from 'src/apis/category/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('food')
export class Food {
  @PrimaryGeneratedColumn('uuid', {
    name: 'idx',
  })
  idx!: number;

  @Column({
    name: 'food_number',
    type: 'varchar',
    length: 30,
  })
  food_name!: string;

  @Column({
    name: 'risky_rate',
  })
  risky_rate!: number;

  @ManyToOne(() => Category, (category) => category.idx)
  fk_category_idx!: number;
}
