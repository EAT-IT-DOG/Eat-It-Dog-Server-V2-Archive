import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('food')
export class Food {
  @PrimaryGeneratedColumn()
  idx: number;

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
}
