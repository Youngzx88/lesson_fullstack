import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./Tag";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
      length: 100,
      comment: '文章标题'
  })
  title: string;

  @Column({
      type: 'text',
      comment: '文章内容'
  })
  content: string;

  // JoinTable，自动创建中间关联表，自己指定中间表的名字：在joinTable中指定name！
  @JoinTable()
  @ManyToMany(()=>Tag,(tag) => tag.articels)
  tags: Tag[]
}
