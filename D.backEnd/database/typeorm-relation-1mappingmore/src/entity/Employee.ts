import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Department } from './Department';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length: 50
  })
  name: string;

  @ManyToOne(()=> Department,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  department: Department
}
