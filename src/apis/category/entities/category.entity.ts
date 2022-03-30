import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn('uuid', {
    name: 'idx',
  })
  idx!: number;

  @Column({
    name: 'category_number',
    type: 'varchar',
    length: 30,
  })
  category_name!: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at!: Date;
}
