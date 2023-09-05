import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { Article } from './Article'

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
  })
  name: string

  @ManyToMany(()=>Article,(articel)=>articel.tags)
  @JoinTable()
  articels: Article[]
}
