import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Employee } from "./Employee";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50
  })
  name: string;

  // 因为一对多关系中，一个实体可以关联到多个其他实体，而一个实体只能关联到一个其他实体。
  // 假设有两个实体：Department（部门）和Employee（员工）。一个部门可以有多个员工，而一个员工只属于一个部门。
  // 由于一个员工只属于一个部门，所以将外键保存在Employee实体中更合适。在Employee实体中，使用@ManyToOne装饰器指定了与Department实体的多对一关系，并使用department属性来表示关联。这样，Employee实体会自动创建一个外键列（例如"department_id"），用于关联到Department实体的id主键。
  @OneToMany(()=>Employee,(employee)=>{employee.department})
  employee: Employee[];
}
