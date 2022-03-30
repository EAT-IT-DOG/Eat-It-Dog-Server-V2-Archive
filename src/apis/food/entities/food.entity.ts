import { Category } from 'src/apis/category/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at!: Date;
}
