import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('admin')
export class Admin {
  @PrimaryColumn({
    name: 'id',
  })
  id!: number;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 50,
  })
  password!: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 10,
  })
  name!: string;
}
